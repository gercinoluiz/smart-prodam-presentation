

import camerasImg from '../assets/cameras.png';

interface Props {
    lang?: 'pt' | 'en';
}

export function IntroSlide({ lang = 'pt' }: Props) {
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en;

    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-950 font-sans select-none p-4 md:p-2 md:pb-20">

            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={camerasImg}
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

            {/* Main Content - Centered Block Layout */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-2 md:px-6 max-h-full">

                {/* Text Section - Compact & Responsive */}
                <div className="w-full md:w-3/5 flex flex-col justify-center gap-3 md:gap-5 min-w-0">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs font-mono animate-fade-in-up w-fit">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        {t('MONITORAMENTO INTELIGENTE', 'INTELLIGENT MONITORING')}
                    </div>

                    {/* Title */}
                    <h1 className="font-black text-white tracking-tight leading-tight animate-fade-in-up delay-100 drop-shadow-lg"
                        style={{ fontSize: 'clamp(1.75rem, 5vh, 4rem)' }}>
                        SMART SAMPA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PRODAM</span>
                    </h1>

                    {/* Description */}
                    <div className="text-slate-300 leading-relaxed max-w-2xl border-l-4 border-cyan-500 pl-4 md:pl-6 animate-fade-in-up delay-200 line-clamp-4 md:line-clamp-none overflow-hidden"
                        style={{ fontSize: 'clamp(0.875rem, 2vh, 1.15rem)' }}>
                        {lang === 'pt' ? (
                            <>
                                A maior plataforma de <strong>inteligência urbana</strong> e <strong>segurança pública</strong> da América Latina agora é PRODAM. <br />
                                Integrando milhares de câmeras, sensores e dados para proteger sua cidade em tempo real.
                            </>
                        ) : (
                            <>
                                The largest <strong>urban intelligence</strong> and <strong>public safety</strong> platform in Latin America is now PRODAM. <br />
                                Integrating thousands of cameras, sensors, and data to protect your city in real time.
                            </>
                        )}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 animate-fade-in-up delay-300 pt-1">
                        <FeatureItem icon="videocam" title="20k+ Câmeras" desc={t("Rec. Facial & LPR", "Facial Rec & LPR")} delay="0ms" />
                        <FeatureItem icon="hub" title={t("Integração", "Integration")} desc={t("PM, GCM, SAMU", "Police, GCM, EMS")} delay="100ms" />
                        <FeatureItem icon="neurology" title={t("IA Avançada", "Advanced AI")} desc={t("Detecção de Incidentes", "Incident Detection")} delay="200ms" />
                        <FeatureItem icon="lock" title={t("Segurança", "Security")} desc="LGPD / Compliance" delay="300ms" />
                    </div>
                </div>

                {/* Visual Element - Scaled Graphically */}
                <div className="w-full md:w-2/5 flex justify-center items-center animate-fade-in-right delay-300 shrink-0">
                    <div className="relative aspect-square w-auto h-[25vh] md:h-[40vh] max-h-[400px]">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full animate-spin-slow-reverse"></div>
                        <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-full animate-spin-slow border-dashed"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[60%] h-[60%] bg-cyan-500/10 rounded-full backdrop-blur-md border border-cyan-400/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                                <span className="material-symbols-outlined text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ fontSize: 'clamp(2rem, 8vh, 5rem)' }}>
                                    shield_with_house
                                </span>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <FloatingBadge icon="visibility" text={t("Vigilância", "Surveillance")} position="-top-4 left-0" delay="0s" />
                        <FloatingBadge icon="memory" text="Analytics" position="bottom-4 -right-4" delay="1s" />
                        <FloatingBadge icon="speed" text="Real-Time" position="top-1/2 -left-8" delay="2s" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function FeatureItem({ icon, title, desc, delay }: { icon: string, title: string, desc: string, delay: string }) {
    return (
        <div
            className="flex flex-col gap-1 p-2 md:p-3 rounded-lg bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all cursor-default group"
            style={{ animationDelay: delay }}
        >
            <span className="material-symbols-outlined text-cyan-500 text-xl md:text-2xl group-hover:scale-110 transition-transform">{icon}</span>
            <span className="font-bold text-slate-200 text-xs md:text-sm whitespace-nowrap">{title}</span>
            <span className="text-[10px] md:text-xs text-slate-400 leading-tight line-clamp-2">{desc}</span>
        </div>
    )
}

function FloatingBadge({ icon, text, position, delay }: { icon: string, text: string, position: string, delay: string }) {
    return (
        <div className={`hidden lg:flex absolute ${position} items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md animate-bounce-slow z-20`} style={{ animationDelay: delay }}>
            <span className="material-symbols-outlined text-cyan-400 text-sm">{icon}</span>
            <span className="text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap">{text}</span>
        </div>
    )
}
