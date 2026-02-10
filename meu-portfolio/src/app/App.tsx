import { Toaster } from 'sonner';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative bg-gray-900"> 
      {/* Imagem de fundo fixa e borrada para toda a aplicação */}
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80)',
          filter: 'blur(60px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Overlay semi-transparente */}
      <div className="fixed inset-0 bg-white/70 backdrop-blur-sm -z-10" />
      
      {/* Conteúdo */}
      <div className="relative z-0">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}