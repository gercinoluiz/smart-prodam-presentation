import blackImg from '../assets/black.jpg';
import camerasImg from '../assets/cameras.png';
import transmissaoImg from '../assets/trasnmissao.png';
import vmsImg from '../assets/vms.png';
import analiticsImg from '../assets/analitics.png';
import omsImg from '../assets/oms.png';
import despachoImg from '../assets/despacho.png';
import acaoImg from '../assets/acao.png';
import retornoOmsImg from '../assets/retorno_oms.png';
import armazenamentoImg from '../assets/armazenamento.png';
import lgpdImg from '../assets/lgpd.png';

export interface ContentLocalized {
    title: string;
    subtitle: string;
    content: string; // HTML string
    simText: string;
    simStatus: string;
}

export interface StepData {
    id: number;
    icon: string;
    image: string;
    layout?: 'standard' | 'full' | 'intro' | 'prisometro' | 'thankyou';
    pt: ContentLocalized;
    en: ContentLocalized;
}

export const stepsData: StepData[] = [
    {
        id: 0,
        icon: "info",
        image: camerasImg,
        layout: "intro",
        pt: {
            title: "SMART SAMPA",
            subtitle: "Introdução ao Projeto",
            content: "Intro Slide",
            simText: "",
            simStatus: ""
        },
        en: {
            title: "SMART SAMPA",
            subtitle: "Project Introduction",
            content: "Intro Slide",
            simText: "",
            simStatus: ""
        }
    },
    {
        id: 1,
        icon: "analytics",
        image: camerasImg,
        layout: "prisometro",
        pt: {
            title: "Prisômetro",
            subtitle: "Estatísticas em Tempo Real",
            content: "Prisômetro Stats",
            simText: "Conectando ao banco de dados da SSP... Sincronizado.",
            simStatus: "ONLINE"
        },
        en: {
            title: "Prisometer",
            subtitle: "Real-time Statistics",
            content: "Prisometer Stats",
            simText: "Connecting to SSP database... Synchronized.",
            simStatus: "ONLINE"
        }
    },
    {
        id: 2,
        icon: "account_tree",
        image: blackImg,
        layout: "full",
        pt: {
            title: "Arquitetura Geral",
            subtitle: "Visão Macro Integrada",
            content: "",
            simText: "",
            simStatus: ""
        },
        en: {
            title: "General Architecture",
            subtitle: "Integrated Macro View",
            content: "",
            simText: "",
            simStatus: ""
        }
    },
    {
        id: 3,
        icon: "videocam",
        image: camerasImg,
        pt: {
            title: "Captura na Ponta",
            subtitle: "Câmeras e Sensores",
            content: `
                <p class="mb-4">O fluxo inicia nos dispositivos físicos (Câmeras, Sensores, etc). Câmeras modernas operam com <strong>Edge AI</strong>, processando dados localmente para reduzir o uso de banda, ou câmeras legadas enviam o vídeo para os servidores, para serem interpretados por sistemas analíticos.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Detecção:</strong> Rostos, placas (LPR) e contagem de fluxo.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Metadados:</strong> Apenas o 'hash' do rosto e o texto da placa são transmitidos, garantindo eficiência.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Trigger:</strong> Gravação contínua (24/7) ou acionada por eventos suspeitos.</span></li>
                </ul>
            `,
            simText: "Câmera CAM-SP-402 (Av. Paulista) detectou placa de interesse: EAY-9821.",
            simStatus: "ALVO DETECTADO"
        },
        en: {
            title: "Capture at the Edge",
            subtitle: "Cameras and Sensors",
            content: `
                <p class="mb-4">The flow starts at physical devices (Cameras, Sensors, etc.). Modern cameras operate with <strong>Edge AI</strong>, processing data locally to reduce bandwidth usage, while legacy cameras send video to servers for interpretation by analytic systems.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Detection:</strong> Faces, license plates (LPR), and flow counting.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Metadata:</strong> Only the face 'hash' and license plate text are transmitted, ensuring efficiency.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Trigger:</strong> Continuous recording (24/7) or triggered by suspicious events.</span></li>
                </ul>
            `,
            simText: "Camera CAM-SP-402 (Av. Paulista) detected license plate of interest: EAY-9821.",
            simStatus: "TARGET DETECTED"
        }
    },
    {
        id: 4,
        icon: "cell_tower",
        image: transmissaoImg,
        pt: {
            title: "Transmissão",
            subtitle: "Rede Segura",
            content: `
                <p class="mb-4">Os dados trafegam por uma infraestrutura híbrida de alta velocidade.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Protocolos:</strong> Stream de vídeo via protocolos de comunicação modernos.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Meios:</strong> Fibra Óptica proprietária, Rádio Dedicado e Redes 5G (baixa latência).</span></li>
                </ul>
            `,
            simText: "Enviando pacote de alerta via rede 5G prioritária... Latência: 12ms.",
            simStatus: "TRANSMITINDO"
        },
        en: {
            title: "Transmission",
            subtitle: "Secure Network",
            content: `
                <p class="mb-4">Data travels through a high-speed hybrid infrastructure.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Protocols:</strong> Video stream via modern communication protocols.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Means:</strong> Proprietary Fiber Optics, Dedicated Radio, and 5G Networks (low latency).</span></li>
                </ul>
            `,
            simText: "Sending alert packet via priority 5G network... Latency: 12ms.",
            simStatus: "TRANSMITTING"
        }
    },
    {
        id: 5,
        icon: "dns",
        image: vmsImg,
        pt: {
            title: "VMS (Video Management System)",
            subtitle: "Sistema de Gestão de Vídeo",
            content: `
                <p class="mb-4">O <strong>VMS</strong> centraliza o recebimento de milhares de streams simultâneos.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Organização:</strong> Indexação de vídeos por local, hora e câmera.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Gravação:</strong> Armazenamento cíclico conforme políticas de retenção.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Função:</strong> Disponibiliza o vídeo para operadores e sistemas de analytics.</span></li>
                </ul>
            `,
            simText: "Stream indexado. Clipe ID: #REC-9982-AX. Buffer de replay pronto.",
            simStatus: "GRAVADO"
        },
        en: {
            title: "VMS (Video Management System)",
            subtitle: "Video Management System",
            content: `
                <p class="mb-4">The <strong>VMS</strong> centralizes the receipt of thousands of simultaneous streams.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Organization:</strong> Video indexing by location, time, and camera.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Recording:</strong> Cyclic storage according to retention policies.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Function:</strong> Makes video available to operators and analytics systems.</span></li>
                </ul>
            `,
            simText: "Stream indexed. Clip ID: #REC-9982-AX. Replay buffer ready.",
            simStatus: "RECORDED"
        }
    },
    {
        id: 6,
        icon: "psychology",
        image: analiticsImg,
        pt: {
            title: "Analytics / IA",
            subtitle: "Cérebro Analítico",
            content: `
                <p class="mb-4">O motor de inteligência cruza os metadados recebidos com bancos de dados oficiais (BNMP - Banco Nacional de Mandados de Prisão, Detran, etc).</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Bases:</strong> Veículos roubados (Córtex), procurados pela justiça, pessoas desaparecidas.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Algoritmos:</strong> Reconhecimento Facial, Comportamento Anômalo, Objeto Abandonado.</span></li>
                </ul>
            `,
            simText: "Cruzamento DB Nacional: POSITIVO. Veículo com queixa de furto ativa.",
            simStatus: "MATCH POSITIVO"
        },
        en: {
            title: "Analytics / AI",
            subtitle: "Analytic Brain",
            content: `
                <p class="mb-4">The intelligence engine cross-references received metadata with official databases (National Arrest Warrant Bank, DMV, etc.).</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Databases:</strong> Stolen vehicles (Cortex), wanted persons, missing persons.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Algorithms:</strong> Facial Recognition, Anomalous Behavior, Abandoned Object.</span></li>
                </ul>
            `,
            simText: "National DB Cross-check: POSITIVE. Vehicle with active theft report.",
            simStatus: "POSITIVE MATCH"
        }
    },
    {
        id: 7,
        icon: "hub",
        image: omsImg,
        pt: {
            title: "OMS",
            subtitle: "Orquestrador",
            content: `
                <p class="mb-4">O <strong>Orchestration & Monitoring System</strong> transforma dados técnicos em ocorrências operacionais.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Triagem:</strong> Define prioridade (Baixa, Média, Crítica).</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Enriquecimento:</strong> Adiciona mapa, foto do suspeito e ficha criminal ao alerta.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Roteamento:</strong> Envia automaticamente para a central de despacho correta (PM, GCM, SAMU).</span></li>
                </ul>
            `,
            simText: "Gerando Ocorrência #9021. Prioridade: ALTA. Risco: Médio. Destino: PM.",
            simStatus: "ALERTA CRIADO"
        },
        en: {
            title: "OMS",
            subtitle: "Orchestrator",
            content: `
                <p class="mb-4">The <strong>Orchestration & Monitoring System</strong> transforms technical data into operational incidents.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Triage:</strong> Defines priority (Low, Medium, Critical).</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Enrichment:</strong> Adds map, suspect photo, and criminal record to the alert.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Routing:</strong> Automatically sends to the correct dispatch center (Police, GCM, EMS).</span></li>
                </ul>
            `,
            simText: "Generating Incident #9021. Priority: HIGH. Risk: Medium. Destination: Police.",
            simStatus: "ALERT CREATED"
        }
    },
    {
        id: 8,
        icon: "local_police",
        image: despachoImg,
        pt: {
            title: "Despacho",
            subtitle: "Envio para a Ponta",
            content: `
                <p class="mb-4">O sistema localiza os recursos mais próximos e envia a missão.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Geolocalização:</strong> Identifica viaturas no raio de ação.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Terminal Embarcado:</strong> O policial recebe foto, vídeo, placa e mapa no tablet da viatura.</span></li>
                </ul>
            `,
            simText: "Viatura M-302 selecionada (1.2km). Tempo estimado: 3 min. Enviando dados...",
            simStatus: "DESPACHADO"
        },
        en: {
            title: "Dispatch",
            subtitle: "Send to the Edge",
            content: `
                <p class="mb-4">The system locates the nearest resources and dispatches the mission.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Geolocation:</strong> Identifies patrol cars within the radius.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Embedded Terminal:</strong> Officer receives photo, video, license plate, and map on the vehicle's tablet.</span></li>
                </ul>
            `,
            simText: "Patrol Car M-302 selected (1.2km). Est. Time: 3 min. Sending data...",
            simStatus: "DISPATCHED"
        }
    },
    {
        id: 9,
        icon: "minor_crash",
        image: acaoImg,
        pt: {
            title: "Ação em Campo",
            subtitle: "Resposta Real",
            content: `
                <p class="mb-4">A equipe realiza a abordagem com inteligência prévia, aumentando a segurança.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Procedimento:</strong> Confirmação visual, abordagem e verificação documental.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Validação:</strong> Policial informa via app se foi 'Positivo Real' ou 'Falso Positivo'.</span></li>
                </ul>
            `,
            simText: "Viatura M-302 no local. Visualização confirmada. Iniciando abordagem.",
            simStatus: "EM ANDAMENTO"
        },
        en: {
            title: "Field Action",
            subtitle: "Real Response",
            content: `
                <p class="mb-4">The team conducts the approach with prior intelligence, increasing safety.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Procedure:</strong> Visual confirmation, approach, and document verification.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Validation:</strong> Officer reports via app if it was a 'True Positive' or 'False Positive'.</span></li>
                </ul>
            `,
            simText: "Patrol Car M-302 on site. Visual confirmation. Starting approach.",
            simStatus: "IN PROGRESS"
        }
    },
    {
        id: 10,
        icon: "sync",
        image: retornoOmsImg,
        pt: {
            title: "Retorno (Feedback)",
            subtitle: "Fechamento de Ciclo",
            content: `
                <p class="mb-4">As informações coletadas em campo retornam para alimentar o sistema.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Relatório:</strong> Status da ocorrência, prisões efetuadas, apreensões.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>BI:</strong> Atualização de mapas de calor criminal e métricas de eficiência.</span></li>
                </ul>
            `,
            simText: "Suspeito detido. Veículo recuperado. Ocorrência finalizada no tablet.",
            simStatus: "RESOLVIDO"
        },
        en: {
            title: "Return (Feedback)",
            subtitle: "Cycle Closing",
            content: `
                <p class="mb-4">Information collected in the field returns to feed the system.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Report:</strong> Incident status, arrests made, seizures.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>BI:</strong> Update of criminal heat maps and efficiency metrics.</span></li>
                </ul>
            `,
            simText: "Suspect detained. Vehicle recovered. Incident closed on tablet.",
            simStatus: "RESOLVED"
        }
    },
    {
        id: 11,
        icon: "folder_shared",
        image: armazenamentoImg,
        pt: {
            title: "Armazenamento",
            subtitle: "Evidência Digital",
            content: `
                <p class="mb-4">Preservação da cadeia de custódia das evidências digitais.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Retenção:</strong> 30 dias para vídeos gerais; retenção estendida para flagrantes/provas.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Integridade:</strong> Hashing dos arquivos para garantir que não foram alterados.</span></li>
                </ul>
            `,
            simText: "Pacote de evidências arquivado no Storage Seguro. Hash SHA-256 gerado.",
            simStatus: "ARQUIVADO"
        },
        en: {
            title: "Storage",
            subtitle: "Digital Evidence",
            content: `
                <p class="mb-4">Preservation of the chain of custody for digital evidence.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Retention:</strong> 30 days for general video; extended retention for evidence.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Integrity:</strong> File hashing to ensure they have not been altered.</span></li>
                </ul>
            `,
            simText: "Evidence package archived in Secure Storage. SHA-256 hash generated.",
            simStatus: "ARCHIVED"
        }
    },
    {
        id: 12,
        icon: "gavel",
        image: lgpdImg,
        pt: {
            title: "LGPD & Compliance",
            subtitle: "Segurança Jurídica",
            content: `
                <p class="mb-4">Todo o processo segue rigorosos padrões de privacidade e auditoria.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Auditoria:</strong> Log imutável de quem acessou, quando e por que.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Segurança:</strong> Criptografia ponta a ponta e controle de acesso baseado em função (RBAC).</span></li>
                </ul>
            `,
            simText: "Sessão encerrada. Logs de auditoria gravados. Sistema em stand-by.",
            simStatus: "SEGURO"
        },
        en: {
            title: "LGPD & Compliance",
            subtitle: "Legal Security",
            content: `
                <p class="mb-4">The entire process follows rigorous privacy and audit standards.</p>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Audit:</strong> Immutable log of who accessed, when, and why.</span></li>
                    <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Security:</strong> End-to-end encryption and Role-Based Access Control (RBAC).</span></li>
                </ul>
            `,
            simText: "Session ended. Audit logs recorded. System in stand-by.",
            simStatus: "SECURE"
        }
    },
    {
        id: 13,
        icon: "check_circle",
        image: blackImg,
        layout: "thankyou",
        pt: {
            title: "Encerramento",
            subtitle: "Obrigado",
            content: "Thank You Slide",
            simText: "",
            simStatus: ""
        },
        en: {
            title: "Closing",
            subtitle: "Thank You",
            content: "Thank You Slide",
            simText: "",
            simStatus: ""
        }
    }
];
