import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
    
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

      <div className="relative z-10 text-center space-y-6 px-4">
        <div className="mb-8 md:mb-12">
          <h1 
            className="text-5xl sm:text-7xl md:text-9xl font-black tracking-wider mb-3 md:mb-4 animate-flicker"
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
            className="text-base sm:text-xl md:text-2xl text-red-300 font-medium tracking-widest px-2"
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
          className="group relative px-6 py-6 sm:px-10 sm:py-7 md:px-12 md:py-8 text-base sm:text-xl md:text-2xl font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105 active:scale-95"
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
          <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-30 group-active:opacity-50 transition-opacity duration-300 rounded-md" />
        </Button>

        {showMessage && (
          <div 
            className="fixed inset-4 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:inset-auto z-50 animate-fade-in flex items-center justify-center"
          >
            <div 
              className="px-6 py-8 sm:px-12 sm:py-10 md:px-16 md:py-12 rounded-lg border-4 max-w-md w-full"
              style={{
                background: 'linear-gradient(135deg, #1a0505 0%, #0a0a0a 100%)',
                borderColor: '#ff0000',
                boxShadow: '0 0 40px #ff0000, 0 0 80px #ff0000, inset 0 0 30px rgba(255, 0, 0, 0.2)',
              }}
            >
              <p 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center animate-flicker leading-tight"
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

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4">
        <p 
          className="text-xs sm:text-sm text-red-800 font-medium tracking-widest"
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