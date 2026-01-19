import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skillsCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'Responsive Design'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototipagem'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Outras',
    icon: Code2,
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum'],
    color: 'from-yellow-500 to-orange-500'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
            Tecnologias
          </div>
          <h2 className="text-5xl mb-6 text-gray-900">
            Habilidades & Stacks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino e utilizo em meus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}