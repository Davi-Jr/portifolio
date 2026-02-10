import { Calendar, Star, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const freelanceProjects = [
  {
    client: 'Café da Vila',
    project: 'Website Institucional',
    description: 'Desenvolvimento de website responsivo para cafeteria local com menu digital, galeria de fotos e formulário de contato.',
    date: 'Novembro 2025',
    duration: '3 semanas',
    technologies: ['React', 'Tailwind CSS', 'EmailJS'],
    achievements: [
      'Aumento de 40% nas reservas online',
      'Design totalmente responsivo',
      'SEO otimizado'
    ],
    rating: 5
  },
  {
    client: 'Studio Fitness',
    project: 'Sistema de Agendamento',
    description: 'Plataforma web para agendamento de aulas e treinos com integração de pagamento e gestão de clientes.',
    date: 'Setembro 2025',
    duration: '6 semanas',
    technologies: ['Next.js', 'Supabase', 'Stripe', 'TypeScript'],
    achievements: [
      'Sistema de reservas em tempo real',
      'Integração com calendário Google',
      'Painel administrativo completo'
    ],
    rating: 5
  },
  {
    client: 'TechStart Consulting',
    project: 'Landing Page Corporativa',
    description: 'Landing page moderna para consultoria de TI com animações, formulário de orçamento e integração com CRM.',
    date: 'Agosto 2025',
    duration: '2 semanas',
    technologies: ['React', 'Motion', 'Tailwind CSS', 'HubSpot API'],
    achievements: [
      'Taxa de conversão de 25%',
      'Tempo de carregamento < 2s',
      'Animações fluidas e interativas'
    ],
    rating: 5
  },
  {
    client: 'Livraria Página Virada',
    project: 'E-commerce de Livros',
    description: 'Loja virtual completa com catálogo de produtos, carrinho de compras, sistema de busca e checkout.',
    date: 'Julho 2025',
    duration: '8 semanas',
    technologies: ['React', 'Node.js', 'MongoDB', 'PayPal API'],
    achievements: [
      'Mais de 1000 produtos catalogados',
      'Sistema de busca avançada',
      'Vendas online implementadas com sucesso'
    ],
    rating: 5
  }
];

export function Freelance() {
  return (
    <section id="freelance" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4 text-gray-900">
          Experiência Freelance
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Projetos desenvolvidos para clientes reais com resultados comprovados
        </p>

        <div className="space-y-6">
          {freelanceProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{project.project}</CardTitle>
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <CardDescription className="text-lg">{project.client}</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm mb-2 text-gray-900">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-200 hover:text-blue-900 transition-colors"
                      >
                        {tech}
                      </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-gray-900">Resultados alcançados:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
