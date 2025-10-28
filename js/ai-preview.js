// Live AI Preview System
class AIPreviewSystem {
    constructor() {
        this.isTyping = false;
        this.typingTimer = null;
        this.mockResponses = this.generateMockResponses();
        this.init();
    }

    init() {
        this.createPreviewPanel();
        this.setupEventListeners();
        this.initializeAIConnection();
    }

    createPreviewPanel() {
        const panelHTML = `
            <div class="ai-preview-panel bg-gray-50 rounded-xl p-6 mt-6 border-2 border-gray-200">
                <div class="preview-header flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold flex items-center gap-2">
                        <span class="ai-status-indicator w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        AI Live Preview
                    </h3>
                    <div class="ai-model-selector">
                        <select class="px-3 py-1 rounded-lg border border-gray-300 text-sm">
                            <option value="gpt-4">GPT-4</option>
                            <option value="gpt-3.5">GPT-3.5</option>
                            <option value="claude">Claude</option>
                            <option value="mock" selected>Mock AI (Demo)</option>
                        </select>
                    </div>
                </div>
                
                <div class="preview-content">
                    <div class="ai-thinking hidden mb-4">
                        <div class="thinking-animation flex items-center gap-2">
                            <div class="dot w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                            <div class="dot w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                            <div class="dot w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                        </div>
                    </div>
                    
                    <div class="ai-response bg-white rounded-lg p-4 min-h-[100px] max-h-[300px] overflow-y-auto">
                        <p class="text-gray-500 italic">Start typing to see AI response...</p>
                    </div>
                    
                    <div class="response-metrics mt-4 grid grid-cols-3 gap-4 text-center">
                        <div class="metric bg-white rounded-lg p-3">
                            <div class="metric-value text-2xl font-bold text-blue-500">0</div>
                            <div class="metric-label text-xs text-gray-600">Response Time</div>
                        </div>
                        <div class="metric bg-white rounded-lg p-3">
                            <div class="metric-value text-2xl font-bold text-green-500">0</div>
                            <div class="metric-label text-xs text-gray-600">Quality Score</div>
                        </div>
                        <div class="metric bg-white rounded-lg p-3">
                            <div class="metric-value text-2xl font-bold text-purple-500">0</div>
                            <div class="metric-label text-xs text-gray-600">Token Count</div>
                        </div>
                    </div>
                </div>
                
                <div class="preview-suggestions mt-4">
                    <h4 class="font-semibold mb-2">💡 Suggestions to improve your prompt:</h4>
                    <ul class="suggestions-list text-sm space-y-1">
                        <li class="suggestion-item hidden"></li>
                    </ul>
                </div>
            </div>
        `;

        const container = document.querySelector('.prompt-input-section');
        if (container) {
            container.insertAdjacentHTML('afterend', panelHTML);
        }
    }

    setupEventListeners() {
        // Listen to prompt input changes
        const promptTextarea = document.getElementById('user-prompt');
        if (promptTextarea) {
            promptTextarea.addEventListener('input', (e) => {
                this.handlePromptChange(e.target.value);
            });
        }

        // Listen to drag-drop builder changes
        window.addEventListener('promptBuilderChanged', (e) => {
            this.handlePromptChange(e.detail.prompt);
        });

        // Model selector
        document.querySelector('.ai-model-selector select')?.addEventListener('change', (e) => {
            this.changeAIModel(e.target.value);
        });
    }

    handlePromptChange(prompt) {
        // Clear previous timer
        clearTimeout(this.typingTimer);
        
        if (!prompt || prompt.length < 3) {
            this.clearPreview();
            return;
        }

        // Show thinking animation
        this.showThinking();

        // Simulate typing delay
        this.typingTimer = setTimeout(() => {
            this.generatePreview(prompt);
        }, 500);
    }

    showThinking() {
        document.querySelector('.ai-thinking')?.classList.remove('hidden');
        document.querySelector('.ai-response').innerHTML = '';
    }

    hideThinking() {
        document.querySelector('.ai-thinking')?.classList.add('hidden');
    }

    generatePreview(prompt) {
        const startTime = Date.now();
        
        // Simulate AI processing
        setTimeout(() => {
            const response = this.generateMockResponse(prompt);
            const responseTime = Date.now() - startTime;
            
            this.displayResponse(response, responseTime);
            this.updateMetrics(prompt, response, responseTime);
            this.generateSuggestions(prompt);
            
            this.hideThinking();
        }, 800 + Math.random() * 700);
    }

