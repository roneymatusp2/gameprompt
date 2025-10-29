// Multiplayer and Social Features System
class MultiplayerSystem {
    constructor() {
        this.currentRoom = null;
        this.players = new Map();
        this.isHost = false;
        this.socket = null;
        this.init();
    }

    init() {
        this.createMultiplayerUI();
        this.setupEventListeners();
        this.initializeWebSocket();
    }

    createMultiplayerUI() {
        const multiplayerHTML = `
            <div class="multiplayer-panel hidden" id="multiplayer-panel">
                <div class="panel-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
                    <h2 class="text-3xl font-bold mb-2">🌐 Multiplayer Mode</h2>
                    <p class="text-blue-100">Collaborate and compete with other prompt engineers!</p>
                </div>
                
                <div class="panel-content p-6">
                    <!-- Room Selection -->
                    <div class="room-selection mb-8" id="room-selection">
                        <h3 class="text-xl font-bold mb-4">Join or Create Room</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="create-room-card bg-green-50 p-6 rounded-lg border-2 border-green-200">
                                <h4 class="font-bold mb-3">Create New Room</h4>
                                <input type="text" 
                                       id="room-name" 
                                       class="w-full p-2 border rounded mb-3" 
                                       placeholder="Room name...">
                                <select id="room-mode" class="w-full p-2 border rounded mb-3">
                                    <option value="collaborative">Collaborative</option>
                                    <option value="competitive">Competitive</option>
                                    <option value="teaching">Teaching Mode</option>
                                </select>
                                <button class="btn btn-primary w-full" onclick="multiplayerSystem.createRoom()">
                                    Create Room
                                </button>
                            </div>
                            
                            <div class="join-room-card bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                                <h4 class="font-bold mb-3">Join Existing Room</h4>
                                <input type="text" 
                                       id="join-code" 
                                       class="w-full p-2 border rounded mb-3" 
                                       placeholder="Room code...">
                                <button class="btn btn-primary w-full" onclick="multiplayerSystem.joinRoom()">
                                    Join Room
                                </button>
                                <div class="mt-4">
                                    <p class="text-sm text-gray-600 mb-2">Popular Rooms:</p>
                                    <div id="popular-rooms" class="space-y-2">
                                        <!-- Popular rooms will be listed here -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Active Room -->
                    <div class="active-room hidden" id="active-room">
                        <div class="room-header flex justify-between items-center mb-6">
                            <div>
                                <h3 class="text-xl font-bold">Room: <span id="current-room-name"></span></h3>
                                <p class="text-gray-600">Code: <code id="room-code" class="bg-gray-200 px-2 py-1 rounded"></code></p>
                            </div>
                            <button class="btn btn-secondary" onclick="multiplayerSystem.leaveRoom()">
                                Leave Room
                            </button>
                        </div>
                        
                        <!-- Players List -->
                        <div class="players-section mb-6">
                            <h4 class="font-bold mb-3">Players (<span id="player-count">1</span>)</h4>
                            <div id="players-list" class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <!-- Player cards will be added here -->
                            </div>
                        </div>
                        
                        <!-- Collaborative Workspace -->
                        <div class="collaborative-workspace bg-gray-50 rounded-lg p-6">
                            <h4 class="font-bold mb-3">Collaborative Prompt Building</h4>
                            <div class="shared-prompt-area mb-4">
                                <textarea id="shared-prompt" 
                                          class="w-full p-4 border-2 rounded-lg" 
                                          rows="4"
                                          placeholder="Build a prompt together..."></textarea>
                            </div>
                            <div class="prompt-suggestions mb-4">
                                <h5 class="font-semibold mb-2">Player Suggestions:</h5>
                                <div id="suggestions-list" class="space-y-2">
                                    <!-- Suggestions will appear here -->
                                </div>
                            </div>
                            <button class="btn btn-success" onclick="multiplayerSystem.submitCollaborativePrompt()">
                                Submit Collaborative Prompt
                            </button>
                        </div>
                        
                        <!-- Chat -->
                        <div class="chat-section mt-6 bg-white rounded-lg shadow p-4">
                            <h4 class="font-bold mb-3">Team Chat</h4>
                            <div id="chat-messages" class="h-48 overflow-y-auto mb-3 p-3 bg-gray-50 rounded">
                                <!-- Chat messages will appear here -->
                            </div>
                            <div class="chat-input flex gap-2">
                                <input type="text" 
                                       id="chat-input" 
                                       class="flex-1 p-2 border rounded" 
                                       placeholder="Type a message..."
                                       onkeypress="if(event.key==='Enter') multiplayerSystem.sendMessage()">
                                <button class="btn btn-primary" onclick="multiplayerSystem.sendMessage()">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="close-panel absolute top-4 right-4 text-white text-2xl hover:scale-110 transition-transform">
                    ×
                </button>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', multiplayerHTML);
        this.createPromptBattleUI();
        this.loadPopularRooms();
    }

    createPromptBattleUI() {
        const battleHTML = `
            <div class="prompt-battle-arena hidden" id="prompt-battle-arena">
                <div class="battle-header text-center mb-8">
                    <h2 class="text-4xl font-bold gradient-text mb-2">⚔️ Prompt Battle!</h2>
                    <p class="text-xl text-gray-600">Real-time head-to-head prompt competition</p>
                </div>
                
                <div class="battle-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Player 1 Side -->
                    <div class="player-side player-1 bg-blue-50 rounded-xl p-6">
                        <div class="player-info mb-4">
                            <h3 class="text-xl font-bold text-blue-800">
                                <span class="player-name">You</span>
                            </h3>
                            <div class="player-score text-3xl font-bold text-blue-600">0</div>
                        </div>
                        <div class="player-prompt-area">
                            <textarea class="w-full p-4 border-2 border-blue-300 rounded-lg" 
                                      rows="4"
                                      placeholder="Write your prompt..."></textarea>
                        </div>
                        <div class="player-status mt-4">
                            <div class="status-indicator bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full inline-block">
                                Writing...
                            </div>
                        </div>
                    </div>
                    
                    <!-- VS Divider -->
                    <div class="vs-divider absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-400">
                        VS
                    </div>
                    
                    <!-- Player 2 Side -->
                    <div class="player-side player-2 bg-red-50 rounded-xl p-6">
                        <div class="player-info mb-4">
                            <h3 class="text-xl font-bold text-red-800">
                                <span class="player-name">Opponent</span>
                            </h3>
                            <div class="player-score text-3xl font-bold text-red-600">0</div>
                        </div>
                        <div class="player-prompt-area">
                            <div class="opponent-prompt p-4 bg-white rounded-lg min-h-[100px]">
                                <p class="text-gray-500 italic">Opponent is typing...</p>
                            </div>
                        </div>
                        <div class="player-status mt-4">
                            <div class="status-indicator bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full inline-block">
                                Writing...
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="battle-timer text-center mt-8">
                    <div class="timer-display text-5xl font-bold text-gray-800">
                        <span id="battle-timer">30</span>s
                    </div>
                    <div class="challenge-info mt-4 p-4 bg-white rounded-lg shadow">
                        <h4 class="font-bold mb-2">Current Challenge:</h4>
                        <p id="battle-challenge" class="text-lg"></p>
                    </div>
                </div>
                
                <button class="exit-battle btn btn-secondary mt-6" onclick="multiplayerSystem.exitBattle()">
                    Exit Battle
                </button>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', battleHTML);
    }

