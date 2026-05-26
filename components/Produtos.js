'use client';
import styles from './Produtos.module.css';

const products = [
  {
    icon: '🩺',
    name: 'Acompanhamento para Emagrecimento',
    category: 'Consulta Médica',
    desc: 'Consultas e acompanhamento médico personalizado baseado em evidências científicas. Para quem quer emagrecer com saúde e resultado sustentável.',
    price: 'R$ 520,00',
    status: 'Ativo',
    statusColor: 'var(--green)',
    features: [
      'Baseado em evidência científica',
      'Acompanhamento personalizado',
      'Sem promessas milagrosas',
      'Medicina metabólica integrativa',
    ],
    color: 'var(--teal)',
  },
  {
    icon: '📱',
    name: 'Infoproduto Digital',
    category: 'Curso / Programa',
    desc: 'Curso ou programa digital de emagrecimento baseado em ciência. Produto futuro com grande potencial de escala para além do consultório.',
    price: 'Em estruturação',
    status: 'Em Planejamento',
    statusColor: 'var(--amber)',
    features: [
      'Base científica do segundo cérebro',
      'Escala sem limite de consultório',
      'Audiência já em construção',
      'Lançamento previsto: 2026',
    ],
    color: 'var(--purple)',
  },
];

const seasonality = [
  { month: 'Jan', peak: true, label: 'Resoluções de ano novo', icon: '🎯' },
  { month: 'Fev', peak: false, label: '' },
  { month: 'Mar', peak: false, label: '' },
  { month: 'Abr', peak: true, label: 'Preparação para inverno', icon: '❄️' },
  { month: 'Mai', peak: true, label: 'Preparação para inverno', icon: '❄️' },
  { month: 'Jun', peak: false, label: '' },
  { month: 'Jul', peak: false, label: '' },
  { month: 'Ago', peak: false, label: '' },
  { month: 'Set', peak: true, label: 'Preparação para verão', icon: '☀️' },
  { month: 'Out', peak: true, label: 'Preparação para verão', icon: '☀️' },
  { month: 'Nov', peak: false, label: '' },
  { month: 'Dez', peak: false, label: '' },
];

export default function Produtos() {
  return (
    <section className={styles.section} id="produtos">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Serviços & Produtos</p>
          <h2 className="section-title">Portfólio do Dr. Márcio</h2>
          <p className="section-subtitle">Acompanhamento ativo hoje — infoproduto em estruturação para escala</p>
        </div>

        {/* Product cards */}
        <div className={styles.productsGrid}>
          {products.map((p, i) => (
            <div
              key={i}
              className={`glass-card ${styles.productCard}`}
              style={{ '--prod-color': p.color }}
            >
              <div className={styles.productTop}>
                <div className={styles.productIcon} style={{ background: p.color + '18' }}>{p.icon}</div>
                <div>
                  <div className={styles.productCat}>{p.category}</div>
                  <div className={styles.productName}>{p.name}</div>
                </div>
                <div
                  className={styles.productStatus}
                  style={{ color: p.statusColor, background: p.statusColor + '15', borderColor: p.statusColor + '40' }}
                >
                  {p.status}
                </div>
              </div>

              <p className={styles.productDesc}>{p.desc}</p>

              <div className={styles.productFeatures}>
                {p.features.map((f, j) => (
                  <div key={j} className={styles.feature}>
                    <span className={styles.featureCheck} style={{ color: p.color }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className={styles.productPrice}>
                <span className={styles.priceLabel}>Preço</span>
                <span className={styles.priceValue} style={{ color: p.color }}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonality */}
        <div className={`glass-card ${styles.seasonCard}`}>
          <h3 className={styles.cardTitle}>📅 Sazonalidade de Pico de Demanda</h3>
          <div className={styles.seasonGrid}>
            {seasonality.map((m, i) => (
              <div
                key={i}
                className={styles.seasonMonth}
                style={m.peak ? { borderColor: 'rgba(0,194,203,0.4)', background: 'rgba(0,194,203,0.08)' } : {}}
              >
                <div
                  className={styles.seasonBar}
                  style={{ height: m.peak ? '48px' : '16px', background: m.peak ? 'var(--teal)' : 'rgba(255,255,255,0.08)' }}
                />
                <div className={styles.seasonLabel} style={m.peak ? { color: 'var(--teal)' } : {}}>{m.month}</div>
                {m.peak && <div className={styles.seasonIcon}>{m.icon}</div>}
              </div>
            ))}
          </div>
          <div className={styles.seasonLegend}>
            <span className={styles.legendDot} style={{ background: 'var(--teal)' }} />
            <span>Meses de alta demanda: Jan · Abr-Mai · Set-Out</span>
          </div>
        </div>

        {/* Audience */}
        <div className={`glass-card ${styles.audienceCard}`}>
          <h3 className={styles.cardTitle}>👥 Público-Alvo</h3>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceItem}>
              <div className={styles.audIcon}>😰</div>
              <div className={styles.audTitle}>Dores</div>
              <ul className={styles.audList}>
                <li>Já tentaram dietas sem sucesso</li>
                <li>Desconfiam de soluções milagrosas</li>
                <li>Querem resultado sustentável</li>
              </ul>
            </div>
            <div className={styles.audienceItem}>
              <div className={styles.audIcon}>🌟</div>
              <div className={styles.audTitle}>Desejos</div>
              <ul className={styles.audList}>
                <li>Emagrecer com saúde de verdade</li>
                <li>Acompanhamento médico sério</li>
                <li>Entender o que funciona</li>
              </ul>
            </div>
            <div className={styles.audienceItem}>
              <div className={styles.audIcon}>📍</div>
              <div className={styles.audTitle}>Onde está</div>
              <ul className={styles.audList}>
                <li>Instagram e YouTube</li>
                <li>Google (buscando médico)</li>
                <li>Curitiba e região</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
