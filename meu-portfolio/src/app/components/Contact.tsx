import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';


export function Contact() {

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm mb-4" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>
            Contato
          </div>
          <h2 className="text-5xl mb-6 text-gray-900" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }} >
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Georgia', serif", fontWeight: 500 }}>
            Estou disponível para oportunidades de trabalho e novos projetos. Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-blue-200 bg-white/90 backdrop-blur-sm cursor-pointer" onClick={() => window.location.href = 'mailto:davibritojunior1@gmail.com'}>
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white-500 to-white-600 flex items-center justify-center mb-4 shadow-lg">
                <SiGmail size={32} color="#EA4335" />
              </div>
              <h3 className="w-14 h-14 bg-white rounded-lg flex items-center justify-center
                        hover:scale-110 transition-all duration-300" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}
                      >
                        
                        Email</h3>
              <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>davibritojunior1@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-200 bg-white/90 backdrop-blur-sm cursor-pointer" onClick={() => { navigator.clipboard.writeText('@codafofos'); toast.success('Nome de usuário copiado para a área de transferência!'); }}>
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                <FaDiscord className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>Discord</h3>
              <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>@codafofos</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-purple-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>Localização</h3>
              <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>São Paulo, SP</p>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
}