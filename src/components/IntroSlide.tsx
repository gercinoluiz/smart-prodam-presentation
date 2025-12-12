

export function IntroSlide() {
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-950 font-sans select-none">

            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/cameras.png"
                    alt="Smart City Background"
                    className="w-full h-full object-cover opacity-20 scale-105 animation-slow-pan"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl w-full py-2 flex flex-col md:flex-row items-center gap-12">

                {/* Text Section */}
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        MONITORAMENTO INTELIGENTE
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                        SMART SAMPA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PRODAM</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl border-l-4 border-cyan-500 pl-6 animate-fade-in-up delay-200">
                        A maior plataforma de <strong>inteligência urbana</strong> e <strong>segurança pública</strong> da América Latina agora é PRODAM. <br />
                        Integrando milhares de câmeras, sensores e dados para proteger sua cidade em tempo real.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 animate-fade-in-up delay-300">
                        <FeatureItem icon="videocam" title="20k+ Câmeras" desc="Reconhecimento Facial & LPR" />
                        <FeatureItem icon="hub" title="Integração" desc="PM, GCM, SAMU e Defesa Civil" />
                        <FeatureItem icon="neurology" title="IA Avançada" desc="Detecção autônoma de incidentes" />
                    </div>

                    {/* <div className="animate-fade-in-up delay-500">
                        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Desenvolvido por</div>
                        <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            {/* Placeholder for Logos - styling text for now */}
                            {/* <span className="text-2xl font-bold text-slate-200 tracking-tighter">PRODAM</span>
                        </div>
                    </div> */} 
                </div>

                {/* Visual Element / Graphic */}
                <div className="w-full md:w-1/3 flex justify-center animate-fade-in-right delay-300">
                    <div className="relative w-80 h-80">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full animate-spin-slow-reverse"></div>
                        <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-full animate-spin-slow border-dashed"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 bg-cyan-500/10 rounded-full backdrop-blur-md border border-cyan-400/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                                <span className="material-symbols-outlined text-8xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                                    shield_with_house
                                </span>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <FloatingBadge icon="visibility" text="Vigilância" position="-top-4 left-10" delay="0s" />
                        <FloatingBadge icon="memory" text="Analytics" position="bottom-12 -right-8" delay="1s" />
                        <FloatingBadge icon="speed" text="Real-Time" position="top-1/2 -left-12" delay="2s" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function FeatureItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="flex flex-col gap-1 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all cursor-default group">
            <span className="material-symbols-outlined text-cyan-500 text-2xl group-hover:scale-110 transition-transform">{icon}</span>
            <span className="font-bold text-slate-200 text-sm">{title}</span>
            <span className="text-xs text-slate-400 leading-tight">{desc}</span>
        </div>
    )
}

function FloatingBadge({ icon, text, position, delay }: { icon: string, text: string, position: string, delay: string }) {
    return (
        <div className={`absolute ${position} flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg shadow-xl backdrop-blur-md animate-bounce-slow`} style={{ animationDelay: delay }}>
            <span className="material-symbols-outlined text-cyan-400 text-sm">{icon}</span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">{text}</span>
        </div>
    )
}