    generateMockResponse(prompt) {
        const promptLower = prompt.toLowerCase();
        
        // Check for specific patterns and return appropriate responses
        if (promptLower.includes('explain') && promptLower.includes('simple')) {
            return "I'll explain this in simple terms: Think of it like a recipe. Just as you follow steps to bake a cake, this concept works by following a specific sequence of actions. Each step builds on the previous one, making it easy to understand even for beginners.";
        }
        
        if (promptLower.includes('create') && promptLower.includes('story')) {
            return "Once upon a time in a digital realm, there lived a curious AI named Pixel. Pixel loved helping humans solve problems and learn new things. One day, a young student approached with a question that would change everything...";
        }
        
        if (promptLower.includes('list') || promptLower.includes('steps')) {
            return "Here are the key points:\n\n1. Start with a clear objective\n2. Break down complex tasks into smaller steps\n3. Use specific and descriptive language\n4. Include examples when helpful\n5. Review and refine your approach";
        }
        
        if (promptLower.includes('code') || promptLower.includes('program')) {
            return "```python\n# Here's a simple example\ndef process_data(input_data):\n    # Process the input\n    result = transform(input_data)\n    return result\n\n# Usage example\ndata = get_user_input()\noutput = process_data(data)\nprint(f'Result: {output}')\n```";
        }
        
        // Default responses based on prompt length and complexity
        const complexity = this.analyzeComplexity(prompt);
        
        if (complexity.score > 8) {
            return "This is a comprehensive request. I'll address each aspect systematically:\n\nFirst, regarding the main topic - this involves understanding the fundamental principles at play. The key considerations include context, specificity, and desired outcomes.\n\nSecond, the implementation approach should be methodical and well-structured, ensuring each component is properly addressed while maintaining clarity throughout.";
        }
        
        if (complexity.score > 5) {
            return "Based on your prompt, here's what I understand: You're looking for a detailed explanation that covers multiple aspects. Let me break this down into manageable parts that directly address your requirements while maintaining clarity and practical applicability.";
        }
        
        // Simple default response
        return "I understand your request. Here's a focused response that addresses your specific needs while keeping things clear and actionable. The approach I'm taking considers both the immediate requirements and potential follow-up questions you might have.";
    }

    analyzeComplexity(prompt) {
        const factors = {
            length: prompt.length,
            words: prompt.split(' ').length,
            punctuation: (prompt.match(/[.!?,;:]/g) || []).length,
            keywords: (prompt.match(/\b(explain|describe|analyze|create|compare|evaluate)\b/gi) || []).length,
            specificity: (prompt.match(/\b(specifically|exactly|precisely|detailed)\b/gi) || []).length
        };
        
        const score = Math.min(10, 
            (factors.length / 50) + 
            (factors.words / 10) + 
            (factors.punctuation) + 
            (factors.keywords * 2) + 
            (factors.specificity * 1.5)
        );
        
        return { score, factors };
    }

    displayResponse(response, responseTime) {
        const responseDiv = document.querySelector('.ai-response');
        responseDiv.innerHTML = '';
        
        // Typewriter effect
        const words = response.split(' ');
        let currentIndex = 0;
        
        const typeWriter = () => {
            if (currentIndex < words.length) {
                responseDiv.innerHTML += words[currentIndex] + ' ';
                currentIndex++;
                
                // Scroll to bottom
                responseDiv.scrollTop = responseDiv.scrollHeight;
                
                setTimeout(typeWriter, 30 + Math.random() * 20);
            }
        };
        
        typeWriter();
    }

    updateMetrics(prompt, response, responseTime) {
        const metrics = {
            time: (responseTime / 1000).toFixed(1) + 's',
            quality: this.calculateQualityScore(prompt, response),
            tokens: this.estimateTokens(prompt + response)
        };
        
        // Animate metric updates
        const elements = {
            time: document.querySelector('.metric:nth-child(1) .metric-value'),
            quality: document.querySelector('.metric:nth-child(2) .metric-value'),
            tokens: document.querySelector('.metric:nth-child(3) .metric-value')
        };
        
        if (elements.time) elements.time.textContent = metrics.time;
        if (elements.quality) {
            elements.quality.textContent = metrics.quality + '%';
            elements.quality.style.color = this.getQualityColor(metrics.quality);
        }
        if (elements.tokens) elements.tokens.textContent = metrics.tokens;
        
        // Add animation
        Object.values(elements).forEach(el => {
            if (el) {
                el.style.transform = 'scale(1.2)';
                setTimeout(() => el.style.transform = 'scale(1)', 200);
            }
        });
    }

