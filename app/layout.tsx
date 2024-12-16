import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'Sito Vetrina | Arch. Alberto Perri',
  description: 'Progetti di modellazione 3D per aziende e professionisti.',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
