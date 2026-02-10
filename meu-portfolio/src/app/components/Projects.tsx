import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  type: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Sistema de Gerenciamento de Tarefas para pessoas com Alzheimers - Caminho da Memória',
    description: 'Sistema web para gerenciamento de tarefas de pessoas com Alzheimer, com interface intuitiva e funcionalidades de lembrete e acompanhamento. Permite organizar e armazenar memórias importantes, atividades diárias e informações relevantes para facilitar a rotina e melhorar a qualidade de vida dos usuários. Ferramenta de monitoramento e suporte para cuidadores, com foco em simplicidade e acessibilidade.',
    image: 'task management app',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'CodeIgniter4', 'Firebase', 'Supabase', 'Figma', 'Composer'],
    github: 'https://github.com/Davi-Jr/Caminho-da-Memoria-Web',
    type: 'Projeto Acadêmico'
  },
  {
    title: 'Sistema de Emprego - SIAS',
    description: 'Plataforma de busca de vagas para conectar candidatos a empregadores, com filtros em buscas. Permite aos usuários criar perfis, enviar currículos e se candidatar a vagas de emprego, enquanto os empregadores podem publicar oportunidades e gerenciar candidaturas. Sistema oferece uma interface amigável para facilitar a busca por emprego e a contratação.',
    image: '',
    technologies: ['HTML5', 'CSS3', 'XAMPP', 'JavaScript', 'PHP', 'MySQL', 'Figma', 'Trello'],
    github: 'https://github.com/Davi-Jr/Sistema_de_Emprego',
    type: 'Projeto Acadêmico'
  },
  {
    title: ' Aplicativo de Vagas de Emprego - SiasApp',
    description: 'Aplicativo mobile para busca e aplicação de vagas de emprego. Continuidade ao projeto Web SIAS, oferecendo uma experiência otimizada para dispositivos móveis. Permite aos usuários criar perfis, enviar currículos e se candidatar a vagas de emprego, enquanto os empregadores podem publicar oportunidades e gerenciar candidaturas. O aplicativo é desenvolvido com React Native, utilizando Firebase e Supabase para backend e gerenciamento de dados.',
    image: 'mobile task app',
    technologies: ['TypeScript', 'React Native', 'Postman', 'Figma', 'Trello','Firebase' , 'Supabase'],
    github: 'https://github.com/Davi-Jr/SiasApp',
    type: 'Projeto Acadêmico'
  },
  {
    title: 'Assistente Virtual - ISA',
    description: 'Assistente virtual que executa comandos por voz, utilizando tecnologias de reconhecimento de fala e processamento de linguagem natural para responder perguntas, realizar tarefas e fornecer informações em tempo real. Desenvolvido com Python, utilizando bibliotecas como SpeechRecognition e NLTK.',
    image: 'analytics dashboard',
    technologies: ['Python'],
    github: 'https://github.com/Davi-Jr/Assistente-Virtual',
    type: 'Projeto Acadêmico'
  },
    {
    title: 'Receitei - Aplicativo de Receitas',
    description: 'O Receitei é um aplicativo mobile que usa Inteligência Artificial para converter vídeos de receitas em passo a passo estruturado, com ingredientes, tempos, porções e modo de preparo. Ideal para quem quer cozinhar sem complicações, transformando conteúdo de vídeo em instruções claras e organizadas.',
    image: 'fitness studio',
    technologies: ['TypeScript', 'Supabase', 'React Native', 'Gemini AI', 'Figma'],
    github: 'https://github.com/WesleyS08/Receitei',
    type: 'Freelance'
  },
  {
    title: 'Sistema de Alerta Laboratorial com Visão - SALV',
    description: 'Sistema integrado de segurança que utiliza visão computacional (YOLOv8) para detecção facial e de movimento, IoT (ESP32 + sensores) para monitoramento ambiental, e notificações em tempo real via app mobile para proteção de ambientes críticos como laboratórios e salas de servidores.',
    image: 'coffee shop',
    technologies: ['TypeScript', 'Python', 'C++'],
    github: 'https://github.com/WesleyS08/SALV',
    type: 'Projeto Acadêmico'
  },
  {
    title: 'Envio de E-mails - PHPMailer',
    description: 'Aplicação para envio de e-mails utilizando PHPMailer. Uma biblioteca que permite disparos de e-mails personalizados com suporte a anexos, HTML e SMTP, ideal para notificações, newsletters e comunicação automatizada.',
    image: 'api development',
    technologies: ['PHP', 'Composer'],
    github: 'https://github.com/Davi-Jr/Send-Email',
    type: 'Projeto Pessoal'
  },

  
];

// Função para retornar a cor da badge baseada no tipo
const getBadgeVariant = (type: string) => {
  switch (type) {
    case 'Freelance':
      return 'default'; // Azul (padrão)
    case 'Projeto Pessoal':
      return 'secondary'; // Cinza
    case 'Projeto Acadêmico':
      return 'outline'; // Outline
    default:
      return 'secondary';
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-50/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm mb-4">
            Portfólio
          </div>
          <h2 className="text-5xl mb-6 text-gray-900">
            Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todos os projetos que desenvolvi: acadêmicos, pessoais e trabalhos freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-200 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm group">
              <div className="h-52 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant={getBadgeVariant(project.type)}
                    className={`${project.type === 'Freelance' ? 'bg-green-600 hover:bg-green-700 text-white' : ''} shadow-sm`}
                  >
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs border border-blue-100 shadow-sm hover:bg-blue-200 hover:text-blue-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-4 border-t bg-gray-50/50">
                <Button variant="outline" size="sm" className="flex-1 gap-1.5 hover:bg-gray-900 hover:text-white transition-all" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" className="flex-1 gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}