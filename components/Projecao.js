'use client';
import styles from './Projecao.module.css';

const scenarios = [
  {
    label: 'Agora',
    period: 'Maio 2026',
    engaj: '0,13%',
    curtidas: '~21',
    seg: '18.670',
    color: 'var(--amber)',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.3)',
    note: 'Abaixo do benchmark',
  },
  {
    label: 'Meta 90 dias',
    period: 'Agosto 2026',
    engaj: '0,80%',
    curtidas: '~150',
    seg: '20.000+',
    color: 'var(--blue)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.3)',
    note: 'Conteúdo rodando',
  },
  {
    label: 'Meta 6 meses',
    period: 'Novembro 2026',
    engaj: '1,50%',
    curtidas: '~280',
    seg: '25.000+',
    color: 'var(--teal)',
    bg: 'rgba(0,194,203,0.08)',
    border: 'rgba(0,194,203,0.3)',
    note: 'Benchmark atingido',
  },
  {
    label: 'Benchmark setor',
    period: 'Referência',
    engaj: '1–3%',
    curtidas: '~300+',
    seg: '—',
    color: 'var(--green)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.3)',
    note: 'Médicos com conteúdo',
  },
];

const timeline = [
  {
    period: 'Sem. 1–2',
    title: 'Setup + Segundo Cérebro',
    desc: 'Estrutura completa, 14 tópicos, compliance CFM, guia operacional',
    color: 'var(--green)',
    done: true,
  },
  {
    period: 'Sem. 2–3',
    title: 'Primeiros Conteúdos',
    desc: '5 carrosseis científicos, 2 posts de blog SEO, calendário editorial ativo',
    color: 'var(--teal)',
    done: false,
  },
  {
    period: 'Sem. 3–4',
    title: 'Calendário Rodando',
    desc: 'Fluxo de produção estabelecido, primeira call documentada, relatório do mês',
    color: 'var(--blue)',
    done: false,
  },
  {
    period: 'Mês 2–3',
    title: 'Escala do Engajamento',
    desc: 'Google Ads iniciado, SEO local ativando, crescimento orgânico mensurável',
    color: 'var(--purple)',
    done: false,
  },
  {
    period: 'Mês 4–6',
    title: 'Infoproduto em Estruturação',
    desc: 'Audiência aquecida, brainstorm validado, primeiro produto digital em desenho',
    color: 'var(--amber)',
    done: false,
  },
];

export default function Projecao() {
  return (
    <section className={styles.section} id="projecao">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Projeção</p>
          <h2 className="section-title">Crescimento & Linha do Tempo</h2>
          <p className="section-subtitle">Cenários de engajamento e marcos do projeto</p>
        </div>

        {/* Scenarios */}
        <div className={styles.scenarios}>
          {scenarios.map((s, i) => (
            <div
              key={i}
              className={styles.scenarioCard}
              style={{ background: s.bg, borderColor: s.border }}
            >
              <div className={styles.scenarioLabel} style={{ color: s.color }}>{s.label}</div>
              <div className={styles.scenarioPeriod}>{s.period}</div>
              <div className={styles.scenarioEngaj} style={{ color: s.color }}>{s.engaj}</div>
              <div className={styles.scenarioSub}>engajamento</div>
              <div className={styles.scenarioDivider} />
              <div className={styles.scenarioRow}>
                <span className={styles.scenarioMeta}>Curtidas/post</span>
                <span className={styles.scenarioVal} style={{ color: s.color }}>{s.curtidas}</span>
              </div>
              <div className={styles.scenarioRow}>
                <span className={styles.scenarioMeta}>Seguidores</span>
                <span className={styles.scenarioVal} style={{ color: s.color }}>{s.seg}</span>
              </div>
              <div className={styles.scenarioNote}>{s.note}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={styles.timelineSection}>
          <h3 className={styles.subTitle}>Linha do Tempo do Projeto</h3>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div
                    className={styles.timelineDot}
                    style={{
                      background: t.done ? t.color : 'var(--bg-card)',
                      borderColor: t.color,
                      boxShadow: t.done ? `0 0 12px ${t.color}` : 'none',
                    }}
                  />
                  {i < timeline.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelinePeriod} style={{ color: t.color }}>{t.period}</div>
                  <div className={styles.timelineTitle}>{t.title}</div>
                  <div className={styles.timelineDesc}>{t.desc}</div>
                  {t.done && (
                    <span className={styles.timelineDone} style={{ color: t.color, background: t.color + '15', borderColor: t.color + '40' }}>
                      ✓ Concluído
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