    calculateQualityScore(prompt, response) {
        let score = 50; // Base score
        
        // Prompt quality factors
        if (prompt.length > 20) score += 10;
        if (prompt.includes('please') || prompt.includes('could')) score += 5;
        if (/\b(specific|detailed|clear)\b/i.test(prompt)) score += 10;
        if (prompt.split(' ').length > 5) score += 10;
        
        // Response relevance (mock)
        const promptWords = prompt.toLowerCase().split(' ');
        const responseWords = response.toLowerCase().split(' ');
        const commonWords = promptWords.filter(word => 
            responseWords.includes(word) && word.length > 3
        );
        score += Math.min(15, commonWords.length * 3);
        
        return Math.min(100, score);
    }

    getQualityColor(score) {
        if (score >= 80) return '#10B981';  // Green
        if (score >= 60) return '#F59E0B';  // Orange
        return '#EF4444';  // Red
    }

    estimateTokens(text) {
        // Rough estimation: 1 token ≈ 4 characters
        return Math.ceil(text.length / 4);
    }

    generateSuggestions(prompt) {
        const suggestions = [];
        const promptLower = prompt.toLowerCase();
        
        // Check for common improvements
        if (!promptLower.includes('please') && !promptLower.includes('could')) {
            suggestions.push('Consider adding polite language like "please" or "could you"');
        }
        
        if (prompt.length < 20) {
            suggestions.push('Add more context to get better results');
        }
        
        if (!promptLower.match(/\?$/) && promptLower.includes('what') || promptLower.includes('how')) {
            suggestions.push('End questions with a question mark for clarity');
        }
        
        if (!promptLower.includes('example')) {
            suggestions.push('Consider asking for examples to make responses more concrete');
        }
        
        if (prompt.split(' ').length > 50) {
            suggestions.push('Try breaking down complex prompts into smaller, focused questions');
        }
        
        // Display suggestions
        const suggestionsList = document.querySelector('.suggestions-list');
        if (suggestionsList) {
            suggestionsList.innerHTML = suggestions.length > 0 
                ? suggestions.map(s => `<li class="text-gray-600">• ${s}</li>`).join('')
                : '<li class="text-green-600">✓ Your prompt looks great!</li>';
        }
    }

    clearPreview() {
        const responseDiv = document.querySelector('.ai-response');
        if (responseDiv) {
            responseDiv.innerHTML = '<p class="text-gray-500 italic">Start typing to see AI response...</p>';
        }
        
        // Reset metrics
        document.querySelector('.metric:nth-child(1) .metric-value').textContent = '0';
        document.querySelector('.metric:nth-child(2) .metric-value').textContent = '0';
        document.querySelector('.metric:nth-child(3) .metric-value').textContent = '0';
        
        // Clear suggestions
        document.querySelector('.suggestions-list').innerHTML = '';
    }

    changeAIModel(model) {
        // Show notification
        this.showNotification(`Switched to ${model.toUpperCase()} model`);
        
        // Update status indicator
        const indicator = document.querySelector('.ai-status-indicator');
        if (model === 'mock') {
            indicator.classList.add('bg-green-500');
            indicator.classList.remove('bg-yellow-500');
        } else {
            indicator.classList.add('bg-yellow-500');
            indicator.classList.remove('bg-green-500');
        }
    }

    initializeAIConnection() {
        // In a real implementation, this would connect to actual AI services
        // For now, we'll use mock responses
        console.log('AI Preview System initialized with mock responses');
    }

    generateMockResponses() {
        return {
            greetings: [
                "Hello! I'm here to help you craft better prompts.",
                "Greetings! Let's work together to improve your prompt engineering skills.",
                "Hi there! I'm ready to assist with your prompt creation."
            ],
            explanations: [
                "Let me break this down for you in simple terms...",
                "Here's a clear explanation of what you're asking about...",
                "I'll explain this step by step to make it easy to understand..."
            ],
            examples: [
                "Here's a practical example to illustrate this concept...",
                "Let me show you with a real-world scenario...",
                "Consider this example to better understand the idea..."
            ]
        };
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Initialize when ready
document.addEventListener('DOMContentLoaded', () => {
    window.aiPreviewSystem = new AIPreviewSystem();
});