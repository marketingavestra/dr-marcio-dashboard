'use client';
import styles from './InstagramPanel.module.css';

const improvements = [
  { icon: '📣', title: 'CTAs e enquetes nos Stories', desc: 'Aumentar interação diária com caixinhas de pergunta e curtidas' },
  { icon: '📅', title: 'Calendário editorial consistente', desc: 'Mix técnico + humanizado — sem gaps na frequência' },
  { icon: '🎬', title: 'Qualidade visual dos Reels', desc: 'Legendas dinâmicas, capas atraentes, cortes mais ágeis' },
  { icon: '🔗', title: 'Otimizar link na bio', desc: 'Linktree com agendamento, materiais gratuitos e redes' },
  { icon: '🎙️', title: 'Lives e Q&A científicos', desc: 'Carrosseis didáticos e perguntas respondidas ao vivo' },
  { icon: '🤝', title: 'Colaborações médicas', desc: 'Parcerias com outros especialistas para ampliar alcance' },
];

const topContent = [
  { emoji: '🎬', format: 'Reels', tema: 'Exercício físico vs. medicamentos na depressão', color: 'var(--teal)' },
  { emoji: '📋', format: 'Posts', tema: 'Diretrizes ABESO — tratamento da obesidade', color: 'var(--blue)' },
  { emoji: '⚗️', format: 'Carrossel', tema: 'Desmistificação de mitos sobre emagrecimento', color: 'var(--purple)' },
];

// SVG Gauge component
function GaugeChart({ value, max, label }) {
  const pct = Math.min(value / max, 1);
  const r = 80;
  const cx = 110;
  const cy = 110;
  const circumference = Math.PI * r; // semicircle
  const offset = circumference * (1 - pct);

  return (
    <div className={styles.gaugeWrap}>
      <svg viewBox="0 0 220 130" className={styles.gaugeSvg}>
        {/* Background arc */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Value arc */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.5s ease' }}
        />
        {/* Benchmark marker at 1% (66.67% of 1.5%) */}
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#00C2CB" />
          </linearGradient>
        </defs>
        {/* Center text */}
        <text x={cx} y={cy - 10} textAnchor="middle" fill="#F1F5F9" fontSize="28" fontWeight="800" fontFamily="Montserrat, sans-serif">
          {value}%
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif">
          atual
        </text>
        {/* Labels */}
        <text x={cx - r + 4} y={cy + 20} textAnchor="middle" fill="#64748B" fontSize="10">0%</text>
        <text x={cx + r - 4} y={cy + 20} textAnchor="middle" fill="#64748B" fontSize="10">{max}%</text>
      </svg>
      <div className={styles.gaugeLabel}>{label}</div>
    </div>
  );
}

export default function InstagramPanel() {
  return (
    <section className={styles.section} id="instagram">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Diagnóstico</p>
          <h2 className="section-title">Instagram — Análise Atual</h2>
          <p className="section-subtitle">Dados coletados em Maio de 2026 · @drmarciorabello</p>
        </div>

        <div className={styles.mainGrid}>
          {/* Stats column */}
          <div className={styles.statsCol}>
            <div className={`glass-card ${styles.statsCard}`}>
              <h3 className={styles.cardTitle}>Métricas do Perfil</h3>
              <div className={styles.statsList}>
                {[
                  { label: 'Seguidores', value: '18.670', highlight: true },
                  { label: 'Seguindo', value: '3.270' },
                  { label: 'Publicações', value: '259' },
                  { label: 'Média de curtidas/post', value: '21,13' },
                  { label: 'Média de comentários/post', value: '4,06' },
                  { label: 'CRM', value: 'PR 27.529' },
                  { label: 'Atuação', value: '+10 anos' },
                ].map((s, i) => (
                  <div key={i} className={styles.statRow}>
                    <span className={styles.statLabel}>{s.label}</span>
                    <span className={styles.statValue} style={s.highlight ? { color: 'var(--teal)' } : {}}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gauge column */}
          <div className={styles.gaugeCol}>
            <div className={`glass-card ${styles.gaugeCard}`}>
              <h3 className={styles.cardTitle}>Taxa de Engajamento</h3>
              <GaugeChart value={0.13} max={1.5} label="Meta: 1,50% | Benchmark mínimo: 1%" />
              <div className={styles.engagBenchmarks}>
                <div className={styles.benchmark}>
                  <span className={styles.benchDot} style={{ background: '#F59E0B' }} />
                  <span>Atual: <strong>0,13%</strong></span>
                </div>
                <div className={styles.benchmark}>
                  <span className={styles.benchDot} style={{ background: '#3B82F6' }} />
                  <span>Mínimo benchmark: <strong>1%</strong></span>
                </div>
                <div className={styles.benchmark}>
                  <span className={styles.benchDot} style={{ background: '#10B981' }} />
                  <span>Meta 90 dias: <strong>0,80%</strong></span>
                </div>
                <div className={styles.benchmark}>
                  <span className={styles.benchDot} style={{ background: '#00C2CB' }} />
                  <span>Meta 6 meses: <strong>1,50%</strong></span>
                </div>
              </div>
              <div className={styles.gapBadge}>
                Gap atual: <strong>-0,87%</strong> até o mínimo do benchmark
              </div>
            </div>
          </div>

          {/* Top content column */}
          <div className={styles.topCol}>
            <div className={`glass-card ${styles.topCard}`}>
              <h3 className={styles.cardTitle}>🏆 Conteúdos com maior engajamento</h3>
              <div className={styles.topList}>
                {topContent.map((t, i) => (
                  <div key={i} className={styles.topItem} style={{ borderLeftColor: t.color }}>
                    <span className={styles.topEmoji}>{t.emoji}</span>
                    <div>
                      <div className={styles.topFormat} style={{ color: t.color }}>{t.format}</div>
                      <div className={styles.topTema}>{t.tema}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Improvements */}
        <div className={styles.improvSection}>
          <h3 className={styles.improvTitle}>🎯 Pontos de melhoria identificados</h3>
          <div className={styles.improvGrid}>
            {improvements.map((item, i) => (
              <div key={i} className={`glass-card ${styles.improvCard}`}>
                <div className={styles.improvIcon}>{item.icon}</div>
                <div className={styles.improvContent}>
                  <div className={styles.improvName}>{item.title}</div>
                  <div className={styles.improvDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
