import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
                        href="https://github.com/Davi-Jr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-lg bg-black flex items-center justify-center 
                        text-white no-underline 
                        hover:bg-gray-800 hover:text-white
                        focus:outline-none focus:ring-0
                        transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <FaGithub size={32} />
                      </a>
             <a
          href="https://www.linkedin.com/in/davi-brito-jr/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0A66C2] rounded-lg flex items-center justify-center
          text-white hover:bg-[#084c91]
          transition-all duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={32} />
          </a>
            <a
          href="mailto:davibritojunior1@gmail.com"
          className="w-14 h-14 bg-white rounded-lg flex items-center justify-center
          hover:scale-110 transition-all duration-300"
        >
          <SiGmail size={32} color="#EA4335" />
        </a>
          </div>
          
          <div className="text-center">
            <p className="flex items-center justify-center gap-2 text-base mb-2" style={{ fontFamily: "'Georgia', serif", fontWeight: 500 }}>
              Desenvolvido com <Heart className="w-5 h-5 fill-red-500 text-red-500 animate-pulse" /> por Davi Dev.
            </p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "'Georgia', serif", fontWeight: 500 }}>
              © 2026 Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}