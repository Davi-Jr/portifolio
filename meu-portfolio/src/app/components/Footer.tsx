import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/Davi-Jr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/davi-brito-jr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:davibritojunior1@gmail.com" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="flex items-center justify-center gap-2 text-base mb-2">
              Desenvolvido com <Heart className="w-5 h-5 fill-red-500 text-red-500 animate-pulse" /> por Davi Dev.
            </p>
            <p className="text-sm text-gray-500">
              © 2026 Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}