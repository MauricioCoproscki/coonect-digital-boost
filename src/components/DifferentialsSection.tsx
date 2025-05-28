
import { Star, Users, MapPin, Headphones, TrendingUp, Shield } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada PME é única. Oferecemos consultoria especializada focada nas necessidades específicas do seu negócio.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Expertise Local",
      description: "Conhecemos a realidade das PMEs da Região Sul e oferecemos suporte presencial quando necessário.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Experiência Comprovada",
      description: "Mais de 25 anos de experiência combinada em telecomunicações, tecnologia e operações B2B.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Headphones,
      title: "Suporte Ágil",
      description: "Atendimento rápido e eficiente, com acompanhamento pós-venda focado no seu sucesso.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Star,
      title: "Foco Exclusivo em PMEs",
      description: "Entendemos os desafios únicos das pequenas e médias empresas e desenvolvemos soluções sob medida.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Força da Claro Empresas",
      description: "Acesso às melhores soluções de telecomunicações do mercado com a confiabilidade da Claro.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-orange-400">Coonect?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos seu parceiro na transformação digital. Combinamos a força das soluções Claro 
            com o atendimento personalizado e a expertise local que sua PME merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold mb-4">Pronto para Transformar seu Negócio?</h3>
          <p className="text-lg mb-8 opacity-90">
            Nossa equipe está preparada para entender suas necessidades e criar a solução perfeita para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Fale com um Especialista em Transformação Digital
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Solicite um Diagnóstico para sua Empresa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
