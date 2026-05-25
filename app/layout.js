import './globals.css';

export const metadata = {
  title: 'Dashboard — Dr. Márcio Rabello | Avestra',
  description: 'Painel de métricas, segundo cérebro e roadmap do projeto Avestra para Dr. Márcio Rabello.',
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
