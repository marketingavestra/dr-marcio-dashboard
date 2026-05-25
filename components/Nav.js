'use client';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const links = [
  { href: '#instagram', label: 'Instagram' },
  { href: '#cerebro', label: 'Segundo Cérebro' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#conteudo', label: 'Conteúdo' },
  { href: '#projecao', label: 'Projeção' },
  { href: '#seo', label: 'SEO' },
  { href: '#produtos', label: 'Produtos' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandDot} />
          <span className={styles.brandName}>Avestra</span>
          <span className={styles.brandSep}>×</span>
          <span className={styles.brandClient}>Dr. Márcio</span>
        </div>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
