import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Overlay escuro animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70 animate-gradient-x" />

      {/* Elementos decorativos animados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-scale-pulse" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-rotate-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-fade-in-out" />
      <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/2 left-1/3 w-40 h-40 bg-green-500/15 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }} />
      
      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <div className="w-50 h-50 mx-auto mb-8 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img src="./perfil.png" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 text-white drop-shadow-2xl tracking-tight animate-fade-in">
            Davi de Brito Jr
          </h1>
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <p className="text-2xl md:text-3xl text-white">
              Desenvolvedor Full Stack Júnior
            </p>
          </div>
          <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg leading-relaxed mt-6">
            Recém-formado em Desenvolvimento de Software Multiplataforma, apaixonado por criar experiências Web | Mobile modernas e funcionais.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="gap-2 shadow-2xl bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
            <Mail className="w-5 h-5" />
            Contato
          </Button>
          <Button onClick={() => window.open('./Currículo.pdf')} variant="outline" className="gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/20 shadow-2xl px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
            <FileDown className="w-5 h-5" />
            Download CV
          </Button>
        </div>

        <div className="flex gap-8 justify-center">
          <a href="https://github.com/Davi-Jr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/davi-brito-jr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:davibritojunior1@gmail.com" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}