// Drag and Drop Prompt Builder System
class DragDropPromptBuilder {
    constructor() {
        this.promptBlocks = {
            actions: [
                { id: 'act1', text: 'Explain', color: '#4F46E5' },
                { id: 'act2', text: 'Describe', color: '#4F46E5' },
                { id: 'act3', text: 'Summarize', color: '#4F46E5' },
                { id: 'act4', text: 'Create', color: '#4F46E5' },
                { id: 'act5', text: 'Analyze', color: '#4F46E5' },
                { id: 'act6', text: 'Compare', color: '#4F46E5' },
                { id: 'act7', text: 'Generate', color: '#4F46E5' },
                { id: 'act8', text: 'Transform', color: '#4F46E5' }
            ],
            subjects: [
                { id: 'sub1', text: 'this concept', color: '#059669' },
                { id: 'sub2', text: 'the main idea', color: '#059669' },
                { id: 'sub3', text: 'the differences', color: '#059669' },
                { id: 'sub4', text: 'a story about', color: '#059669' },
                { id: 'sub5', text: 'the benefits of', color: '#059669' },
                { id: 'sub6', text: 'the process of', color: '#059669' }
            ],
            modifiers: [
                { id: 'mod1', text: 'in simple terms', color: '#F59E0B' },
                { id: 'mod2', text: 'step by step', color: '#F59E0B' },
                { id: 'mod3', text: 'with examples', color: '#F59E0B' },
                { id: 'mod4', text: 'in detail', color: '#F59E0B' },
                { id: 'mod5', text: 'like I\'m 5', color: '#F59E0B' },
                { id: 'mod6', text: 'professionally', color: '#F59E0B' }
            ],
            constraints: [
                { id: 'con1', text: 'in 100 words', color: '#EC4899' },
                { id: 'con2', text: 'using bullet points', color: '#EC4899' },
                { id: 'con3', text: 'without jargon', color: '#EC4899' },
                { id: 'con4', text: 'for beginners', color: '#EC4899' },
                { id: 'con5', text: 'with citations', color: '#EC4899' },
                { id: 'con6', text: 'in a formal tone', color: '#EC4899' }
            ],
            outputs: [
                { id: 'out1', text: 'as a list', color: '#8B5CF6' },
                { id: 'out2', text: 'as a paragraph', color: '#8B5CF6' },
                { id: 'out3', text: 'as a table', color: '#8B5CF6' },
                { id: 'out4', text: 'as code', color: '#8B5CF6' },
                { id: 'out5', text: 'as a dialogue', color: '#8B5CF6' }
            ]
        };
        
        this.droppedBlocks = [];
        this.currentDragging = null;
        this.init();
    }

    init() {
        // Don't auto-create the builder - only create when explicitly requested
        this.setupEventHandlers();
        console.log('Drag-drop builder initialized (hidden by default)');
    }
    
    // Method to show the builder when needed
    showBuilder() {
        if (!document.querySelector('.prompt-builder-palette')) {
            this.createBlockPalette();
            this.createDropZone();
            this.createSandboxMode();
        }
    }
    
    // Method to hide the builder
    hideBuilder() {
        const palette = document.querySelector('.prompt-builder-palette');
        const dropZone = document.querySelector('.prompt-drop-zone');
        const sandbox = document.querySelector('.sandbox-mode-container');
        
        if (palette) palette.remove();
        if (dropZone) dropZone.remove();
        if (sandbox) sandbox.remove();
    }

