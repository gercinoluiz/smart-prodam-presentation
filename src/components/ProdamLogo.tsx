import prodamLogo from '../assets/prodam.png';

export function ProdamLogo() {
    return (
        <div className="fixed bottom-4 left-4 z-[9999] opacity-80 mix-blend-screen pointer-events-none select-none">
            <div className="relative group">
                {/* FBI/Tech Scan Effect */}
                <div className="absolute inset-0 bg-cyan-500/0 overflow-hidden rounded-sm">
                    <div className="w-full h-[200%] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent absolute top-[-100%] animate-scan-slow"></div>
                </div>

                {/* Glitch/Hologram Container */}
                <div className="relative">
                    <img
                        src={prodamLogo}
                        alt="Prodam Logo"
                        className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] animate-pulse-slow"
                    />
                    {/* Tech Decoration Lines */}
                    <div className="absolute -left-2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
                </div>
            </div>
        </div>
    );
}
