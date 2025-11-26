import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const ctx = audioContextRef.current;
    const now = ctx.currentTime;

    const oscillator1 = ctx.createOscillator();
    const oscillator2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator1.frequency.setValueAtTime(100, now);
    oscillator1.frequency.exponentialRampToValueAtTime(50, now + 0.5);
    oscillator2.frequency.setValueAtTime(150, now);
    oscillator2.frequency.exponentialRampToValueAtTime(75, now + 0.5);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.5);

    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

    oscillator1.start(now);
    oscillator2.start(now);
    oscillator1.stop(now + 0.5);
    oscillator2.stop(now + 0.5);
  };

  const handleButtonClick = () => {
    playSound();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 0, 0, 0.3) 2px, rgba(139, 0, 0, 0.3) 4px)',
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-600 rounded-full animate-flicker"
            style={{
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8">
        <div className="mb-12">
          <h1 
            className="text-7xl md:text-9xl font-black tracking-wider mb-4 animate-flicker"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #8B0000',
              letterSpacing: '0.1em',
            }}
          >
            ОСД
          </h1>
          <p 
            className="text-xl md:text-2xl text-red-300 font-medium tracking-widest"
            style={{
              fontFamily: 'Rubik, sans-serif',
              textShadow: '0 0 5px rgba(255, 0, 0, 0.5)',
            }}
          >
            ОЧЕНЬ СТРАННЫЕ ДЕЛА
          </p>
        </div>

        <Button
          onClick={handleButtonClick}
          className="group relative px-12 py-8 text-2xl font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: 'Rubik, sans-serif',
            background: 'linear-gradient(135deg, #8B0000 0%, #ff0000 50%, #8B0000 100%)',
            color: '#ffffff',
            border: '3px solid #ff0000',
            boxShadow: '0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #8B0000, inset 0 0 20px rgba(255, 0, 0, 0.3)',
            textShadow: '0 0 10px #000000, 2px 2px 4px #000000',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }}
        >
          <span className="relative z-10">Продолжить просмотр ОСД</span>
          <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md" />
        </Button>

        {showMessage && (
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in"
          >
            <div 
              className="px-16 py-12 rounded-lg border-4"
              style={{
                background: 'linear-gradient(135deg, #1a0505 0%, #0a0a0a 100%)',
                borderColor: '#ff0000',
                boxShadow: '0 0 40px #ff0000, 0 0 80px #ff0000, inset 0 0 30px rgba(255, 0, 0, 0.2)',
              }}
            >
              <p 
                className="text-4xl font-bold text-center animate-flicker"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#ff0000',
                  textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000',
                  letterSpacing: '0.05em',
                }}
              >
                Вы перевели Алексею<br />55 рублёв
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p 
          className="text-sm text-red-800 font-medium tracking-widest"
          style={{
            fontFamily: 'Rubik, sans-serif',
            textShadow: '0 0 5px rgba(139, 0, 0, 0.8)',
          }}
        >
          HAWKINS, INDIANA • 1983
        </p>
      </div>
    </div>
  );
};

export default Index;