// Audio System for Prompt Quest
class AudioSystem {
    constructor() {
        this.sounds = {};
        this.musicVolume = 0.3;
        this.sfxVolume = 0.5;
        this.isMuted = false;
        this.currentMusic = null;
        this.init();
    }

    init() {
        this.createAudioContext();
        this.loadSounds();
        this.createAudioControls();
        this.setupEventListeners();
    }

    createAudioContext() {
        // Create Web Audio API context
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create gain nodes for volume control
        this.musicGainNode = this.audioContext.createGain();
        this.sfxGainNode = this.audioContext.createGain();
        
        this.musicGainNode.connect(this.audioContext.destination);
        this.sfxGainNode.connect(this.audioContext.destination);
        
        this.musicGainNode.gain.value = this.musicVolume;
        this.sfxGainNode.gain.value = this.sfxVolume;
    }

    loadSounds() {
        // Define sound effects using Web Audio API oscillators and noise
        this.soundDefinitions = {
            // UI Sounds
            click: { type: 'sine', frequency: 800, duration: 0.05, volume: 0.3 },
            hover: { type: 'sine', frequency: 600, duration: 0.03, volume: 0.2 },
            success: { type: 'sine', frequencies: [523, 659, 784], duration: 0.15, volume: 0.4 },
            error: { type: 'sawtooth', frequency: 200, duration: 0.2, volume: 0.3 },
            
            // Game Sounds
            drop: { type: 'sine', frequency: 400, duration: 0.1, volume: 0.3, pitch: 'down' },
            achievement: { type: 'sine', frequencies: [523, 659, 784, 1047], duration: 0.5, volume: 0.5 },
            levelUp: { type: 'sine', frequencies: [440, 554, 659, 880], duration: 0.6, volume: 0.4 },
            collect: { type: 'triangle', frequency: 1000, duration: 0.1, volume: 0.3, pitch: 'up' },
            
            // Typing Sounds
            keypress1: { type: 'noise', duration: 0.02, volume: 0.1, filter: 4000 },
            keypress2: { type: 'noise', duration: 0.02, volume: 0.1, filter: 3500 },
            keypress3: { type: 'noise', duration: 0.02, volume: 0.1, filter: 4500 },
            
            // Notification Sounds
            notification: { type: 'sine', frequencies: [880, 1175], duration: 0.2, volume: 0.3 },
            message: { type: 'sine', frequency: 660, duration: 0.1, volume: 0.3 },
            
            // Background Music (using generated tones)
            ambientLoop: { 
                type: 'ambient', 
                frequencies: [110, 165, 220], 
                duration: 4, 
                volume: 0.2,
                loop: true 
            }
        };
        
        // Pre-generate some sounds
        this.generateBasicSounds();
    }

    generateBasicSounds() {
        // Generate click sound
        this.sounds.click = () => this.playTone(800, 0.05, 'sine', 0.3);
        this.sounds.hover = () => this.playTone(600, 0.03, 'sine', 0.2);
        this.sounds.error = () => this.playTone(200, 0.2, 'sawtooth', 0.3);
        this.sounds.drop = () => this.playTone(400, 0.1, 'sine', 0.3, 'down');
        this.sounds.message = () => this.playTone(660, 0.1, 'sine', 0.3);
        
        // Generate multi-tone sounds
        this.sounds.success = () => this.playSequence([523, 659, 784], 0.15, 'sine', 0.4);
        this.sounds.achievement = () => this.playSequence([523, 659, 784, 1047], 0.5, 'sine', 0.5);
        this.sounds.levelUp = () => this.playSequence([440, 554, 659, 880], 0.6, 'sine', 0.4);
        this.sounds.notification = () => this.playSequence([880, 1175], 0.2, 'sine', 0.3);
        
        // Generate noise sounds
        this.sounds.keypress = () => this.playNoise(0.02, 0.1, 3500 + Math.random() * 1000);
    }

    playTone(frequency, duration, type = 'sine', volume = 0.5, pitch = null) {
        if (this.isMuted) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.sfxGainNode);
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        // Apply pitch bend if specified
        if (pitch === 'up') {
            oscillator.frequency.exponentialRampToValueAtTime(
                frequency * 1.5, 
                this.audioContext.currentTime + duration
            );
        } else if (pitch === 'down') {
            oscillator.frequency.exponentialRampToValueAtTime(
                frequency * 0.5, 
                this.audioContext.currentTime + duration
            );
        }
        
