'use client';
import styles from './MetricsBar.module.css';

const metrics = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    value: '18.670',
    label: 'Seguidores',
    sub: 'Instagram',
    color: 'var(--teal)',
    colorDim: 'rgba(0,194,203,0.1)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    value: '259',
    label: 'Publicações',
    sub: 'Total no Instagram',
    color: 'var(--blue)',
    colorDim: 'rgba(59,130,246,0.1)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    value: '0,13%',
    label: 'Engajamento',
    sub: 'Meta: 1–3%',
    color: 'var(--amber)',
    colorDim: 'rgba(245,158,11,0.1)',
    badge: '⚠ abaixo do benchmark',
    badgeColor: 'var(--amber)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    value: 'Fase 1',
    label: 'Fase Atual',
    sub: 'Setup & Onboarding',
    color: 'var(--green)',
    colorDim: 'rgba(16,185,129,0.1)',
    badge: '🟢 Em andamento',
    badgeColor: 'var(--green)',
  },
];

export default function MetricsBar() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`glass-card ${styles.card}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={styles.iconWrap}
                style={{ background: m.colorDim, color: m.color }}
              >
                {m.icon}
              </div>
              <div className={styles.value} style={{ color: m.color }}>
                {m.value}
              </div>
              <div className={styles.label}>{m.label}</div>
              <div className={styles.sub}>{m.sub}</div>
              {m.badge && (
                <div
                  className={styles.badge}
                  style={{ color: m.badgeColor, borderColor: m.badgeColor + '40', background: m.badgeColor + '12' }}
                >
                  {m.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
