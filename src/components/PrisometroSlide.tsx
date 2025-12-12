import { useState, useEffect } from 'react';

interface PrisometroData {
    foragidos: string;
    presosAno: string;
    presosMes: string;
    desaparecidos: string;
    flagrantes: string;
    veiculos: string;
    lastUpdate: string;
}

export function PrisometroSlide() {
    const [data, setData] = useState<PrisometroData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // PROD TODO: Replace with your real backend endpoint
    const API_URL = "https://api.seusistema.sp.gov.br/prisometro";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch directly from the official site (Allowed via CORS)
                const response = await fetch("https://smartsampa.prefeitura.sp.gov.br", {
                    cache: 'no-store'
                });
                const htmlText = await response.text();

                // Parse HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlText, "text/html");

                // Extract Stats based on class '.prisouni h5'
                const stats = doc.querySelectorAll(".prisouni h5");
                const lastRef = doc.querySelector("h6.text-center"); // "ÚLTIMA ATUALIZAÇÃO..."

                if (stats.length >= 6) {
                    const apiData: PrisometroData = {
                        foragidos: stats[0]?.textContent?.trim() || "0",
                        presosAno: stats[1]?.textContent?.trim() || "0",
                        presosMes: stats[2]?.textContent?.trim() || "0",
                        desaparecidos: stats[3]?.textContent?.trim() || "0",
                        flagrantes: stats[4]?.textContent?.trim() || "0",
                        veiculos: stats[5]?.textContent?.trim() || "0",
                        // Clean up the text "ÚLTIMA ATUALIZAÇÃO: " from the string
                        lastUpdate: lastRef?.textContent?.replace("ÚLTIMA ATUALIZAÇÃO: ", "").replace("Última Atualização: ", "").trim() || new Date().toLocaleString('pt-BR')
                    };
                    setData(apiData);
                } else {
                    console.warn("Could not find all stats selectors in Smart Sampa HTML");
                    setError(true);
                }

                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch prisometro data", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) return <div className="text-red-500 text-center">Erro ao carregar dados do Prisômetro.</div>;

    return (
        <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-slate-950 font-sans text-slate-200 p-8 select-none">
            {/* Background Sci-Fi Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-6xl text-center flex flex-col items-center">

                <h2 className="text-5xl md:text-6xl font-black text-white mb-2 mt-20 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    Prisô<span className="text-cyan-500">metro</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-400 font-light mb-16 max-w-3xl border-b border-slate-800 pb-8">
                    As câmeras do Smart Sampa ajudaram na captura de
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 w-full">
                    <StatItem
                        value={data?.foragidos}
                        label={<span>FORAGIDOS<br />CAPTURADOS</span>}
                        loading={loading}
                        delay={0}
                    />
                    <StatItem
                        value={data?.presosAno}
                        label={<span>PRESOS NO<br />ANO DE 2025</span>}
                        loading={loading}
                        delay={100}
                    />
                    <StatItem
                        value={data?.presosMes}
                        label={<span>PRESOS EM<br />DEZEMBRO/25</span>}
                        loading={loading}
                        delay={200}
                    />
                    <StatItem
                        value={data?.desaparecidos}
                        label={<span>DESAPARECIDOS<br />LOCALIZADOS</span>}
                        loading={loading}
                        delay={300}
                    />
                    <StatItem
                        value={data?.flagrantes}
                        label={<span>TOTAL DE PRESOS<br />EM FLAGRANTE</span>}
                        loading={loading}
                        delay={400}
                    />
                    <StatItem
                        value={data?.veiculos}
                        label={<span>OCORRÊNCIA<br />COM VEÍCULOS</span>}
                        loading={loading}
                        delay={500}
                    />
                </div>

                <div className="mt-20 flex items-center gap-2 text-xs font-mono text-cyan-500/70 border border-cyan-900/50 bg-cyan-950/20 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    ÚLTIMA ATUALIZAÇÃO: <span className="text-cyan-300">{loading ? '...' : data?.lastUpdate}</span>
                </div>

            </div>
        </div>
    );
}

function StatItem({ value, label, loading, delay }: { value?: string, label: React.ReactNode, loading: boolean, delay: number }) {
    return (
        <div className="flex flex-col items-center group">
            <div className={`text-6xl md:text-7xl font-bold font-mono text-cyan-400 mb-3 transition-all duration-700 transform drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]
                 ${loading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
            `} style={{ transitionDelay: `${delay}ms` }}>
                {loading ? (
                    <div className="h-16 w-32 bg-slate-800 animate-pulse rounded-lg border border-slate-700"></div>
                ) : (
                    value
                )}
            </div>

            <div className={`text-sm md:text-base font-bold text-slate-500 group-hover:text-slate-300 text-center uppercase leading-tight tracking-wider transition-all duration-700 delay-300
                ${loading ? 'opacity-0' : 'opacity-100'}
            `}>
                {label}
            </div>
        </div>
    )
}
