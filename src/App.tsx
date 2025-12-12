import { useState, useEffect, useRef } from 'react';
import { stepsData } from './data/stepsData';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { IntroSlide } from './components/IntroSlide';
import { PrisometroSlide } from './components/PrisometroSlide';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('pt-BR'));

  // Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('pt-BR'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Animation States
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChangingStep, setIsChangingStep] = useState(false);

  // Initial Mount Animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Step Change Animation logic
  useEffect(() => {
    setIsChangingStep(true);
    const timer = setTimeout(() => {
      setIsChangingStep(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Fullscreen / Presentation Mode Logic
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keyboard Navigation & Fullscreen Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentStep((prev) => Math.min(prev + 1, stepsData.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'f' || e.key === 'F11') {
        // Optional: Toggle fullscreen on F key or F11 (browser handles F11 usually, but we can intercept if needed, mostly redundant for F11)
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const activeStepData = stepsData[currentStep];

  return (
    <>
      {/* SCREEN INTERACTIVE VIEW */}
      <div className={`
        flex flex-col md:flex-row h-screen w-full bg-slate-950 overflow-hidden text-white font-inter print-hidden
        ${isFullscreen ? 'items-center justify-center' : ''}
      `}>

        {/* LEFT PANEL: SIDEBAR & NAVIGATION (Hidden in Fullscreen) */}
        {!isFullscreen && (
          <div className="glass-panel w-full md:w-80 h-auto md:h-full flex flex-col relative z-20 border-r border-slate-700/50 shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-cyan-500 flex items-center justify-center shadow-[0_0_10px_#06b6d4]">
                  <span className="material-symbols-outlined text-white text-lg">visibility</span>
                </div>
                <h1 className="text-lg font-bold tracking-tight text-white">SMART SAMPA PRODAM</h1>
              </div>
              <p className="text-xs text-slate-400">Fluxo de Monitoramento Inteligente</p>
            </div>

            {/* Steps List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 relative" id="steps-container">
              {/* Progress Line */}
              <div
                className="absolute left-[2.25rem] top-6 w-0.5 bg-cyan-500/50 -z-0 step-line transition-all duration-500"
                style={{ height: `${(currentStep * 72) + 20}px` }}
              ></div>

              {stepsData.map((step, index) => {
                const isActive = index === currentStep;
                return (
                  <div
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={`group relative flex items-center gap-4 cursor-pointer p-2 rounded-lg transition-all mb-2 ${isActive ? 'bg-slate-800' : 'hover:bg-slate-800/50'}`}
                    style={{ height: '64px' }} // Fixed height for alignment
                  >
                    {/* Icon Bubble */}
                    <div
                      className={`
                      pseudo-bubble relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shrink-0
                      ${isActive
                          ? 'w-16 rounded-md border-cyan-400 shadow-[0_0_15px_rgba(8,145,178,0.5)]'
                          : 'bg-slate-900 border-slate-700 text-slate-500 opacity-70'} // Reduced size for inactive
                      ${index === 0 && isActive ? 'bg-slate-800' : ''}
                    `}
                    >
                      {isActive ? (
                        <>
                          <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm text-white drop-shadow-md">{step.icon}</span>
                          </div>
                        </>
                      ) : (
                        <span className="material-symbols-outlined text-sm">{step.icon}</span>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs md:text-sm font-bold transition-colors truncate ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {step.title}
                      </h4>
                      <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-wider truncate">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Active Indicator Arrow */}
                    <div className={`absolute right-2 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="material-symbols-outlined text-cyan-500 text-sm">chevron_right</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex flex-col gap-2">
              <button
                onClick={toggleFullscreen}
                className="w-full py-2 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center gap-2 text-white text-xs font-semibold transition-all shadow-lg shadow-cyan-900/20"
              >
                <span className="material-symbols-outlined text-sm">slideshow</span> Modo Apresentação
              </button>
              <button
                onClick={handlePrint}
                className="w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 text-slate-300 text-xs font-semibold transition-all"
              >
                <span className="material-symbols-outlined text-sm">picture_as_pdf</span> Baixar em PDF
              </button>
            </div>

            {/* Footer Attribution */}
            <div className="p-4 border-t border-slate-800 text-[10px] text-slate-600 text-center">
              Arquitetura de referência: Smart Sampa.<br />
              Imagens ilustrativas geradas por IA.
            </div>
          </div>
        )}

        {/* RIGHT PANEL: CONTENT VISUALIZATION */}
        <div className={`
          relative bg-slate-950 flex flex-col transition-all duration-300
          ${isFullscreen ? 'w-full h-full max-w-[1600px] justify-center' : 'flex-1 h-full overflow-hidden'}
        `}>
          {/* Ambient Background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src="/assets/cameras.png"
              className="w-full h-full object-cover blur-sm"
              alt="Background"
            />
            <div className="absolute inset-0 bg-slate-950/80"></div>
          </div>

          {/* Top Header - Hide in Fullscreen */}
          {!isFullscreen && (
            <div className="relative z-10 p-6 flex justify-between items-start bg-gradient-to-b from-slate-900/80 to-transparent">
              <div>
                <h2 id="detail-title" className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                  Visão Geral
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 rounded text-xs text-slate-300 border border-slate-700">Fluxo Completo</span>
                  <span className="px-2 py-1 bg-slate-800/80 rounded text-xs text-slate-300 border border-slate-700">Tempo Real</span>
                </div>
              </div>

              {/* Clock */}
              <div className="text-right hidden md:block">
                <div className="text-2xl font-mono text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                  {currentTime}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Hora Local</div>
              </div>
            </div>
          )}

          {/* Main Card Area */}
          <div className={`
            relative z-10 p-4 md:p-8 overflow-y-auto scrollbar-hide flex flex-col items-center
            ${isFullscreen ? 'justify-center h-full' : 'flex-1'}
          `}>

            {/* Dynamic Card */}
            <div
              id="content-card"
              className={`
              w-full max-w-7xl glass-panel rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col md:flex-row 
              print:opacity-100 print:transform-none print:shadow-none print:border-none print:block
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              ${isChangingStep ? 'opacity-50 scale-[0.99]' : ''}
            `}
            >
              {activeStepData.layout === 'intro' ? (
                // INTRO LAYOUT
                <div className="w-full h-[70vh] md:h-[600px] bg-slate-900 overflow-hidden relative print:h-[90vh]">
                  <IntroSlide />
                </div>
              ) : activeStepData.layout === 'prisometro' ? (
                // PRISOMETRO LAYOUT
                <div className="w-full h-[70vh] md:h-[600px] bg-white overflow-hidden relative print:h-[90vh]">
                  <PrisometroSlide />
                </div>
              ) : activeStepData.layout === 'full' ? (
                // FULL WIDTH LAYOUT (DIAGRAM)
                <div className="w-full h-[70vh] md:h-[600px] bg-slate-900 overflow-hidden relative print:h-[90vh]">
                  <ArchitectureDiagram />
                  {/* Subtle Gradient for integration */}
                  <div className="absolute inset-0 pointer-events-none border-4 border-slate-800/20 rounded-2xl"></div>
                </div>
              ) : (
                // STANDARD LAYOUT (SPLIT)
                <>
                  {/* Card Image Section - Increased width share */}
                  <div className="relative w-full md:w-3/5 h-64 md:h-auto overflow-hidden group print:w-full print:h-96 print:mb-4">
                    <div className="scan-line z-20 print:hidden"></div>

                    <img
                      src={activeStepData.image}
                      alt="Detail View"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay - Hidden in print */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 print:hidden pointer-events-none"></div>
                  </div>

                  {/* Card Content Section */}
                  <div className="w-full md:w-2/5 p-6 md:p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 flex flex-col justify-center print:bg-none print:w-full print:text-black">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] print:border-gray-300 print:shadow-none">
                        <span className="material-symbols-outlined text-cyan-400 text-2xl print:text-black">
                          {activeStepData.icon}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-wide print:text-black">
                        {activeStepData.title}
                      </h3>
                    </div>

                    <div
                      className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed print:prose-neutral print:text-black"
                      dangerouslySetInnerHTML={{ __html: activeStepData.content }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Spacer */}
            <div className="h-12 print:hidden"></div>
          </div>
        </div>
      </div>

      {/* PRINT VIEW: FULL DECK RENDER */}
      <div className="hidden print-visible w-screen text-white font-inter">
        {stepsData.map((step, index) => (
          <div key={step.id} className="w-screen h-screen relative flex items-center justify-center bg-slate-950 break-after-page overflow-hidden">
            {/* Background for Print */}
            <div className="absolute inset-0 opacity-20">
              <img src="/assets/cameras.png" className="w-full h-full object-cover blur-sm" alt="bg" />
            </div>

            {/* Header Branding */}
            <div className="absolute top-8 left-12 right-12 flex justify-between items-end border-b border-slate-700 pb-4">
              <h1 className="text-2xl font-bold text-white">Smart Monitor <span className="text-cyan-500">//</span> {step.title}</h1>
              <p className="text-xs text-slate-400">Fluxo de Monitoramento Inteligente</p>
            </div>

            {/* The Card Copy */}
            <div className="w-[90%] max-w-7xl glass-panel rounded-2xl overflow-hidden shadow-none flex flex-row relative z-10 border border-slate-600">
              {/* Image */}
              <div className="relative w-3/5 h-[60vh] overflow-hidden">
                {index === 0 ? (
                  <div className="w-full h-full bg-slate-900">
                    <ArchitectureDiagram />
                  </div>
                ) : (
                  <img src={step.image} className="w-full h-full object-cover" alt={step.title} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              {/* Content */}
              <div className="w-2/5 p-12 bg-slate-900 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                    <span className="material-symbols-outlined text-cyan-400 text-3xl">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">{step.subtitle}</p>
                  </div>
                </div>
                <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: step.content }} />
              </div>
            </div>

            {/* Pagination Footer */}
            <div className="absolute bottom-6 text-center text-[10px] text-slate-500 w-full">
              Arquitetura de Referência Smart Sampa | Página {step.id} de {stepsData.length}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
