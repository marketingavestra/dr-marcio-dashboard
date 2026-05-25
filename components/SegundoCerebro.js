'use client';
import styles from './SegundoCerebro.module.css';

const brainStats = [
  { value: '14', label: 'Tópicos Científicos', color: 'var(--teal)' },
  { value: '5', label: 'Pilares Metabólicos', color: 'var(--blue)' },
  { value: '4', label: 'Novas Fronteiras 2026', color: 'var(--purple)' },
  { value: '6', label: 'Conceitos-Chave', color: 'var(--green)' },
  { value: '2', label: 'Hubs Metabólicos', color: 'var(--amber)' },
  { value: '0→∞', label: 'Artigos no banco', color: 'var(--teal)', sub: 'a alimentar' },
];

const pillars = [
  {
    emoji: '🌙',
    title: 'Sono e Metabolismo',
    stat: '-55% gordura perdida com sono ruim',
    detail: 'Privação de sono ativa resistência à insulina, aumenta grelina e suprime leptina — criando o ambiente hormonal perfeito para o ganho de peso.',
    color: 'var(--blue)',
  },
  {
    emoji: '🧠',
    title: 'Estresse e Gordura Visceral',
    stat: '70% comem mais sob estresse',
    detail: 'Eixo HPA cronicamente ativado eleva cortisol → redistribuição de gordura visceral, compulsão alimentar, resistência à insulina.',
    color: 'var(--purple)',
  },
  {
    emoji: '🎗️',
    title: 'Obesidade e Câncer',
    stat: '13 tipos de câncer ligados ao peso',
    detail: 'Vias IGF-1/mTOR, aromatase e inflamação crônica conectam adiposidade excessiva ao risco de câncer (WCRF, ASCO).',
    color: 'var(--red)',
  },
  {
    emoji: '❤️',
    title: 'Hipertensão e Peso',
    stat: '-1kg = -1,2 mmHg de pressão',
    detail: 'Relação dose-resposta documentada pelo estudo DiRECT. Métrica fisiológica defensável e poderosa para conteúdo de antes/depois.',
    color: 'var(--teal)',
  },
  {
    emoji: '💉',
    title: 'Diabete T2 e Remissão',
    stat: '1% de peso perdido = 2% mais chance de remissão',
    detail: 'Meta-regressão 2025: dose-resposta clara entre perda de peso e remissão do DM2. DiRECT, DPP 10 anos, ADA Standards.',
    color: 'var(--green)',
  },
];

const frontiers = [
  {
    emoji: '🦵',
    title: 'Lipedema',
    badge: 'Pesquisa 2026',
    stat: 'Resistente a dieta: perfil M2, não M1',
    desc: 'Fisiopatologia distinta — macrófagos M2, aromatase local, resistência a dietas convencionais. Abordagem clínica diferente.',
  },
  {
    emoji: '💊',
    title: 'Farmacologia Nova Geração',
    badge: 'Pesquisa 2026',
    stat: 'Retatrutide: -28,7% peso | Bimagrumabe: 92% gordura',
    desc: 'Triagonistas, bimagrumabe (ActRIIA/B), semaglutida vs tirzepatida — fronteira terapêutica para 2026.',
  },
  {
    emoji: '💪',
    title: 'Sarcopenia e Massa Magra',
    badge: 'Pesquisa 2026',
    stat: 'GLP-1 perde 25-40% de músculo',
    desc: '1 noite sem sono = -18% síntese proteica. "Muscle is Medicine." DXA como ferramenta de acompanhamento.',
  },
  {
    emoji: '🔥',
    title: 'Termogênese Adaptativa',
    badge: 'Pesquisa 2026',
    stat: 'Platô: -100 a 500 kcal/dia ocultas',
    desc: 'DIO3 no músculo, NEAT, diet breaks — explicação científica do platô de emagrecimento. Conteúdo de alto engajamento.',
  },
];

const hubs = [
  {
    title: 'Hub Sono → Estresse → Diabete → Hipertensão',
    type: 'Círculo Vicioso',
    nodes: ['Sono curto', 'Cortisol elevado', 'Glicemia desregulada', 'Pressão alta'],
    color: 'var(--blue)',
    insight: 'Tratar um pilar melhora todos — argumento central para acompanhamento médico integrado.',
  },
  {
    title: 'Hub Estresse → Adiposidade → Câncer',
    type: 'Cascata Causal',
    nodes: ['Cortisol crônico', 'Gordura visceral', 'IGF-1 / aromatase', 'Proliferação celular'],
    color: 'var(--purple)',
    insight: 'Estresse não é só psicológico — é fisiológico e carcinogênico quando crônico.',
  },
];

export default function SegundoCerebro() {
  return (
    <section className={styles.section} id="cerebro">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Segundo Cérebro Científico</p>
          <h2 className="section-title">Base de conhecimento para conteúdo infinito</h2>
          <p className="section-subtitle">Estrutura Zettelkasten + PARA + CODE aplicada à medicina metabólica — compliance CFM documentado</p>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {brainStats.map((s, i) => (
            <div key={i} className={`glass-card ${styles.statCard}`}>
              <div className={styles.statValue} style={{ color: s.color }}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
              {s.sub && <div className={styles.statSub}>{s.sub}</div>}
            </div>
          ))}
        </div>

        {/* 5 Pillars */}
        <div className={styles.pillarsSection}>
          <h3 className={styles.subTitle}>Os 5 Pilares do Emagrecimento Metabólico</h3>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`glass-card ${styles.pillarCard}`}
                style={{ '--pillar-color': p.color }}
              >
                <div className={styles.pillarEmoji}>{p.emoji}</div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarStat} style={{ color: p.color }}>{p.stat}</div>
                <div className={styles.pillarDetail}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Frontiers */}
        <div className={styles.frontiersSection}>
          <h3 className={styles.subTitle}>Novas Fronteiras — Pesquisa 2026</h3>
          <div className={styles.frontiersGrid}>
            {frontiers.map((f, i) => (
              <div key={i} className={`glass-card ${styles.frontierCard}`}>
                <div className={styles.frontierTop}>
                  <span className={styles.frontierEmoji}>{f.emoji}</span>
                  <span className={styles.frontierBadge}>{f.badge}</span>
                </div>
                <div className={styles.frontierTitle}>{f.title}</div>
                <div className={styles.frontierStat}>{f.stat}</div>
                <div className={styles.frontierDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hubs */}
        <div className={styles.hubsSection}>
          <h3 className={styles.subTitle}>Hubs Metabólicos Transversais</h3>
          <div className={styles.hubsGrid}>
            {hubs.map((h, i) => (
              <div key={i} className={`glass-card ${styles.hubCard}`}>
                <div className={styles.hubHeader}>
                  <div>
                    <div className={styles.hubType} style={{ color: h.color }}>{h.type}</div>
                    <div className={styles.hubTitle}>{h.title}</div>
                  </div>
                </div>
                <div className={styles.hubFlow}>
                  {h.nodes.map((n, j) => (
                    <span key={j} className={styles.hubFlowItem}>
                      <span className={styles.hubNode} style={{ borderColor: h.color, color: h.color }}>{n}</span>
                      {j < h.nodes.length - 1 && <span className={styles.hubArrow} style={{ color: h.color }}>→</span>}
                    </span>
                  ))}
                </div>
                <div className={styles.hubInsight}>
                  <span className={styles.hubInsightIcon}>💡</span>
                  {h.insight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
