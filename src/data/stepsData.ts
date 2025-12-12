export interface StepData {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
    image: string;
    content: string; // HTML string
    simText: string;
    simStatus: string;
    layout?: 'standard' | 'full' | 'intro' | 'prisometro';
}

export const stepsData: StepData[] = [
    {
        id: 0,
        title: "SMART SAMPA",
        subtitle: "Introdução ao Projeto",
        icon: "info",
        image: "assets/black.jpg",
        content: "Intro Slide",
        simText: "",
        simStatus: "",
        layout: "intro"
    },
    {
        id: 1,
        title: "Prisômetro",
        subtitle: "Estatísticas em Tempo Real",
        icon: "analytics", // Changed from info to analytics
        image: "assets/black.jpg",
        content: "Prisômetro Stats",
        simText: "Conectando ao banco de dados da SSP... Sincronizado.",
        simStatus: "ONLINE",
        layout: "prisometro"
    },
    {
        id: 2,
        title: "Arquitetura Geral",
        subtitle: "Visão Macro Integrada",
        icon: "account_tree",
        image: "/assets/black.jpg",
        content: "",
        simText: "",
        simStatus: "",
        layout: "full"
    },
    {
        id: 3,
        title: "Captura na Ponta",
        subtitle: "Câmeras e Sensores",
        icon: "videocam",
        image: "/assets/cameras.png",
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
    {
        id: 4,
        title: "Transmissão",
        subtitle: "Rede Segura",
        icon: "cell_tower",
        image: "/assets/trasnmissao.png",
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
    {
        id: 5,
        title: "VMS (Video Management System)",
        subtitle: "Video Management System",
        icon: "dns",
        image: "/assets/vms.png",
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
    {
        id: 6,
        title: "Analytics / IA",
        subtitle: "Cérebro Analítico",
        icon: "psychology",
        image: "/assets/analitics.png",
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
    {
        id: 7,
        title: "OMS",
        subtitle: "Orquestrador",
        icon: "hub",
        image: "/assets/oms.png",
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
    {
        id: 8,
        title: "Despacho",
        subtitle: "Envio para a Ponta",
        icon: "local_police",
        image: "/assets/despacho.png",
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
    {
        id: 9,
        title: "Ação em Campo",
        subtitle: "Resposta Real",
        icon: "minor_crash",
        image: "/assets/acao.png",
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
    {
        id: 10,
        title: "Retorno (Feedback)",
        subtitle: "Fechamento de Ciclo",
        icon: "sync",
        image: "/assets/retorno_oms.png",
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
    {
        id: 11,
        title: "Armazenamento",
        subtitle: "Evidência Digital",
        icon: "folder_shared",
        image: "/assets/armazenamento.png",
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
    {
        id: 12,
        title: "LGPD & Compliance",
        subtitle: "Segurança Jurídica",
        icon: "gavel",
        image: "/assets/lgpd.png",
        content: `
            <p class="mb-4">Todo o processo segue rigorosos padrões de privacidade e auditoria.</p>
            <ul class="space-y-3 text-slate-300">
                <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Auditoria:</strong> Log imutável de quem acessou, quando e por que.</span></li>
                <li class="flex items-start gap-2"><span class="text-cyan-500 mt-1">•</span><span><strong>Segurança:</strong> Criptografia ponta a ponta e controle de acesso baseado em função (RBAC).</span></li>
            </ul>
        `,
        simText: "Sessão encerrada. Logs de auditoria gravados. Sistema em stand-by.",
        simStatus: "SEGURO"
    }
];
