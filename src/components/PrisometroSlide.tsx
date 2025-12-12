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

interface Props {
    lang?: 'pt' | 'en';
}

export function PrisometroSlide({ lang = 'pt' }: Props) {
    const [data, setData] = useState<PrisometroData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const t = (pt: string, en: string) => lang === 'pt' ? pt : en;

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

    if (error) return <div className="text-red-500 text-center">{t("Erro ao carregar dados do Prisômetro.", "Error loading Prisometer data.")}</div>;

    return (
        <div className="w-full h-full relative overflow-hidden flex flex-col items-center bg-slate-950 font-sans text-slate-200 p-2 md:p-6 select-none">
            {/* Background Sci-Fi Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none fixed-bg-pattern"
                style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-7xl text-center flex flex-col items-center flex-1 justify-between h-full py-2">

                <div className="flex flex-col items-center w-full">
                    <h2 className="text-[10vw] md:text-6xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                        {lang === 'pt' ? (
                            <>Prisô<span className="text-cyan-500">metro</span></>
                        ) : (
                            <>Priso<span className="text-cyan-500">meter</span></>
                        )}
                    </h2>

                    <p className="text-xs md:text-2xl text-slate-400 font-light max-w-4xl border-b border-slate-800 pb-2 md:pb-6 mb-2 md:mb-4 px-4 leading-tight">
                        {t("As câmeras do Smart Sampa ajudaram na captura de", "Smart Sampa cameras helped capture")}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-12 gap-y-4 md:gap-y-12 w-full flex-1 content-center">
                    <StatItem
                        value={data?.foragidos}
                        label={lang === 'pt' ? <span>FORAGIDOS<br />CAPTURADOS</span> : <span>FUGITIVES<br />CAPTURED</span>}
                        loading={loading}
                        delay={0}
                    />
                    <StatItem
                        value={data?.presosAno}
                        label={lang === 'pt' ? <span>PRESOS NO<br />ANO DE 2025</span> : <span>ARRESTED IN<br />YEAR 2025</span>}
                        loading={loading}
                        delay={100}
                    />
                    <StatItem
                        value={data?.presosMes}
                        label={lang === 'pt' ? <span>PRESOS EM<br />DEZEMBRO/25</span> : <span>ARRESTED IN<br />DECEMBER/25</span>}
                        loading={loading}
                        delay={200}
                    />
                    <StatItem
                        value={data?.desaparecidos}
                        label={lang === 'pt' ? <span>DESAPARECIDOS<br />LOCALIZADOS</span> : <span>MISSING<br />FOUND</span>}
                        loading={loading}
                        delay={300}
                    />
                    <StatItem
                        value={data?.flagrantes}
                        label={lang === 'pt' ? <span>TOTAL DE PRESOS<br />EM FLAGRANTE</span> : <span>TOTAL FLAGRANT<br />ARRESTS</span>}
                        loading={loading}
                        delay={400}
                    />
                    <StatItem
                        value={data?.veiculos}
                        label={lang === 'pt' ? <span>OCORRÊNCIA<br />COM VEÍCULOS</span> : <span>VEHICLE<br />INCIDENTS</span>}
                        loading={loading}
                        delay={500}
                    />
                </div>

                <div className="mt-2 flex items-center gap-2 text-[10px] md:text-xs font-mono text-cyan-500/70 border border-cyan-900/50 bg-cyan-950/20 px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    {t("ÚLTIMA ATUALIZAÇÃO:", "LAST UPDATE:")} <span className="text-cyan-300">{loading ? '...' : data?.lastUpdate}</span>
                </div>

            </div>
        </div>
    );
}

function StatItem({ value, label, loading, delay }: { value?: string, label: React.ReactNode, loading: boolean, delay: number }) {
    return (
        <div className="flex flex-col items-center group justify-center h-full">
            <div className={`text-[2rem] md:text-7xl font-bold font-mono text-cyan-400 mb-0 md:mb-3 transition-all duration-700 transform drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]
                 ${loading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
            `} style={{ transitionDelay: `${delay}ms` }}>
                {loading ? (
                    <div className="h-8 w-16 md:h-16 md:w-32 bg-slate-800 animate-pulse rounded-lg border border-slate-700"></div>
                ) : (
                    value
                )}
            </div>

            <div className={`text-[0.5rem] md:text-sm font-bold text-slate-500 group-hover:text-slate-300 text-center uppercase leading-tight tracking-wider transition-all duration-700 delay-300
                ${loading ? 'opacity-0' : 'opacity-100'}
            `}>
                {label}
            </div>
        </div>
    )
}
