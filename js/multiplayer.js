// Multiplayer and Social Features System - Realtime Firebase Implementation
class MultiplayerSystem {
    constructor() {
        this.db = null; // Will be initialized in init
        this.currentRoomId = null;
        this.unsubscribeRoom = null;
        this.unsubscribePlayers = null;
        this.unsubscribeMessages = null;
        this.unsubscribePrompt = null;
        this.playerId = this.getOrCreatePlayerId();
        this.playerName = localStorage.getItem('userName') || 'Guest_' + this.playerId.substr(0, 4);
        this.isHost = false;
        
        // Initialize immediately
        this.init();
    }

    getOrCreatePlayerId() {
        let id = localStorage.getItem('multiplayerId');
        if (!id) {
            id = 'p_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('multiplayerId', id);
        }
        return id;
    }

    init() {
        // Wait for Firebase to be available
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
            this.db = firebase.firestore();
            console.log('Multiplayer System: Firebase connected');
        } else {
            console.warn('Multiplayer System: Firebase not available yet, retrying...');
            setTimeout(() => this.init(), 1000);
            return;
        }

        this.createMultiplayerUI();
        this.setupEventListeners();
        
        // Update player name if logged in
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.playerName = user.displayName || user.email.split('@')[0];
                this.playerId = user.uid;
            }
        });
    }

    createMultiplayerUI() {
        // Remove existing panel if present to prevent duplicates
        const existing = document.getElementById('multiplayer-panel');
        if (existing) existing.remove();

        const multiplayerHTML = `
            <div class="multiplayer-panel hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" id="multiplayer-panel">
                <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                    <div class="panel-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                        <div class="flex justify-between items-center">
                            <div>
                                <h2 class="text-3xl font-bold mb-1">🌐 Multiplayer Mode</h2>
                                <p class="text-blue-100">Collaborate and chat in real-time!</p>
                            </div>
                            <button class="close-panel text-white hover:bg-white/20 rounded-full p-2 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="panel-content p-6 overflow-y-auto flex-1">
                        <!-- Room Selection -->
                        <div class="room-selection" id="room-selection">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Create Room -->
                                <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-colors">
                                    <div class="text-4xl mb-4">🏠</div>
                                    <h4 class="text-xl font-bold mb-4 text-green-900">Create New Room</h4>
                                    <div class="space-y-3">
                                        <input type="text" id="room-name" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Room Name (e.g. Prompt Party)">
                                        <select id="room-mode" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white">
                                            <option value="collaborative">🤝 Collaborative</option>
                                            <option value="competitive">⚔️ Competitive (Coming Soon)</option>
                                        </select>
                                        <button class="btn w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-bold shadow-lg transform active:scale-95 transition-all" onclick="multiplayerSystem.createRoom()">
                                            Create Room
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Join Room -->
                                <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-colors">
                                    <div class="text-4xl mb-4">🔑</div>
                                    <h4 class="text-xl font-bold mb-4 text-blue-900">Join Existing Room</h4>
                                    <div class="space-y-3">
                                        <input type="text" id="join-code" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none uppercase tracking-widest font-mono" placeholder="ENTER 6-DIGIT CODE">
                                        <button class="btn w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-bold shadow-lg transform active:scale-95 transition-all" onclick="multiplayerSystem.joinRoom()">
                                            Join Room
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Active Room -->
                        <div class="active-room hidden h-full flex flex-col" id="active-room">
                            <div class="flex justify-between items-start mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                        <span id="current-room-name">Loading...</span>
                                        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full" id="room-mode-badge">Collaborative</span>
                                    </h3>
                                    <div class="flex items-center gap-2 mt-1">
                                        <span class="text-gray-500">Room Code:</span>
                                        <code id="room-code" class="bg-white px-3 py-1 rounded border font-mono font-bold text-lg tracking-wider select-all cursor-pointer" title="Click to copy">...</code>
                                    </div>
                                </div>
                                <button class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors border border-transparent hover:border-red-200" onclick="multiplayerSystem.leaveRoom()">
                                    Leave Room
                                </button>
                            </div>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                                <!-- Left Column: Workspace -->
                                <div class="lg:col-span-2 flex flex-col gap-6">
                                    <!-- Collaborative Prompt -->
                                    <div class="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col flex-1">
                                        <div class="p-4 border-b bg-gray-50 rounded-t-xl flex justify-between items-center">
                                            <h4 class="font-bold text-gray-700 flex items-center gap-2">
                                                <span>📝</span> Shared Prompt
                                            </h4>
                                            <span class="text-xs text-green-600 flex items-center gap-1">
                                                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Live Sync
                                            </span>
                                        </div>
                                        <div class="p-4 flex-1">
                                            <textarea id="shared-prompt" 
                                                      class="w-full h-full min-h-[200px] p-4 border-2 border-gray-100 rounded-lg focus:border-indigo-500 focus:ring-0 transition-colors resize-none font-mono text-sm" 
                                                      placeholder="Type here to collaborate with your team in real-time..."></textarea>
                                        </div>
                                        <div class="p-4 border-t bg-gray-50 rounded-b-xl flex justify-between items-center">
                                            <p class="text-xs text-gray-500">Changes allow 500ms debounce</p>
                                            <button class="btn bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-medium" onclick="multiplayerSystem.copyPrompt()">
                                                Copy Prompt
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Column: Players & Chat -->
                                <div class="flex flex-col gap-4 h-full">
                                    <!-- Players List -->
                                    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                                        <h4 class="font-bold text-gray-700 mb-3 flex items-center justify-between">
                                            <span>👥 Players</span>
                                            <span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs" id="player-count">0</span>
                                        </h4>
                                        <div id="players-list" class="grid grid-cols-1 gap-2 max-h-[150px] overflow-y-auto pr-2">
                                            <!-- Players injected here -->
                                        </div>
                                    </div>

                                    <!-- Chat -->
                                    <div class="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col flex-1 overflow-hidden">
                                        <div class="p-3 border-b bg-gray-50">
                                            <h4 class="font-bold text-gray-700 text-sm">💬 Team Chat</h4>
                                        </div>
                                        <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
                                            <!-- Chat messages here -->
                                        </div>
                                        <div class="p-3 border-t bg-white">
                                            <div class="flex gap-2">
                                                <input type="text" id="chat-input" class="flex-1 p-2 border rounded-lg text-sm focus:border-indigo-500 outline-none" placeholder="Type a message...">
                                                <button class="p-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200" onclick="multiplayerSystem.sendMessage()">
                                                    ➤
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', multiplayerHTML);
    }

    setupEventListeners() {
        // Open Panel
        document.addEventListener('click', (e) => {
            if (e.target.closest('.open-multiplayer')) {
                this.showPanel();
            }
            if (e.target.closest('.close-panel')) {
                this.hidePanel();
            }
        });

        // Enter key for Chat
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && document.activeElement.id === 'chat-input') {
                this.sendMessage();
            }
        });

        // Real-time Prompt Sync with Debounce
        const promptArea = document.getElementById('shared-prompt');
        if (promptArea) {
            let timeout;
            promptArea.addEventListener('input', (e) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    this.updateSharedPrompt(e.target.value);
                }, 500);
            });
        }
    }

    generateRoomCode() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars
        let code = '';
        for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
        return code;
    }

    async createRoom() {
        const name = document.getElementById('room-name').value.trim() || 'New Room';
        const mode = document.getElementById('room-mode').value;
        const code = this.generateRoomCode();

        try {
            // Create Room Doc
            await this.db.collection('rooms').doc(code).set({
                name: name,
                mode: mode,
                hostId: this.playerId,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                promptContent: "" // Initial shared prompt
            });

            // Add Host as Player
            await this.joinRoomLogic(code);
            
            this.showNotification(`Room "${name}" created! Code: ${code}`, 'success');
        } catch (error) {
            console.error("Error creating room:", error);
            this.showNotification("Failed to create room. Try again.", "error");
        }
    }

    async joinRoom() {
        const code = document.getElementById('join-code').value.trim().toUpperCase();
        if (!code || code.length !== 6) {
            this.showNotification("Please enter a valid 6-character code.", "error");
            return;
        }

        const roomRef = this.db.collection('rooms').doc(code);
        const doc = await roomRef.get();

        if (!doc.exists) {
            this.showNotification("Room not found!", "error");
            return;
        }

        await this.joinRoomLogic(code);
    }

    async joinRoomLogic(roomId) {
        this.currentRoomId = roomId;
        
        // Add player to subcollection
        const playerRef = this.db.collection('rooms').doc(roomId).collection('players').doc(this.playerId);
        await playerRef.set({
            name: this.playerName,
            joinedAt: firebase.firestore.FieldValue.serverTimestamp(),
            isOnline: true
        });

        // Set up listeners
        this.setupRoomListeners(roomId);
        
        // Switch UI
        document.getElementById('room-selection').classList.add('hidden');
        document.getElementById('active-room').classList.remove('hidden');
        document.getElementById('room-code').textContent = roomId;
        
        // Add system message
        this.sendSystemMessage(`${this.playerName} joined the room.`);
    }

    setupRoomListeners(roomId) {
        const roomRef = this.db.collection('rooms').doc(roomId);

        // 1. Listen to Room Data (Name, Shared Prompt)
        this.unsubscribeRoom = roomRef.onSnapshot(doc => {
            if (doc.exists) {
                const data = doc.data();
                document.getElementById('current-room-name').textContent = data.name;
                
                // Update Shared Prompt ONLY if not currently editing focused
                const promptArea = document.getElementById('shared-prompt');
                if (document.activeElement !== promptArea && promptArea.value !== data.promptContent) {
                    promptArea.value = data.promptContent || "";
                }
            } else {
                // Room deleted
                this.leaveRoom(true);
            }
        });

        // 2. Listen to Players
        this.unsubscribePlayers = roomRef.collection('players').orderBy('joinedAt').onSnapshot(snapshot => {
            const list = document.getElementById('players-list');
            list.innerHTML = '';
            document.getElementById('player-count').textContent = snapshot.size;

            snapshot.forEach(doc => {
                const p = doc.data();
                const isMe = doc.id === this.playerId;
                const el = document.createElement('div');
                el.className = `flex items-center gap-3 p-2 rounded-lg ${isMe ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'}`;
                el.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                        ${p.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span class="font-medium text-sm ${isMe ? 'text-indigo-700' : 'text-gray-700'}">${p.name} ${isMe ? '(You)' : ''}</span>
                `;
                list.appendChild(el);
            });
        });

        // 3. Listen to Messages
        this.unsubscribeMessages = roomRef.collection('messages').orderBy('timestamp', 'asc').limit(50).onSnapshot(snapshot => {
            const chatBox = document.getElementById('chat-messages');
            chatBox.innerHTML = ''; // Clear and redraw (simple but effective for small chat)
            
            snapshot.forEach(doc => {
                const m = doc.data();
                const isMe = m.senderId === this.playerId;
                const isSystem = m.type === 'system';
                
                const msgEl = document.createElement('div');
                if (isSystem) {
                    msgEl.className = 'text-center text-xs text-gray-400 italic my-2';
                    msgEl.textContent = m.text;
                } else {
                    msgEl.className = `flex flex-col ${isMe ? 'items-end' : 'items-start'}`;
                    msgEl.innerHTML = `
                        <div class="max-w-[85%] rounded-2xl px-4 py-2 text-sm ${isMe ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-gray-200 text-gray-800 rounded-tl-none'}">
                            ${m.text}
                        </div>
                        <span class="text-[10px] text-gray-400 mt-1 px-1">${m.senderName}</span>
                    `;
                }
                chatBox.appendChild(msgEl);
            });
            
            // Auto scroll
            chatBox.scrollTop = chatBox.scrollHeight;
        });
    }

    async updateSharedPrompt(content) {
        if (!this.currentRoomId) return;
        try {
            await this.db.collection('rooms').doc(this.currentRoomId).update({
                promptContent: content
            });
        } catch (e) {
            console.error("Sync error:", e);
        }
    }

    async sendMessage() {
        const input = document.getElementById('chat-input');
        const text = input.value.trim();
        if (!text || !this.currentRoomId) return;

        input.value = ''; // Clear immediately for UX

        try {
            await this.db.collection('rooms').doc(this.currentRoomId).collection('messages').add({
                text: text,
                senderId: this.playerId,
                senderName: this.playerName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                type: 'user'
            });
        } catch (e) {
            console.error("Send error:", e);
            this.showNotification("Failed to send message", "error");
        }
    }

    async sendSystemMessage(text) {
        if (!this.currentRoomId) return;
        await this.db.collection('rooms').doc(this.currentRoomId).collection('messages').add({
            text: text,
            senderId: 'system',
            senderName: 'System',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            type: 'system'
        });
    }

    leaveRoom(forced = false) {
        if (this.currentRoomId && !forced) {
            // Remove player from DB
            this.db.collection('rooms').doc(this.currentRoomId).collection('players').doc(this.playerId).delete();
            this.sendSystemMessage(`${this.playerName} left the room.`);
        }

        // Unsubscribe
        if (this.unsubscribeRoom) this.unsubscribeRoom();
        if (this.unsubscribePlayers) this.unsubscribePlayers();
        if (this.unsubscribeMessages) this.unsubscribeMessages();

        this.currentRoomId = null;
        
        // Reset UI
        document.getElementById('active-room').classList.add('hidden');
        document.getElementById('room-selection').classList.remove('hidden');
        
        if (forced) {
            this.showNotification("Room was closed or connection lost.", "info");
        } else {
            this.showNotification("Left room successfully.", "success");
        }
    }

    copyPrompt() {
        const text = document.getElementById('shared-prompt').value;
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification("Prompt copied to clipboard!", "success");
        });
    }

    showPanel() {
        const panel = document.getElementById('multiplayer-panel');
        panel.classList.remove('hidden');
        // Simple entrance animation
        panel.children[0].style.transform = 'scale(0.95)';
        panel.children[0].style.opacity = '0';
        requestAnimationFrame(() => {
            panel.children[0].style.transition = 'all 0.3s ease-out';
            panel.children[0].style.transform = 'scale(1)';
            panel.children[0].style.opacity = '1';
        });
    }

    hidePanel() {
        const panel = document.getElementById('multiplayer-panel');
        panel.classList.add('hidden');
    }

    showNotification(message, type = 'info') {
        const color = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
        const notif = document.createElement('div');
        notif.className = `fixed top-4 left-1/2 transform -translate-x-1/2 ${color} text-white px-6 py-3 rounded-full shadow-lg z-[60] flex items-center gap-2 font-medium animate-bounce-in`;
        notif.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️'}</span> ${message}`;
        document.body.appendChild(notif);
        
        // Remove after 3s
        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transition = 'opacity 0.5s';
            setTimeout(() => notif.remove(), 500);
        }, 3000);
    }
}

// Global Style for Animation
const multiplayerStyle = document.createElement('style');
multiplayerStyle.innerHTML = `
@keyframes bounce-in {
    0% { transform: translate(-50%, -20px); opacity: 0; }
    50% { transform: translate(-50%, 5px); }
    100% { transform: translate(-50%, 0); opacity: 1; }
}
.animate-bounce-in { animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
`;
document.head.appendChild(multiplayerStyle);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.multiplayerSystem = new MultiplayerSystem();
});
