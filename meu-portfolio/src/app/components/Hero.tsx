import { FileText , Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";


export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Fundo com gradiente animado suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950" />
      
      {/* Grade de partículas suavizada */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)
          `,
          animation: 'pulse 8s ease-in-out infinite'
        }} />
      </div>

      {/* Ondas animadas suaves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-wave-slow" style={{ animationDuration: '12s' }} />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-wave-slow" style={{ animationDuration: '15s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-2xl animate-wave-slow" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      {/* Linhas de grade sutis */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Brilho central suave */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-glow" style={{ animationDuration: '6s' }} />
      </div>
      
      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <div className="w-50 h-50 mx-auto mb-8 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img src="./1740177009224.jpeg" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 text-white drop-shadow-2xl tracking-tight animate-fade-in" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>
            Davi de Brito Jr
          </h1>
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            <p className="text-2xl md:text-3xl text-white">
              Desenvolvedor Full Stack Júnior
            </p>
          </div>
          <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg leading-relaxed mt-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}> 
            Recém-formado em Desenvolvimento de Software Multiplataforma, apaixonado por criar experiências Web | Mobile modernas e funcionais.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
  
  {/* BOTÃO PRINCIPAL */}
  <Button
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="gap-2 px-10 py-6 text-lg font-semibold
    bg-gradient-to-r from-blue-600 to-indigo-600
    text-white rounded-xl
    shadow-lg hover:shadow-2xl
    hover:scale-105 transition-all duration-300"
    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
  >
    Entrar em Contato
  </Button>

  {/* BOTÃO SECUNDÁRIO */}
<Button
  onClick={() => window.open('./curriculo-davi-brito-jr.pdf')}
  className="
    gap-3 px-10 py-6 text-lg font-Georgiabold
    bg-black
    text-white
    rounded-2xl
    border border-black
    shadow-md hover:shadow-xl
    hover:scale-105
    transition-all duration-300
  " style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
  
>
<LiaCloudDownloadAltSolid className="!w-[30px] !h-[30px]" />
  Currículo
</Button>

</div>
        <div className="flex gap-8 justify-center">
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
      </div>
    </section>
  );
}