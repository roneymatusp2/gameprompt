// Instant Feedback System - Shows immediate visual feedback
class InstantFeedback {
    constructor() {
        this.createFeedbackContainer();
    }

    createFeedbackContainer() {
        const container = document.createElement('div');
        container.id = 'instant-feedback-container';
        container.className = 'fixed top-20 right-4 z-50 space-y-2';
        document.body.appendChild(container);
    }

    show(message, type = 'info', duration = 3000) {
        const feedback = document.createElement('div');
        feedback.className = `instant-feedback transform transition-all duration-300 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 ${this.getTypeClass(type)}`;
        
        const icon = this.getIcon(type);
        feedback.innerHTML = `
            <span class="text-2xl">${icon}</span>
            <span class="font-semibold">${message}</span>
        `;

        const container = document.getElementById('instant-feedback-container');
        container.appendChild(feedback);

        // Animate in
        setTimeout(() => feedback.classList.add('translate-x-0', 'opacity-100'), 10);
        feedback.classList.add('translate-x-full', 'opacity-0');

        // Remove after duration
        setTimeout(() => {
            feedback.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => feedback.remove(), 300);
        }, duration);
    }

    getTypeClass(type) {
        const classes = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-white',
            info: 'bg-blue-500 text-white',
            evaluating: 'bg-indigo-500 text-white'
        };
        return classes[type] || classes.info;
    }

    getIcon(type) {
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️',
            evaluating: '⏳'
        };
        return icons[type] || icons.info;
    }

    showEvaluating() {
        this.show('Evaluating your prompt...', 'evaluating', 10000);
    }

    showSuccess(score) {
        const message = score >= 80 ? `Excellent! ${score} points` :
                       score >= 60 ? `Good job! ${score} points` :
                       `Keep trying! ${score} points`;
        this.show(message, 'success');
    }

    showError(message) {
        this.show(message, 'error');
    }

    showCriteriaCheck(criteria, met) {
        const icon = met ? '✓' : '✗';
        const type = met ? 'success' : 'warning';
        this.show(`${icon} ${criteria}`, type, 2000);
    }
}

// Initialize
window.instantFeedback = new InstantFeedback();
