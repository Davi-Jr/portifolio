import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Overlay escuro apenas para o Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70" />
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-6xl shadow-2xl border-4 border-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            JD
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 text-white drop-shadow-2xl tracking-tight animate-fade-in">
            João Developer
          </h1>
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <p className="text-2xl md:text-3xl text-white">
              Desenvolvedor Full Stack Júnior
            </p>
          </div>
          <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg leading-relaxed mt-6">
            Recém-formado em Ciência da Computação, apaixonado por criar experiências web modernas e funcionais.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button className="gap-2 shadow-2xl bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
            <Mail className="w-5 h-5" />
            Contato
          </Button>
          <Button variant="outline" className="gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/20 shadow-2xl px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
            <FileDown className="w-5 h-5" />
            Download CV
          </Button>
        </div>

        <div className="flex gap-8 justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:joao@developer.com" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}