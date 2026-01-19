import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-commerce Sustentável',
    description: 'Plataforma de e-commerce para produtos sustentáveis com carrinho de compras, sistema de pagamento e painel administrativo.',
    image: 'ecommerce website',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Projeto Acadêmico'
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em tempo real e notificações push.',
    image: 'mobile task app',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Projeto Pessoal'
  },
  {
    title: 'Website Institucional - Café da Vila',
    description: 'Desenvolvimento de website responsivo para cafeteria local com menu digital, galeria de fotos e formulário de contato.',
    image: 'coffee shop',
    technologies: ['React', 'Tailwind CSS', 'EmailJS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Freelance'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados e métricas com gráficos dinâmicos e relatórios customizáveis.',
    image: 'analytics dashboard',
    technologies: ['Next.js', 'Recharts', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Projeto Acadêmico'
  },
  {
    title: 'Sistema de Agendamento - Studio Fitness',
    description: 'Plataforma web para agendamento de aulas e treinos com integração de pagamento e gestão de clientes.',
    image: 'fitness studio',
    technologies: ['Next.js', 'Supabase', 'Stripe', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Freelance'
  },
  {
    title: 'API REST para Blog',
    description: 'API RESTful completa para gerenciamento de blog com autenticação, CRUD de posts e sistema de comentários.',
    image: 'api development',
    technologies: ['Express', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com',
    type: 'Projeto Pessoal'
  },
  {
    title: 'Landing Page Corporativa - TechStart',
    description: 'Landing page moderna para consultoria de TI com animações, formulário de orçamento e integração com CRM.',
    image: 'corporate website',
    technologies: ['React', 'Motion', 'Tailwind CSS', 'HubSpot API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Freelance'
  },
  {
    title: 'Landing Page Interativa',
    description: 'Landing page moderna com animações suaves, formulário de contato e design responsivo.',
    image: 'modern website',
    technologies: ['React', 'Motion', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Projeto Pessoal'
  },
  {
    title: 'E-commerce de Livros - Página Virada',
    description: 'Loja virtual completa com catálogo de produtos, carrinho de compras, sistema de busca e checkout.',
    image: 'bookstore',
    technologies: ['React', 'Node.js', 'MongoDB', 'PayPal API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Freelance'
  },
  {
    title: 'Sistema de Reservas',
    description: 'Sistema web para agendamento e gerenciamento de reservas com calendário interativo e envio de e-mails.',
    image: 'booking system',
    technologies: ['React', 'Node.js', 'MySQL', 'SendGrid'],
    github: 'https://github.com',
    demo: 'https://example.com',
    type: 'Projeto Acadêmico'
  }
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
            Todos os projetos que desenvolvi: acadêmicos, pessoais e trabalhos freelance
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
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs border border-blue-100 shadow-sm"
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