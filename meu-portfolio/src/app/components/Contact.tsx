import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! (Função de exemplo)');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-5xl mb-6 text-gray-900">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou disponível para oportunidades de trabalho e novos projetos. Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-blue-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Email</h3>
              <p className="text-sm text-gray-600 font-medium">joao@developer.com</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Telefone</h3>
              <p className="text-sm text-gray-600 font-medium">+55 (11) 99999-9999</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-purple-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Localização</h3>
              <p className="text-sm text-gray-600 font-medium">São Paulo, SP - Brasil</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl">Envie uma mensagem</CardTitle>
            <CardDescription className="text-base">
              Preencha o formulário abaixo e entrarei em contato o mais breve possível.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Nome</Label>
                  <Input id="name" placeholder="Seu nome" required className="h-12 border-2 focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required className="h-12 border-2 focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm">Assunto</Label>
                <Input id="subject" placeholder="Assunto da mensagem" required className="h-12 border-2 focus:border-blue-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Digite sua mensagem..."
                  className="min-h-40 border-2 focus:border-blue-500 transition-colors resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2 h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg transform hover:scale-[1.02] transition-all">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}