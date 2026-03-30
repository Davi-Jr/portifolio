import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Cores para cada tecnologia (mesmo padrão do Projects)
const techColors: Record<string, { bg: string; text: string; border: string; hoverBg: string; hoverText: string }> = {
  // Frontend
  'React': { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200', hoverBg: 'hover:bg-cyan-200', hoverText: 'hover:text-cyan-900' },
  'TypeScript': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', hoverBg: 'hover:bg-blue-200', hoverText: 'hover:text-blue-900' },
  'JavaScript': { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', hoverBg: 'hover:bg-yellow-200', hoverText: 'hover:text-yellow-900' },
  'HTML5': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', hoverBg: 'hover:bg-orange-200', hoverText: 'hover:text-orange-900' },
  'CSS3': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', hoverBg: 'hover:bg-blue-200', hoverText: 'hover:text-blue-900' },
  'Tailwind CSS': { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-200', hoverBg: 'hover:bg-teal-200', hoverText: 'hover:text-teal-900' },
  
  // Backend
  'Node.js': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', hoverBg: 'hover:bg-green-200', hoverText: 'hover:text-green-900' },
  'Python': { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200', hoverBg: 'hover:bg-yellow-200', hoverText: 'hover:text-yellow-900' },
  'REST APIs': { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', hoverBg: 'hover:bg-gray-200', hoverText: 'hover:text-gray-900' },
  'PHP': { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200', hoverBg: 'hover:bg-indigo-200', hoverText: 'hover:text-indigo-900' },
  'Java': { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', hoverBg: 'hover:bg-red-200', hoverText: 'hover:text-red-900' },
  
  // Databases
  'PostgreSQL': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', hoverBg: 'hover:bg-blue-200', hoverText: 'hover:text-blue-900' },
  'MongoDB': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', hoverBg: 'hover:bg-green-200', hoverText: 'hover:text-green-900' },
  'MySQL': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', hoverBg: 'hover:bg-orange-200', hoverText: 'hover:text-orange-900' },
  'Firebase': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300', hoverBg: 'hover:bg-yellow-200', hoverText: 'hover:text-yellow-900' },
  'Supabase': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', hoverBg: 'hover:bg-emerald-200', hoverText: 'hover:text-emerald-900' },
  
  // Mobile
  'React Native': { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200', hoverBg: 'hover:bg-cyan-200', hoverText: 'hover:text-cyan-900' },
  'Expo': { bg: 'bg-white', text: 'text-gray-700', border: 'border-gray-200', hoverBg: 'hover:bg-gray-100', hoverText: 'hover:text-gray-900' },
  'UX': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', hoverBg: 'hover:bg-purple-200', hoverText: 'hover:text-purple-900' },
  
  // Design
  'Figma': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', hoverBg: 'hover:bg-purple-200', hoverText: 'hover:text-purple-900' },
  'UI/UX': { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200', hoverBg: 'hover:bg-pink-200', hoverText: 'hover:text-pink-900' },
  'Prototipagem': { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200', hoverBg: 'hover:bg-indigo-200', hoverText: 'hover:text-indigo-900' },
  
  // Outras Ferramentas
  'Git/GitHub': { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', hoverBg: 'hover:bg-gray-200', hoverText: 'hover:text-gray-900' },
  'Postman': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', hoverBg: 'hover:bg-orange-200', hoverText: 'hover:text-orange-900' },
  'Docker': { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200', hoverBg: 'hover:bg-sky-200', hoverText: 'hover:text-sky-900' },
  'Kanban/Scrum': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', hoverBg: 'hover:bg-blue-200', hoverText: 'hover:text-blue-900' },
};

const defaultTechColor = { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', hoverBg: 'hover:bg-gray-200', hoverText: 'hover:text-gray-900' };

const getTechColor = (tech: string) => techColors[tech] ?? defaultTechColor;

const skillsCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python', 'REST APIs', 'PHP' , 'Java'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'UX'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'UI/UX', 'Prototipagem'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Outras Ferramentas',
    icon: Code2,
    skills: ['Git/GitHub', 'Postman', 'Docker', 'Kanban/Scrum'],
    color: 'from-yellow-500 to-orange-500'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            Tecnologias
          </div>
          <h2 className="text-5xl mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            Habilidades & Stacks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            Tecnologias e ferramentas que domino e utilizo em meus projetos pessoais e acadêmicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} 
                    flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle
                    className="text-2xl"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => {
                      const colors = getTechColor(skill);
                      return (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 ${colors.bg} ${colors.text} rounded-md text-xs font-semibold border ${colors.border} ${colors.hoverBg} ${colors.hoverText} transition-all duration-200 shadow-sm hover:shadow-md`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {skill}
                        </span>
                      );
                    })}
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
