import Nav from '../components/Nav';
import Hero from '../components/Hero';
import MetricsBar from '../components/MetricsBar';
import InstagramPanel from '../components/InstagramPanel';
import SegundoCerebro from '../components/SegundoCerebro';
import Roadmap from '../components/Roadmap';
import ConteudoPlanning from '../components/ConteudoPlanning';
import Projecao from '../components/Projecao';
import SEOPanel from '../components/SEOPanel';
import Produtos from '../components/Produtos';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsBar />

        {/* Separator */}
        <div style={{ height: '1px', background: 'rgba(0,194,203,0.08)', margin: '0 24px' }} />

        <InstagramPanel />

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 24px' }} />

        <SegundoCerebro />

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 24px' }} />

        <Roadmap />

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 24px' }} />

        <ConteudoPlanning />

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 24px' }} />

        <Projecao />

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 24px' }} />

        <SEOPanel />

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 24px' }} />

        <Produtos />
      </main>
      <Footer />
    </>
  );
}