    setupEventListeners() {
        // Panel controls
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('open-multiplayer')) {
                this.showPanel();
            }
            
            if (e.target.closest('.close-panel')) {
                this.hidePanel();
            }
        });

        // Real-time collaboration
        document.getElementById('shared-prompt')?.addEventListener('input', (e) => {
            this.broadcastPromptUpdate(e.target.value);
        });
    }

    initializeWebSocket() {
        // In a real implementation, this would connect to a WebSocket server
        // For demo purposes, we'll simulate multiplayer functionality
        this.simulateMultiplayer();
    }

    simulateMultiplayer() {
        // Simulate other players joining
        this.simulatedPlayers = [
            { id: 'bot1', name: 'PromptMaster', avatar: '🤖', skill: 'Expert' },
            { id: 'bot2', name: 'AINewbie', avatar: '🌱', skill: 'Beginner' },
            { id: 'bot3', name: 'CreativeWriter', avatar: '✍️', skill: 'Intermediate' }
        ];
    }

    createRoom() {
        const roomName = document.getElementById('room-name').value || 'New Room';
        const roomMode = document.getElementById('room-mode').value;
        
        this.currentRoom = {
            id: this.generateRoomCode(),
            name: roomName,
            mode: roomMode,
            host: 'You',
            players: [{ id: 'player1', name: 'You', avatar: '🎮', isHost: true }]
        };
        
        this.isHost = true;
        this.showActiveRoom();
        this.showNotification(`Room "${roomName}" created!`, 'success');
        
        // Simulate a player joining after 3 seconds
        setTimeout(() => this.simulatePlayerJoin(), 3000);
    }

    joinRoom() {
        const roomCode = document.getElementById('join-code').value;
        
        if (!roomCode) {
            this.showNotification('Please enter a room code', 'error');
            return;
        }
        
        this.currentRoom = {
            id: roomCode,
            name: 'Collaborative Learning',
            mode: 'collaborative',
            host: 'PromptMaster',
            players: [
                { id: 'host', name: 'PromptMaster', avatar: '🤖', isHost: true },
                { id: 'player1', name: 'You', avatar: '🎮', isHost: false }
            ]
        };
        
        this.showActiveRoom();
        this.showNotification('Successfully joined room!', 'success');
        
        // Simulate welcome message
        this.addChatMessage('PromptMaster', 'Welcome to the room! Let\'s create amazing prompts together!');
    }

    showActiveRoom() {
        document.getElementById('room-selection').classList.add('hidden');
        document.getElementById('active-room').classList.remove('hidden');
        
        document.getElementById('current-room-name').textContent = this.currentRoom.name;
        document.getElementById('room-code').textContent = this.currentRoom.id;
        
        this.updatePlayersList();
    }

    updatePlayersList() {
        const playersList = document.getElementById('players-list');
        playersList.innerHTML = this.currentRoom.players.map(player => `
            <div class="player-card bg-white rounded-lg p-3 text-center shadow">
                <div class="player-avatar text-3xl mb-1">${player.avatar}</div>
                <div class="player-name font-semibold">${player.name}</div>
                ${player.isHost ? '<span class="text-xs bg-yellow-200 px-2 py-1 rounded">Host</span>' : ''}
            </div>
        `).join('');
        
        document.getElementById('player-count').textContent = this.currentRoom.players.length;
    }

    simulatePlayerJoin() {
        if (!this.currentRoom || this.currentRoom.players.length >= 4) return;
        
        const newPlayer = this.simulatedPlayers[Math.floor(Math.random() * this.simulatedPlayers.length)];
        
        // Check if player already in room
        if (this.currentRoom.players.find(p => p.id === newPlayer.id)) return;
        
        this.currentRoom.players.push(newPlayer);
        this.updatePlayersList();
        
        this.addChatMessage(newPlayer.name, 'Hello everyone! Excited to learn together!');
        this.showNotification(`${newPlayer.name} joined the room!`, 'info');
        
        // Simulate more joins
        if (Math.random() > 0.5) {
            setTimeout(() => this.simulatePlayerJoin(), 5000 + Math.random() * 5000);
        }
    }

    leaveRoom() {
        this.currentRoom = null;
        document.getElementById('active-room').classList.add('hidden');
        document.getElementById('room-selection').classList.remove('hidden');
        this.showNotification('You left the room', 'info');
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addChatMessage('You', message);
        input.value = '';
        
        // Simulate response
        if (Math.random() > 0.5 && this.currentRoom.players.length > 1) {
            setTimeout(() => {
                const responder = this.currentRoom.players.filter(p => p.name !== 'You')[0];
                const responses = [
                    'Great idea!',
                    'I like that approach',
                    'What if we also add...',
                    'That\'s clever!',
                    'Let me try something similar'
                ];
                this.addChatMessage(responder.name, responses[Math.floor(Math.random() * responses.length)]);
            }, 1000 + Math.random() * 2000);
        }
    }

    addChatMessage(sender, message) {
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message mb-2';
        messageDiv.innerHTML = `
            <span class="font-semibold ${sender === 'You' ? 'text-blue-600' : 'text-gray-700'}">${sender}:</span>
            <span class="ml-2">${message}</span>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    broadcastPromptUpdate(prompt) {
        // In real implementation, this would send to WebSocket
        // Simulate collaborative editing feedback
        const suggestionsList = document.getElementById('suggestions-list');
        
        if (prompt.length > 20 && Math.random() > 0.7) {
            const player = this.currentRoom.players.filter(p => p.name !== 'You')[0];
            if (player) {
                const suggestion = document.createElement('div');
                suggestion.className = 'suggestion bg-yellow-50 p-3 rounded-lg';
                suggestion.innerHTML = `
                    <span class="font-semibold">${player.name} suggests:</span>
                    <p class="text-sm mt-1">Maybe add "step by step" for clarity?</p>
                `;
                suggestionsList.appendChild(suggestion);
                
                setTimeout(() => suggestion.remove(), 10000);
            }
        }
    }

    submitCollaborativePrompt() {
        const prompt = document.getElementById('shared-prompt').value;
        if (!prompt) return;
        
        this.showNotification('Collaborative prompt submitted! Great teamwork!', 'success');
        
        // Award points to all players
        this.currentRoom.players.forEach(player => {
            if (player.name === 'You') {
                window.dispatchEvent(new CustomEvent('challengeCompleted', { 
                    detail: { success: true, collaborative: true } 
                }));
            }
        });
        
        // Clear the prompt
        document.getElementById('shared-prompt').value = '';
    }

    startPromptBattle(opponent) {
        document.getElementById('multiplayer-panel').classList.add('hidden');
        document.getElementById('prompt-battle-arena').classList.remove('hidden');
        
        // Set up battle
        const challenges = [
            "Write a prompt to explain blockchain to a 5-year-old",
            "Create a prompt for a creative story about time travel",
            "Ask AI to write a haiku about programming",
            "Request a recipe using only 5 ingredients",
            "Get AI to explain why the sky is blue"
        ];
        
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        document.getElementById('battle-challenge').textContent = challenge;
        
        // Start timer
        let timeLeft = 30;
        const timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('battle-timer').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                this.endBattle();
            }
        }, 1000);
        
        // Simulate opponent typing
        this.simulateOpponentTyping();
    }

    simulateOpponentTyping() {
        const opponentPrompt = document.querySelector('.player-2 .opponent-prompt');
        const phrases = [
            "Let me explain this...",
            "Think of it like...",
            "Imagine if you...",
            "The best way to understand...",
            "Simply put..."
        ];
        
        let text = '';
        let phraseIndex = 0;
        
        const typeInterval = setInterval(() => {
            if (phraseIndex < phrases.length) {
                text += phrases[phraseIndex] + ' ';
                opponentPrompt.innerHTML = `<p>${text}</p>`;
                phraseIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 3000);
    }

    endBattle() {
        // Calculate scores
        const yourPrompt = document.querySelector('.player-1 textarea').value;
        const yourScore = this.calculatePromptScore(yourPrompt);
        const opponentScore = 75 + Math.floor(Math.random() * 25);
        
        document.querySelector('.player-1 .player-score').textContent = yourScore;
        document.querySelector('.player-2 .player-score').textContent = opponentScore;
        
        // Show winner
        const winner = yourScore > opponentScore ? 'You' : 'Opponent';
        this.showNotification(`Battle ended! ${winner} won!`, 
            winner === 'You' ? 'success' : 'info');
        
        // Award achievement
        if (winner === 'You' && !window.achievementSystem?.isUnlocked('firstBattle')) {
            window.achievementSystem?.unlockAchievement('firstBattle');
        }
    }

    calculatePromptScore(prompt) {
        let score = 50;
        
        // Length bonus
        if (prompt.length > 30) score += 10;
        if (prompt.length > 50) score += 10;
        
        // Quality indicators
        if (prompt.includes('please') || prompt.includes('could')) score += 5;
        if (prompt.includes('specific')) score += 10;
        if (prompt.includes('example')) score += 10;
        
        // Clarity
        if (prompt.split(' ').length > 5) score += 5;
        
        return Math.min(100, score);
    }

    exitBattle() {
        document.getElementById('prompt-battle-arena').classList.add('hidden');
        document.getElementById('multiplayer-panel').classList.remove('hidden');
    }

    loadPopularRooms() {
        const popularRooms = [
            { name: 'Beginner\'s Haven', code: 'BEG123', players: 3, mode: 'collaborative' },
            { name: 'Expert Challenge', code: 'EXP456', players: 2, mode: 'competitive' },
            { name: 'Learn Together', code: 'LRN789', players: 4, mode: 'teaching' }
        ];
        
        const container = document.getElementById('popular-rooms');
        container.innerHTML = popularRooms.map(room => `
            <button class="w-full text-left p-2 bg-white rounded hover:bg-gray-100" 
                    onclick="document.getElementById('join-code').value='${room.code}'">
                <div class="font-semibold">${room.name}</div>
                <div class="text-xs text-gray-600">${room.players}/4 players • ${room.mode}</div>
            </button>
        `).join('');
    }

    generateRoomCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    showPanel() {
        const panel = document.getElementById('multiplayer-panel');
        panel.classList.remove('hidden');
        anime({
            targets: panel,
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }

    hidePanel() {
        const panel = document.getElementById('multiplayer-panel');
        anime({
            targets: panel,
            scale: [1, 0.9],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => panel.classList.add('hidden')
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed bottom-4 left-4 px-6 py-3 rounded-lg text-white font-medium z-50 ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        anime({
            targets: notification,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
        
        setTimeout(() => {
            anime({
                targets: notification,
                translateY: [0, 50],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInQuart',
                complete: () => notification.remove()
            });
        }, 3000);
    }
}

// Add multiplayer button to navigation
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav .flex.items-center.space-x-6');
    if (nav) {
        const multiplayerBtn = document.createElement('button');
        multiplayerBtn.className = 'open-multiplayer flex items-center gap-2 px-4 py-2 rounded-lg transition-colors';
        multiplayerBtn.style.cssText = 'background: rgba(99, 102, 241, 0.25); color: #E0E7FF; border: 1px solid rgba(99, 102, 241, 0.4); font-weight: 600;';
        multiplayerBtn.innerHTML = '<span>🌐</span><span style="color: #E0E7FF;">Multiplayer</span>';
        
        // Hover effect
        multiplayerBtn.addEventListener('mouseenter', () => {
            multiplayerBtn.style.background = 'rgba(99, 102, 241, 0.4)';
            multiplayerBtn.style.borderColor = 'rgba(99, 102, 241, 0.6)';
            multiplayerBtn.style.transform = 'translateY(-2px)';
            multiplayerBtn.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
        });
        
        multiplayerBtn.addEventListener('mouseleave', () => {
            multiplayerBtn.style.background = 'rgba(99, 102, 241, 0.25)';
            multiplayerBtn.style.borderColor = 'rgba(99, 102, 241, 0.4)';
            multiplayerBtn.style.transform = 'translateY(0)';
            multiplayerBtn.style.boxShadow = 'none';
        });
        
        nav.insertBefore(multiplayerBtn, nav.children[2]);
    }
    
    window.multiplayerSystem = new MultiplayerSystem();
});