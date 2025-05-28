
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão pelo Sucesso do Cliente",
      description: "Seu sucesso é nossa motivação"
    },
    {
      icon: Award,
      title: "Excelência e Expertise",
      description: "Qualidade em cada solução"
    },
    {
      icon: Users,
      title: "Colaboração e Parceria",
      description: "Trabalhamos juntos pelo seu crescimento"
    },
    {
      icon: Lightbulb,
      title: "Integridade Inegociável",
      description: "Transparência em todas as relações"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-orange-500">Coonect</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fundada em 03 de fevereiro de 2025, somos uma empresa jovem construída sobre 
                pilares de vasta experiência. Nossa liderança combina mais de 25 anos de 
                expertise em telecomunicações, tecnologia e operações B2B.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-2" />
                  Nossa Missão
                </h3>
                <p className="text-gray-600">
                  Simplificar o acesso à tecnologia e aplicá-la com expertise para impulsionar 
                  o crescimento sustentável de Pequenas e Médias Empresas Brasileiras.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Eye className="w-5 h-5 text-orange-500 mr-2" />
                  Nossa Visão
                </h3>
                <p className="text-gray-600">
                  Ser a empresa que ajuda a redefinir o futuro das PMEs no Brasil, 
                  revolucionando seus negócios com tecnologia de alta qualidade.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/64035013-ec14-431f-a00e-bed24c6b1036.png"
              alt="Empreendedora usando tablet em ambiente moderno"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos <span className="text-orange-500">Valores</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-gray-50">
                <CardContent className="p-6">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Nosso Propósito</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Acreditamos que o potencial das PMEs é imenso e que a tecnologia deve ser uma aliada 
            poderosa, não uma barreira. Nosso propósito é empoderar esses empreendedores, 
            simplificando o acesso às melhores ferramentas e oferecendo a parceria e expertise 
            local que eles merecem para prosperar e inovar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
