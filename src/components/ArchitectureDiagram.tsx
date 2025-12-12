import React, { useState, useEffect } from 'react';
import { stepsData, type StepData } from '../data/stepsData';

export function ArchitectureDiagram() {
    const [activeStep, setActiveStep] = useState<StepData | null>(null);

    const handleStepClick = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const step = stepsData.find(s => s.id === id);
        if (step) setActiveStep(step);
    };

    const handleClose = () => setActiveStep(null);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="w-full h-full bg-slate-950 p-2 relative overflow-hidden select-none flex items-center justify-center font-sans" onClick={handleClose}>
            {/* Modal Overlay */}
            <div
                className={`fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 cursor-pointer ${activeStep ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                onClick={handleClose}
            >
                {activeStep && (
                    <div
                        className="w-[90%] max-w-5xl bg-slate-900 border border-cyan-500/50 rounded-2xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex gap-8 transform transition-all duration-300 scale-100 translate-y-0 relative cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div className="w-1/2 relative overflow-hidden rounded-xl border border-slate-700 shadow-lg">
                            {activeStep.image ? (
                                <img src={activeStep.image} alt={activeStep.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">No Image</div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="text-xs font-mono text-cyan-400 mb-1 border-b border-cyan-500/30 pb-1 w-fit">SLIDE_Detail // {activeStep.id.toString().padStart(2, '0')}</div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                                    <span className="material-symbols-outlined text-cyan-400 text-3xl">{activeStep.icon}</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl text-white font-bold leading-none">{activeStep.title}</h2>
                                    <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">{activeStep.subtitle}</p>
                                </div>
                            </div>
                            <div className="prose prose-invert prose-sm max-w-none text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 block">
                                <div dangerouslySetInnerHTML={{ __html: activeStep.content }} />
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/30 py-2 px-4 rounded border border-emerald-500/20 w-fit">
                                <span className="material-symbols-outlined text-sm animate-pulse">terminal</span>
                                STATUS: {activeStep.simStatus || "ONLINE"}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Sci-Fi Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Container maintaining aspect ratio manually or via flex */}
            <div className="w-full h-full relative max-w-[1400px] max-h-[800px] z-10 transition-transform duration-500">

                {/* SVG Layer for Connections (Glowing Lines) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                            <polygon points="0 0, 6 2, 0 4" fill="#06b6d4" />
                        </marker>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <g stroke="#06b6d4" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.6">
                        {/* Field to Edge */}
                        <path d="M 13% 50% L 15% 50%" markerEnd="url(#arrowhead)" />
                        {/* Edge to Network */}
                        <path d="M 27% 50% L 29% 50%" markerEnd="url(#arrowhead)" />
                        {/* Network to Middleware (Split) */}
                        <path d="M 41% 50% L 43% 40%" markerEnd="url(#arrowhead)" />
                        <path d="M 41% 70% L 43% 70%" markerEnd="url(#arrowhead)" />

                        {/* VMS to OMS */}
                        <path d="M 58% 30% L 60% 30%" markerEnd="url(#arrowhead)" />

                        {/* OMS to Agency */}
                        <path d="M 83% 30% L 85% 20%" markerEnd="url(#arrowhead)" />

                        {/* IA to Integration */}
                        <path d="M 78% 70% L 85% 82%" markerEnd="url(#arrowhead)" />

                        {/* Feedback Loops (Dashed) */}
                        <path d="M 92% 70% L 92% 95% L 35% 95% L 35% 85%" strokeDasharray="5,5" opacity="0.4" />
                    </g>
                </svg>

                {/* 1. DISPOSITIVOS DE CAMPO (BLUE) - Click ID 1 */}
                <div
                    onClick={(e) => handleStepClick(3, e)}
                    className={`absolute left-[1%] top-[5%] w-[12%] h-[90%] bg-slate-900/80 border-2 ${activeStep?.id === 1 ? 'border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'border-cyan-500/30'} shadow-[0_0_15px_rgba(6,182,212,0.2)] rounded-lg flex flex-col items-center justify-between p-3 z-20 backdrop-blur-md cursor-pointer hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1`}
                >
                    <div className="absolute -left-[2px] top-4 w-1 h-8 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
                    <div className="text-sm text-cyan-400 font-bold mb-4 text-center tracking-wider uppercase drop-shadow">Campo</div>
                    <div className="flex flex-col gap-6 w-full">
                        <DeviceItem icon="graphic_eq" label="Sensores Ruído" color="text-slate-200" />
                        <DeviceItem icon="videocam" label="Câmeras LPR" color="text-slate-200" />
                        <DeviceItem icon="emergency" label="Botão Pânico" color="text-red-400" />
                        <DeviceItem icon="sensors" label="IoT Diversos" color="text-slate-200" />
                    </div>
                    <div className="mt-auto text-[10px] text-cyan-500/50 font-mono">NODE_ID: 0X82</div>
                </div>

                {/* 2. COMPUTAÇÃO DE BORDA (PURPLE) - Click ID 1 (Related) */}
                <div
                    onClick={(e) => handleStepClick(3, e)}
                    className={`absolute left-[15%] top-[25%] w-[12%] h-[50%] bg-slate-900/80 border-2 ${activeStep?.id === 1 ? 'border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'border-purple-500/30'} shadow-[0_0_15px_rgba(168,85,247,0.2)] rounded-lg flex flex-col items-center justify-center p-3 z-20 backdrop-blur-md gap-6 cursor-pointer hover:bg-slate-800 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1`}
                >
                    <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                    <div className="text-sm text-purple-400 font-bold text-center tracking-wider uppercase drop-shadow">Edge</div>
                    <DeviceItem icon="router" label="IoT Gateway" color="text-purple-200" size="text-3xl" />
                    <DeviceItem icon="memory" label="Processamento" color="text-purple-200" size="text-2xl" />
                </div>

                {/* 3. REDE DE COMUNICAÇÃO (AMBER) - Click ID 2 */}
                <div
                    onClick={(e) => handleStepClick(4, e)}
                    className={`absolute left-[29%] top-[5%] w-[12%] h-[90%] bg-slate-900/80 border-2 ${activeStep?.id === 2 ? 'border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]' : 'border-amber-500/30'} shadow-[0_0_15px_rgba(245,158,11,0.2)] rounded-lg flex flex-col items-center justify-between p-3 z-20 backdrop-blur-md cursor-pointer hover:bg-slate-800 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1`}
                >
                    <div className="absolute -right-[2px] bottom-4 w-1 h-8 bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
                    <div className="text-sm text-amber-400 font-bold mb-4 text-center tracking-wider uppercase drop-shadow">Rede</div>
                    <div className="flex flex-col gap-6 w-full">
                        <DeviceItem icon="wifi" label="Wi-Fi Mesh" color="text-amber-100" />
                        <DeviceItem icon="cell_tower" label="4G / 5G" color="text-amber-100" />
                        <DeviceItem icon="settings_input_antenna" label="LoRaWAN" color="text-amber-100" />
                        <DeviceItem icon="cable" label="Fibra Óptica" color="text-amber-100" />
                    </div>
                    <div className="mt-auto text-[10px] text-amber-500/50 font-mono">NET_STATUS: OK</div>
                </div>

                {/* 4. MIDDLEWARE (MAIN BOX) */}
                <div className="absolute left-[43%] top-[2%] w-[40%] h-[96%] bg-slate-900/60 border border-slate-700 rounded-xl p-3 z-0 shadow-2xl">
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500"></div>

                    <div className="text-base text-slate-200 font-bold mb-4 text-center tracking-[0.2em] uppercase border-b border-slate-700/50 pb-2">
                        Núcleo de Inteligência Urbana
                    </div>

                    <div className="relative w-full h-[92%]">
                        {/* VMS - Click ID 3 */}
                        <div
                            onClick={(e) => handleStepClick(5, e)}
                            className={`absolute left-0 top-0 w-[35%] h-[48%] bg-slate-800/50 border ${activeStep?.id === 3 ? 'border-orange-400 bg-slate-800' : 'border-orange-500/30'} rounded-lg p-2 flex flex-col cursor-pointer hover:bg-slate-800 hover:border-orange-400 transition-colors`}
                        >
                            <div className="text-xs text-orange-400 font-bold text-center uppercase mb-2">VMS</div>
                            <div className="flex-1 flex flex-col justify-center gap-3">
                                <TechBox icon="download" label="Ingestão de Streams" color="text-orange-300" border="border-orange-500/30" />
                                <TechBox icon="save" label="Gravação Segura" color="text-orange-300" border="border-orange-500/30" />
                            </div>
                        </div>

                        {/* OMS - Click ID 5 */}
                        <div
                            onClick={(e) => handleStepClick(7, e)}
                            className={`absolute right-0 top-0 w-[63%] h-[48%] bg-slate-800/50 border ${activeStep?.id === 5 ? 'border-emerald-400 bg-slate-800' : 'border-emerald-500/30'} rounded-lg p-2 cursor-pointer hover:bg-slate-800 hover:border-emerald-400 transition-colors`}
                        >
                            <div className="text-xs text-emerald-400 font-bold text-center uppercase mb-2">OMS (Orquestrador)</div>
                            <div className="grid grid-cols-2 gap-2 h-[85%]">
                                <TechBox icon="notifications_active" label="Gestão de Alertas" color="text-emerald-300" border="border-emerald-500/20" />
                                <TechBox icon="map" label="Mapa Tático Real" color="text-emerald-300" border="border-emerald-500/20" />
                                <div className="col-span-2 h-full">
                                    <TechBox icon="flag" label="Incident Commander" color="text-emerald-200" border="border-emerald-500/40" glowing />
                                </div>
                            </div>
                        </div>

                        {/* IA - Click ID 4 */}
                        <div
                            onClick={(e) => handleStepClick(6, e)}
                            className={`absolute bottom-0 left-0 w-full h-[48%] bg-slate-800/50 border ${activeStep?.id === 4 ? 'border-cyan-400 bg-slate-800' : 'border-cyan-500/30'} rounded-lg p-2 mt-2 cursor-pointer hover:bg-slate-800 hover:border-cyan-400 transition-colors`}
                        >
                            <div className="text-xs text-cyan-400 font-bold text-center uppercase mb-3">IA & Analytics Engine</div>
                            <div className="flex justify-center mb-4 relative">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                                <span className="material-symbols-outlined text-4xl text-cyan-400 relative z-10 animate-pulse">neurology</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                <MiniTechBox icon="face" label="Face Rec" />
                                <MiniTechBox icon="directions_car" label="LPR/OCR" />
                                <MiniTechBox icon="directions_run" label="Suspeito" />
                                <MiniTechBox icon="groups" label="Fluxo" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. RIGHT COLUMN */}
                {/* Agencies - Click ID 6 */}
                <div
                    onClick={(e) => handleStepClick(8, e)}
                    className={`absolute left-[85%] top-[5%] w-[14%] h-[25%] bg-teal-950/60 border-2 ${activeStep?.id === 6 ? 'border-teal-400 bg-teal-900/80' : 'border-teal-500/30'} rounded-lg flex flex-col p-2 z-20 backdrop-blur-sm shadow-[0_0_15px_rgba(20,184,166,0.2)] cursor-pointer hover:bg-teal-900/80 hover:border-teal-400 transition-colors`}
                >
                    <div className="text-xs text-teal-300 font-bold text-center uppercase mb-2">Despacho</div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-teal-100 font-bold text-center h-full">
                        <div className="bg-teal-900/80 rounded flex items-center justify-center border border-teal-500/20">PM</div>
                        <div className="bg-teal-900/80 rounded flex items-center justify-center border border-teal-500/20">SAMU</div>
                        <div className="bg-teal-900/80 rounded flex items-center justify-center border border-teal-500/20">GCM</div>
                        <div className="bg-teal-900/80 rounded flex items-center justify-center border border-teal-500/20">Civil</div>
                    </div>
                </div>

                {/* Compliance - Click ID 10 */}
                <div
                    onClick={(e) => handleStepClick(12, e)}
                    className={`absolute left-[85%] top-[32%] w-[14%] h-[20%] bg-rose-950/60 border-2 ${activeStep?.id === 10 ? 'border-rose-400 bg-rose-900/80' : 'border-rose-500/30'} rounded-lg flex flex-col p-2 z-20 backdrop-blur-sm shadow-[0_0_15px_rgba(244,63,94,0.2)] items-center justify-center cursor-pointer hover:bg-rose-900/80 hover:border-rose-400 transition-colors`}
                >
                    <div className="text-xs text-rose-300 font-bold text-center uppercase mb-1">Segurança</div>
                    <span className="material-symbols-outlined text-3xl text-rose-400 mb-1">lock_person</span>
                    <div className="text-[10px] text-rose-100 text-center uppercase tracking-tighter">LGPD & Audit</div>
                </div>

                {/* Integration - Click ID 4 (Shared with IA for compliance/DBs - actually integrations might be different, but user mapped to 4 previously) */}
                {/* Looking at stepsData, 'Integração' concepts are mixed. Let's redirect to 'Armazenamento/LGPD' or 'OMS'? Actually 'Integração' usually hits 'Analytics' or 'VMS'. Let's keep ID 4 per previous map unless logic says otherwise. Wait, ID 4 is Analytics. ID 5 is OMS. Integration often means connecting systems. Let's use 5 (OMS) or maybe a new one? No, stick to prev logic (4). */}
                <div
                    className={`
        absolute left-[85%] top-[54%] w-[14%] h-[42%] bg-slate-800/80 border-2 rounded-lg flex flex-col p-2 z-20 backdrop-blur-sm shadow-xl
        cursor-pointer hover:bg-slate-800 hover:border-slate-400 transition-colors // <--- EFEITOS VISUAIS
        ${activeStep?.id === 4 ? 'border-slate-400 bg-slate-800' : 'border-slate-500/30'} // <--- ESTADO ATIVO
    `}                >
                    <div className="text-xs text-slate-300 font-bold text-center uppercase mb-2">Integração</div>
                    <div className="flex flex-col gap-3 h-full justify-center">
                        <TechBox icon="api" label="API Gateway" color="text-slate-200" border="border-slate-500/30" />
                        <TechBox icon="storage" label="Base Criminal" color="text-slate-200" border="border-slate-500/30" />
                        <TechBox icon="link" label="Legados" color="text-slate-200" border="border-slate-500/30" />
                    </div>
                </div>

            </div>
        </div>
    );
}