    createBlockPalette() {
        const paletteHTML = `
            <div class="prompt-builder-palette bg-white rounded-xl shadow-xl p-6 mb-8">
                <h3 class="text-2xl font-bold mb-4 gradient-text">Prompt Block Palette</h3>
                <p class="text-gray-600 mb-4">Drag blocks to build your prompt visually</p>
                <div class="block-categories">
                    ${Object.entries(this.promptBlocks).map(([category, blocks]) => `
                        <div class="block-category mb-6">
                            <h4 class="text-lg font-semibold mb-3 capitalize">${category}</h4>
                            <div class="blocks-container flex flex-wrap gap-3">
                                ${blocks.map(block => this.createBlock(block, category)).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const builderSection = document.getElementById('prompt-builder-section');
        if (builderSection) {
            builderSection.innerHTML = paletteHTML;
            builderSection.classList.remove('hidden');
        }
    }

    createBlock(block, category) {
        return `
            <div class="prompt-block draggable px-4 py-2 rounded-lg text-white font-medium cursor-grab select-none transition-all hover:scale-105"
                 data-block-id="${block.id}"
                 data-category="${category}"
                 data-text="${block.text}"
                 style="background-color: ${block.color};"
                 draggable="true">
                ${block.text}
            </div>
        `;
    }

    createDropZone() {
        const dropZoneHTML = `
            <div class="prompt-drop-zone bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 min-h-[150px] mb-6">
                <div class="drop-zone-content">
                    <p class="text-gray-500 text-center mb-4">Drag and drop blocks here to build your prompt</p>
                    <div class="dropped-blocks flex flex-wrap gap-2"></div>
                </div>
                <div class="prompt-preview mt-4 p-4 bg-white rounded-lg hidden">
                    <h4 class="font-semibold mb-2">Your Prompt:</h4>
                    <p class="prompt-text text-gray-800"></p>
                </div>
            </div>
            <div class="builder-controls flex gap-4 mb-6">
                <button class="clear-blocks btn btn-secondary">Clear All</button>
                <button class="copy-prompt btn btn-primary">Copy Prompt</button>
                <button class="test-prompt btn btn-success">Test with AI</button>
            </div>
        `;

        const builderSection = document.getElementById('prompt-builder-section');
        if (builderSection) {
            builderSection.insertAdjacentHTML('beforeend', dropZoneHTML);
        }
    }

    createSandboxMode() {
        const sandboxHTML = `
            <div class="sandbox-mode mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <h3 class="text-2xl font-bold mb-4">🎮 Sandbox Mode</h3>
                <p class="mb-4">Experiment freely with different prompt combinations!</p>
                <div class="sandbox-suggestions mb-4">
                    <h4 class="font-semibold mb-2">Try these combinations:</h4>
                    <div class="suggestions flex flex-wrap gap-2">
                        <button class="suggestion-btn px-3 py-1 bg-white rounded-full text-sm hover:bg-gray-100">
                            Explain + in simple terms
                        </button>
                        <button class="suggestion-btn px-3 py-1 bg-white rounded-full text-sm hover:bg-gray-100">
                            Create + step by step + with examples
                        </button>
                        <button class="suggestion-btn px-3 py-1 bg-white rounded-full text-sm hover:bg-gray-100">
                            Analyze + professionally + as a list
                        </button>
                    </div>
                </div>
            </div>
        `;

        const builderSection = document.getElementById('prompt-builder-section');
        if (builderSection) {
            builderSection.insertAdjacentHTML('beforeend', sandboxHTML);
        }
    }

    setupEventHandlers() {
        // Drag start
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('prompt-block')) {
                this.currentDragging = e.target;
                e.target.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('text/plain', e.target.dataset.text);
            }
        });

        // Drag end
        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('prompt-block')) {
                e.target.classList.remove('dragging');
            }
        });

        // Drag over
        document.addEventListener('dragover', (e) => {
            const dropZone = e.target.closest('.prompt-drop-zone');
            if (dropZone) {
                e.preventDefault();
                dropZone.classList.add('drag-over');
            }
        });

        // Drag leave
        document.addEventListener('dragleave', (e) => {
            const dropZone = e.target.closest('.prompt-drop-zone');
            if (dropZone && !dropZone.contains(e.relatedTarget)) {
                dropZone.classList.remove('drag-over');
            }
        });

        // Drop
        document.addEventListener('drop', (e) => {
            const dropZone = e.target.closest('.prompt-drop-zone');
            if (dropZone && this.currentDragging) {
                e.preventDefault();
                dropZone.classList.remove('drag-over');
                this.addBlockToPrompt(this.currentDragging);
                this.createSuccessAnimation(dropZone);
            }
        });

        // Clear blocks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('clear-blocks')) {
                this.clearAllBlocks();
            } else if (e.target.classList.contains('copy-prompt')) {
                this.copyPromptToClipboard();
            } else if (e.target.classList.contains('test-prompt')) {
                this.testPromptWithAI();
            } else if (e.target.classList.contains('suggestion-btn')) {
                this.applySuggestion(e.target.textContent.trim());
            }
        });

        // Remove individual blocks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-block')) {
                this.removeBlock(e.target.parentElement);
            }
        });

        // --- Touch Support for Mobile ---
        let touchDragItem = null;
        let touchClone = null;

        document.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('prompt-block')) {
                e.preventDefault(); // Prevent scrolling
                touchDragItem = e.target;
                
                // Create a clone for visual feedback
                touchClone = touchDragItem.cloneNode(true);
                touchClone.style.position = 'absolute';
                touchClone.style.opacity = '0.8';
                touchClone.style.zIndex = '1000';
                touchClone.style.pointerEvents = 'none';
                document.body.appendChild(touchClone);
                
                // Move clone to finger position
                const touch = e.touches[0];
                touchClone.style.left = `${touch.clientX - 50}px`;
                touchClone.style.top = `${touch.clientY - 25}px`;
            }
        }, { passive: false });

        document.addEventListener('touchmove', (e) => {
            if (touchDragItem && touchClone) {
                const touch = e.touches[0];
                touchClone.style.left = `${touch.clientX - 50}px`;
                touchClone.style.top = `${touch.clientY - 25}px`;
                
                // Highlight drop zone if hovering
                const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
                const dropZone = elementBelow?.closest('.prompt-drop-zone');
                
                document.querySelectorAll('.prompt-drop-zone').forEach(z => z.classList.remove('drag-over'));
                if (dropZone) {
                    dropZone.classList.add('drag-over');
                }
            }
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            if (touchDragItem) {
                const touch = e.changedTouches[0];
                const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
                const dropZone = elementBelow?.closest('.prompt-drop-zone');
                
                if (dropZone) {
                    dropZone.classList.remove('drag-over');
                    this.addBlockToPrompt(touchDragItem);
                    this.createSuccessAnimation(dropZone);
                }
                
                // Cleanup
                if (touchClone) touchClone.remove();
                touchDragItem = null;
                touchClone = null;
            }
        });
    }

    addBlockToPrompt(blockElement) {
        const blockData = {
            id: blockElement.dataset.blockId,
            text: blockElement.dataset.text,
            category: blockElement.dataset.category,
            color: blockElement.style.backgroundColor
        };

        this.droppedBlocks.push(blockData);
        this.updateDroppedBlocksDisplay();
        this.updatePromptPreview();
        this.playDropSound();
    }

    updateDroppedBlocksDisplay() {
        const container = document.querySelector('.dropped-blocks');
        container.innerHTML = this.droppedBlocks.map((block, index) => `
            <div class="dropped-block relative px-4 py-2 rounded-lg text-white font-medium animate-bounce-in"
                 style="background-color: ${block.color};">
                ${block.text}
                <button class="remove-block absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white text-xs hover:bg-red-600">
                    ×
                </button>
            </div>
        `).join('');
    }

    updatePromptPreview() {
        const preview = document.querySelector('.prompt-preview');
        const promptText = document.querySelector('.prompt-text');
        
        if (this.droppedBlocks.length > 0) {
            preview.classList.remove('hidden');
            promptText.textContent = this.droppedBlocks.map(b => b.text).join(' ');
        } else {
            preview.classList.add('hidden');
        }
    }

    clearAllBlocks() {
        this.droppedBlocks = [];
        this.updateDroppedBlocksDisplay();
        this.updatePromptPreview();
        this.showNotification('Blocks cleared!', 'info');
    }

    removeBlock(blockElement) {
        const index = Array.from(blockElement.parentElement.children).indexOf(blockElement);
        this.droppedBlocks.splice(index, 1);
        this.updateDroppedBlocksDisplay();
        this.updatePromptPreview();
    }

    copyPromptToClipboard() {
        const promptText = this.droppedBlocks.map(b => b.text).join(' ');
        if (promptText) {
            navigator.clipboard.writeText(promptText);
            this.showNotification('Prompt copied to clipboard!', 'success');
        }
    }

    testPromptWithAI() {
        const promptText = this.droppedBlocks.map(b => b.text).join(' ');
        if (promptText) {
            // Trigger AI test in main game
            window.promptQuestGame?.testPromptInSandbox(promptText);
        }
    }

    applySuggestion(suggestion) {
        // Parse suggestion and add blocks
        const parts = suggestion.split(' + ');
        this.clearAllBlocks();
        
        parts.forEach(part => {
            const block = Object.values(this.promptBlocks).flat()
                .find(b => b.text.toLowerCase() === part.toLowerCase());
            if (block) {
                this.droppedBlocks.push({
                    id: block.id,
                    text: block.text,
                    color: block.color
                });
            }
        });
        
        this.updateDroppedBlocksDisplay();
        this.updatePromptPreview();
    }

    createSuccessAnimation(element) {
        const rect = element.getBoundingClientRect();
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${rect.left + rect.width / 2}px`;
        particle.style.top = `${rect.top + rect.height / 2}px`;
        particle.innerHTML = '✨';
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 3000);
    }

    playDropSound() {
        // Add sound effect when audio system is implemented
        if (window.audioSystem) {
            window.audioSystem.playSound('drop');
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-medium z-50 animate-slide-in-right ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slide-out-right 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.dragDropBuilder = new DragDropPromptBuilder();
});