        // Envelope
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playSequence(frequencies, totalDuration, type = 'sine', volume = 0.5) {
        if (this.isMuted) return;
        
        const noteDuration = totalDuration / frequencies.length;
        
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                this.playTone(freq, noteDuration * 0.9, type, volume);
            }, index * noteDuration * 1000);
        });
    }

    playNoise(duration, volume, filterFreq = 1000) {
        if (this.isMuted) return;
        
        const bufferSize = this.audioContext.sampleRate * duration;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const source = this.audioContext.createBufferSource();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        source.buffer = buffer;
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.sfxGainNode);
        
        // Configure filter
        filter.type = 'lowpass';
        filter.frequency.value = filterFreq;
        
        // Envelope
        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        source.start();
    }

    createAudioControls() {
        // Audio controls removed from UI
        // Audio system still works in background if needed
    }

    setupEventListeners() {
        // Mute all sounds by default
        this.isMuted = true;
        
        // Sound triggers
        this.attachSoundTriggers();
        
        // Resume audio context on user interaction (but keep muted)
        document.addEventListener('click', () => {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
        }, { once: true });
    }

    attachSoundTriggers() {
        // Button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn')) {
                this.playSound('click');
            }
        });
        
        // Hover effects
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches('.card-hover, .challenge-card')) {
                this.playSound('hover');
            }
        });
        
        // Form submission
        document.addEventListener('submit', (e) => {
            if (e.target.matches('#prompt-form')) {
                this.playSound('success');
            }
        });
        
        // Typing sounds
        let lastKeypressTime = 0;
        document.addEventListener('keydown', (e) => {
            if (e.target.matches('textarea, input[type="text"]')) {
                const now = Date.now();
                if (now - lastKeypressTime > 50) {
                    this.playSound('keypress');
                    lastKeypressTime = now;
                }
            }
        });
        
        // Achievement sounds
        window.addEventListener('achievementUnlocked', () => {
            this.playSound('achievement');
        });
        
        // Level up sounds
        window.addEventListener('levelUp', () => {
            this.playSound('levelUp');
        });
        
        // Error sounds
        window.addEventListener('error', () => {
            this.playSound('error');
        });
    }

    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    startBackgroundMusic() {
        if (this.currentMusic || this.isMuted) return;
        
        // Create a simple ambient loop
        const oscillators = [];
        const frequencies = [110, 165, 220]; // A2, E3, A3 (A minor chord)
        
        frequencies.forEach(freq => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.musicGainNode);
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.value = 0.1;
            
            // Subtle frequency modulation for ambient effect
            const lfo = this.audioContext.createOscillator();
            const lfoGain = this.audioContext.createGain();
            
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            
            lfo.type = 'sine';
            lfo.frequency.value = 0.1 + Math.random() * 0.2; // 0.1-0.3 Hz
            lfoGain.gain.value = 2; // ±2 Hz modulation
            
            osc.start();
            lfo.start();
            
            oscillators.push({ osc, lfo });
        });
        
        this.currentMusic = oscillators;
    }

    stopBackgroundMusic() {
        if (this.currentMusic) {
            this.currentMusic.forEach(({ osc, lfo }) => {
                osc.stop();
                lfo.stop();
            });
            this.currentMusic = null;
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        document.querySelector('.sound-on').classList.toggle('hidden', this.isMuted);
        document.querySelector('.sound-off').classList.toggle('hidden', !this.isMuted);
        
        if (this.isMuted) {
            this.stopBackgroundMusic();
        } else {
            this.startBackgroundMusic();
        }
    }

    setMusicVolume(volume) {
        this.musicVolume = volume;
        this.musicGainNode.gain.value = volume;
    }

    setSfxVolume(volume) {
        this.sfxVolume = volume;
        this.sfxGainNode.gain.value = volume;
    }

    // Create custom sound effect
    createCustomSound(params) {
        return () => {
            const { frequency, duration, type, volume, envelope } = params;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.sfxGainNode);
            
            oscillator.type = type || 'sine';
            oscillator.frequency.value = frequency || 440;
            
            // Custom envelope
            if (envelope) {
                envelope.forEach(({ time, value }) => {
                    gainNode.gain.linearRampToValueAtTime(
                        value * volume, 
                        this.audioContext.currentTime + time
                    );
                });
            } else {
                // Default envelope
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
            }
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        };
    }
}

// Initialize audio system
document.addEventListener('DOMContentLoaded', () => {
    window.audioSystem = new AudioSystem();
    
    // Background music disabled
    // All audio muted by default
});

// Audio styles removed