// Sub-components for cleaner code
function DeviceItem({ icon, label, color, size = "text-2xl" }: { icon: string, label: string, color: string, size?: string }) {
    return (
        <div className="flex flex-col items-center group cursor-default">
            <div className={`
        ${size} mb-1 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
        ${color} material-symbols-outlined
      `}>
                {icon}
            </div>
            <span className={`text-[10px] font-medium tracking-tight uppercase ${color} opacity-80 group-hover:opacity-100`}>{label}</span>
        </div>
    );
}

function TechBox({ icon, label, color, border, glowing = false }: { icon: string, label: string, color: string, border: string, glowing?: boolean }) {
    return (
        <div className={`
      flex items-center gap-2 p-2 rounded bg-slate-900/50 border ${border} w-full h-full justify-center
      ${glowing ? 'animate-pulse shadow-[inset_0_0_10px_rgba(16,185,129,0.1)]' : ''}
    `}>
            <span className={`material-symbols-outlined ${color} text-lg`}>{icon}</span>
            <span className={`text-[10px] font-semibold ${color} uppercase`}>{label}</span>
        </div>
    );
}

function MiniTechBox({ icon, label }: { icon: string, label: string }) {
    return (
        <div className="flex flex-col items-center justify-center p-1 bg-cyan-900/20 rounded border border-cyan-500/20">
            <span className="material-symbols-outlined text-cyan-300 text-lg mb-1">{icon}</span>
            <span className="text-[8px] text-cyan-100 font-mono text-center leading-none">{label}</span>
            <div className="w-full h-[1px] bg-cyan-500/30 mt-1"></div>
            <div className="text-[6px] text-cyan-500/50 mt-[1px]">On</div>
        </div>
    );
}
