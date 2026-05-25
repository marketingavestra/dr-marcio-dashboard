'use client';
import styles from './Footer.module.css';

export default function Footer() {
  const year = 2026;
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoDot} />
              Avestra
            </div>
            <p className={styles.tagline}>Automação Empresarial & Marketing Digital</p>
            <p className={styles.cnpj}>CNPJ: 66.309.977/0001-01</p>
          </div>

          <div className={styles.contacts}>
            <div className={styles.contactGroup}>
              <div className={styles.contactLabel}>Dr. Márcio Rabello</div>
              <a href="https://www.instagram.com/drmarciorabello/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                📸 @drmarciorabello
              </a>
              <a href="https://drmarciorabello.com/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                🌐 drmarciorabello.com
              </a>
              <a href="https://wa.me/5541997766601" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                💬 (41) 99776-6601
              </a>
            </div>
            <div className={styles.contactGroup}>
              <div className={styles.contactLabel}>Avestra</div>
              <a href="mailto:agencialobuzlancamentos@gmail.com" className={styles.contactLink}>
                ✉️ agencialobuzlancamentos@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaBadge}>
              <span className={styles.metaDot} />
              Dashboard gerado em Maio de {year}
            </div>
            <div className={styles.metaNote}>
              Este painel é confidencial e destinado exclusivamente ao Dr. Márcio Rabello.
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomText}>
            © {year} Avestra. Dashboard gerado via Automação Empresarial.
          </div>
          <div className={styles.bottomRight}>
            Documento confidencial — uso exclusivo do cliente
          </div>
        </div>
      </div>
    </footer>
  );
}
