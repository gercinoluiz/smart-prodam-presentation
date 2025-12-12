import prodamLogo from '../assets/prodam.png';

interface Props {
    lang?: 'pt' | 'en';
}

export function ThankYouSlide({ lang = 'pt' }: Props) {
    const t = (pt: string, en: string) => lang === 'pt' ? pt : en;

    return (
        <div className="w-full h-full relative overflow-y-auto custom-scrollbar flex flex-col items-center justify-center bg-slate-950 font-sans select-none">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 fixed">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
                {/* Animated Matrix-like Grid */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent)',
                        backgroundSize: '50px 50px'
                    }}>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8">

                <div className="relative group">
                    {/* Logo Glow */}
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all duration-1000"></div>

                    <img
                        src={prodamLogo}
                        alt="Prodam Logo"
                        className="h-24 md:h-32 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse-slow"
                    />
                </div>

                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up">
                        {t("Obrigado", "Thank You")}
                    </h1>
                    <p className="text-cyan-400 font-mono tracking-widest text-sm md:text-base animate-fade-in-up delay-200 opacity-80 uppercase">
                        {t("Tecnologia que transforma e protege", "Technology that transforms and protects")}
                    </p>
                </div>

                <div className="mt-12 flex gap-8 animate-fade-in-up delay-500">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined">language</span>
                        </div>
                        <span className="text-xs text-slate-500">https://store.prodam.sp.gov.br</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined">language</span>
                        </div>
                        <span className="text-xs text-slate-500">www.prodam.sp.gov.br</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
