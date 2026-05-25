'use client';
import styles from './SEOPanel.module.css';

const adsKeywords = [
  { kw: 'médico para emagrecer curitiba', intent: 'Compra', vol: 'Alto', cpc: '—' },
  { kw: 'emagrecimento com acompanhamento médico', intent: 'Compra', vol: 'Médio', cpc: '—' },
  { kw: 'endocrinologista emagrecimento curitiba', intent: 'Compra', vol: 'Médio', cpc: '—' },
  { kw: 'consulta emagrecimento curitiba', intent: 'Compra', vol: 'Médio', cpc: '—' },
];

const seoLocal = [
  { kw: 'médico emagrecimento curitiba', pos: 'A verificar', meta: 'Top 3', acao: 'Otimizar GMB' },
  { kw: 'emagrecer com médico perto de mim', pos: 'A verificar', meta: 'Top 5', acao: 'Posts GMB + avaliações' },
];

const blogKw = [
  { kw: 'como emagrecer com saúde', vol: 'Alto', diff: 'Média', status: 'Planejado' },
  { kw: 'emagrecimento baseado em evidência', vol: 'Médio', diff: 'Baixa', status: 'Planejado' },
  { kw: 'por que dietas não funcionam', vol: 'Alto', diff: 'Média', status: 'Planejado' },
  { kw: 'acompanhamento médico para emagrecer', vol: 'Médio', diff: 'Baixa', status: 'Planejado' },
];

const negative = [
  { kw: 'grátis', motivo: 'Não oferece consulta gratuita' },
  { kw: 'remédio para emagrecer', motivo: 'Foco não é venda de medicamento' },
  { kw: 'emagrecer rápido', motivo: 'Contra o posicionamento científico' },
];

export default function SEOPanel() {
  return (
    <section className={styles.section} id="seo">
      <div className="container">
        <div className={styles.header}>
          <p className="section-eyebrow">Visibilidade Digital</p>
          <h2 className="section-title">SEO & Google Ads</h2>
          <p className="section-subtitle">Palavras-chave de intenção de compra, SEO local e blog orgânico</p>
        </div>

        <div className={styles.topGrid}>
          {/* Google Ads */}
          <div className={`glass-card ${styles.adsCard}`}>
            <h3 className={styles.cardTitle}>
              <span className={styles.googleIcon}>G</span>
              Google Ads — Intenção de Compra
            </h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Palavra-chave</th>
                  <th>Intenção</th>
                  <th>Volume</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {adsKeywords.map((r, i) => (
                  <tr key={i}>
                    <td className={styles.kwCell}>"{r.kw}"</td>
                    <td>
                      <span className={styles.intentBadge}>{r.intent}</span>
                    </td>
                    <td className={styles.vol}>{r.vol}</td>
                    <td>
                      <span className={styles.planBadge}>Planejada</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Negative */}
          <div className={`glass-card ${styles.negCard}`}>
            <h3 className={styles.cardTitle}>🚫 Palavras-chave Negativas</h3>
            <div className={styles.negList}>
              {negative.map((n, i) => (
                <div key={i} className={styles.negRow}>
                  <div className={styles.negKw}>"{n.kw}"</div>
                  <div className={styles.negMotivo}>{n.motivo}</div>
                </div>
              ))}
            </div>
            <div className={styles.negNote}>
              Filtra buscas incompatíveis com o posicionamento científico do Dr. Márcio
            </div>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          {/* SEO Local */}
          <div className={`glass-card ${styles.localCard}`}>
            <h3 className={styles.cardTitle}>📍 SEO Local — Google Meu Negócio</h3>
            <div className={styles.localList}>
              {seoLocal.map((r, i) => (
                <div key={i} className={styles.localRow}>
                  <div className={styles.localKw}>"{r.kw}"</div>
                  <div className={styles.localMeta}>
                    <span className={styles.localPos}>Posição: {r.pos}</span>
                    <span className={styles.localMetaBadge} style={{ color: 'var(--green)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.1)' }}>
                      Meta: {r.meta}
                    </span>
                  </div>
                  <div className={styles.localAcao}>{r.acao}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog SEO */}
          <div className={`glass-card ${styles.blogCard}`}>
            <h3 className={styles.cardTitle}>✍️ Blog — SEO Orgânico</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Volume</th>
                  <th>Dificuldade</th>
                  <th>Post</th>
                </tr>
              </thead>
              <tbody>
                {blogKw.map((r, i) => (
                  <tr key={i}>
                    <td className={styles.kwCell}>"{r.kw}"</td>
                    <td><span className={styles.vol}>{r.vol}</span></td>
                    <td><span className={styles.diff}>{r.diff}</span></td>
                    <td><span className={styles.planBadge}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy note */}
        <div className={styles.strategyNote}>
          <span className={styles.strategyIcon}>🎯</span>
          <div>
            <div className={styles.strategyTitle}>Estratégia SEO</div>
            <div className={styles.strategyText}>
              Foco em keywords de intenção de compra local (Curitiba) para Google Ads + keywords informacionais de alto volume para atrair tráfego orgânico via blog. Posicionamento diferenciado: <strong>"baseado em evidência"</strong> como filtro de qualidade e autoridade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
