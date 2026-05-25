'use client';
import styles from './ConteudoPlanning.module.css';

const platforms = [
  { platform: 'Instagram', freq: '4–5x/semana', format: 'Carrossel + Reels', color: 'var(--teal)', icon: '📸' },
  { platform: 'Facebook', freq: '3x/semana', format: 'Post adaptado', color: 'var(--blue)', icon: '📘' },
  { platform: 'LinkedIn', freq: '1x/semana', format: 'Artigo curto', color: '#0077B5', icon: '💼' },
  { platform: 'Blog', freq: '2x/mês', format: 'Post SEO', color: 'var(--green)', icon: '✍️' },
  { platform: 'Google Meu Negócio', freq: '2x/semana', format: 'Post + foto', color: 'var(--amber)', icon: '📍' },
];

const pillars = [
  { name: 'Evidência Científica', pct: 40, color: 'var(--teal)', desc: 'Estudos, meta-análises, dados reais' },
  { name: 'Mitos vs. Fatos', pct: 25, color: 'var(--blue)', desc: 'Desmistificar crenças populares' },
  { name: 'Prática Clínica', pct: 20, color: 'var(--green)', desc: 'O que funciona no consultório' },
  { name: 'Autoridade', pct: 15, color: 'var(--amber)', desc: 'Bastidores, congressos, formação' },
];

const themes = [
  { day: 'Seg', tema: 'Estudo da semana', desc: 'Resumo de artigo científico' },
  { day: 'Ter', tema: 'Dica prática', desc: 'Baseada em evidência' },
  { day: 'Qua', tema: 'Mito vs. Fato', desc: 'Desmistificação' },
  { day: 'Qui', tema: 'Mecanismo', desc: 'Como o corpo funciona' },
  { day: 'Sex', tema: 'Bastidores', desc: 'Humanização do Dr. Márcio' },
];

const ideas = [
  'Por que dietas restritivas falham (meta-análise)',
  'GLP-1 e saciedade: o que a ciência diz',
  'Sono e emagrecimento: evidências',
  'Microbiota intestinal e peso corporal',
  'Exercício aeróbico vs. resistido para perda de gordura',
  'Efeito platô: por que acontece e como superar',
  'Jejum intermitente: o que os estudos realmente mostram',
];

export default function ConteudoPlanning() {
  return (
    <section className={styles.section} id="conteudo">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Planejamento</p>
          <h2 className="section-title">Calendário Editorial</h2>
          <p className="section-subtitle">Frequência acordada, pilares de conteúdo e banco de ideias</p>
        </div>

        <div className={styles.topGrid}>
          {/* Platforms */}
          <div className={`glass-card ${styles.platformCard}`}>
            <h3 className={styles.cardTitle}>📡 Frequência por Plataforma</h3>
            <div className={styles.platformList}>
              {platforms.map((p, i) => (
                <div key={i} className={styles.platformRow}>
                  <span className={styles.platformIcon}>{p.icon}</span>
                  <div className={styles.platformInfo}>
                    <div className={styles.platformName}>{p.platform}</div>
                    <div className={styles.platformFormat}>{p.format}</div>
                  </div>
                  <div className={styles.platformFreq} style={{ color: p.color, borderColor: p.color + '40', background: p.color + '12' }}>
                    {p.freq}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly themes */}
          <div className={`glass-card ${styles.weekCard}`}>
            <h3 className={styles.cardTitle}>📆 Temas Recorrentes</h3>
            <div className={styles.weekList}>
              {themes.map((t, i) => (
                <div key={i} className={styles.weekRow}>
                  <div className={styles.weekDay}>{t.day}</div>
                  <div className={styles.weekInfo}>
                    <div className={styles.weekTema}>{t.tema}</div>
                    <div className={styles.weekDesc}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className={`glass-card ${styles.pillarsCard}`}>
          <h3 className={styles.cardTitle}>🎯 Pilares de Conteúdo</h3>
          <div className={styles.pillarsList}>
            {pillars.map((p, i) => (
              <div key={i} className={styles.pillarRow}>
                <div className={styles.pillarLeft}>
                  <div className={styles.pillarName}>{p.name}</div>
                  <div className={styles.pillarDesc}>{p.desc}</div>
                </div>
                <div className={styles.pillarRight}>
                  <div className={styles.pillarBar}>
                    <div className="progress-track" style={{ width: '160px' }}>
                      <div
                        className="progress-fill"
                        style={{ width: `${p.pct}%`, background: p.color }}
                      />
                    </div>
                  </div>
                  <div className={styles.pillarPct} style={{ color: p.color }}>{p.pct}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideas bank */}
        <div className={`glass-card ${styles.ideasCard}`}>
          <h3 className={styles.cardTitle}>💡 Banco de Ideias — Primeiros Temas</h3>
          <div className={styles.ideasGrid}>
            {ideas.map((idea, i) => (
              <div key={i} className={styles.ideaItem}>
                <span className={styles.ideaNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.ideaText}>{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
