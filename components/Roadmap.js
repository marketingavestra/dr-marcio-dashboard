'use client';
import styles from './Roadmap.module.css';

const phases = [
  {
    phase: '01',
    title: 'Setup & Identidade',
    period: 'Semana 1',
    color: 'var(--green)',
    progress: 50,
    items: [
      { done: true,  text: 'Briefing completo (CLIENTE.md)' },
      { done: true,  text: 'Estrutura de pastas do projeto (39 dirs)' },
      { done: false, text: 'Identidade visual — cor principal (pendente)' },
      { done: false, text: 'Google Meu Negócio verificado e otimizado' },
      { done: false, text: 'Bio do Instagram otimizada' },
      { done: false, text: 'Facebook e LinkedIn verificados' },
    ],
  },
  {
    phase: '02',
    title: 'Segundo Cérebro',
    period: 'Semana 1–2',
    color: 'var(--teal)',
    progress: 70,
    items: [
      { done: true,  text: '14 tópicos científicos estruturados' },
      { done: true,  text: '5 pilares metabólicos com evidências' },
      { done: true,  text: '4 novas fronteiras (Pesquisa 2026)' },
      { done: true,  text: 'Compliance CFM documentado (CHECKLIST-CFM)' },
      { done: true,  text: 'Guia rápido de uso criado' },
      { done: true,  text: 'Plano de atualização contínua' },
      { done: false, text: 'Primeiros 5 artigos científicos resumidos' },
      { done: false, text: 'Banco de 20+ ideias de conteúdo' },
    ],
  },
  {
    phase: '03',
    title: 'Conteúdo & Produção',
    period: 'Semana 2–3',
    color: 'var(--blue)',
    progress: 0,
    items: [
      { done: false, text: 'Calendário editorial do mês definido' },
      { done: false, text: '5 primeiros carrosseis científicos' },
      { done: false, text: '2 blog posts SEO' },
      { done: false, text: 'Pilares de conteúdo validados com Dr. Márcio' },
      { done: false, text: 'Primeiro carrossel "Mito vs. Ciência" publicado' },
    ],
  },
  {
    phase: '04',
    title: 'Escala & Infoproduto',
    period: 'Semana 3–4',
    color: 'var(--amber)',
    progress: 0,
    items: [
      { done: false, text: 'Dashboard do cliente no ar' },
      { done: false, text: 'Primeira call de alinhamento documentada' },
      { done: false, text: 'Fluxo de produção de conteúdo rodando' },
      { done: false, text: 'Brainstorm do infoproduto documentado' },
      { done: false, text: 'Relatório do primeiro mês preparado' },
    ],
  },
];

export default function Roadmap() {
  return (
    <section className={styles.section} id="roadmap">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Progresso</p>
          <h2 className="section-title">Roadmap do Projeto</h2>
          <p className="section-subtitle">4 fases para construir autoridade digital e escalar o acompanhamento médico</p>
        </div>

        <div className={styles.phasesGrid}>
          {phases.map((p, i) => {
            const done = p.items.filter(it => it.done).length;
            const total = p.items.length;
            const pct = Math.round((done / total) * 100);

            return (
              <div key={i} className={`glass-card ${styles.phaseCard}`} style={{ '--phase-color': p.color }}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNum} style={{ background: p.color + '20', color: p.color }}>
                    {p.phase}
                  </div>
                  <div>
                    <div className={styles.phaseTitle}>{p.title}</div>
                    <div className={styles.phasePeriod} style={{ color: p.color }}>{p.period}</div>
                  </div>
                  <div className={styles.phasePct} style={{ color: p.color }}>{pct}%</div>
                </div>

                <div className={styles.phaseProgress}>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${pct}%`, background: p.color }}
                    />
                  </div>
                  <span className={styles.phaseCount}>{done}/{total} entregues</span>
                </div>

                <div className={styles.phaseItems}>
                  {p.items.map((item, j) => (
                    <div key={j} className={styles.phaseItem}>
                      <span
                        className={styles.phaseItemIcon}
                        style={item.done ? { color: p.color } : { color: 'var(--text-muted)' }}
                      >
                        {item.done ? '✓' : '○'}
                      </span>
                      <span
                        className={styles.phaseItemText}
                        style={item.done ? { color: 'var(--text-primary)' } : { color: 'var(--text-muted)' }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
