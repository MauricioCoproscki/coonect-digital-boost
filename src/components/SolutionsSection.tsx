
import SolutionCard from './SolutionCard';
import { Wifi, MessageSquare, Globe, Shield } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Wifi,
      title: "Transforme sua Conectividade",
      description: "Internet Banda Larga Fixa, Internet Móvel 4G/5G+, FWA 5G+, Links Dedicados e M2M.",
      benefits: [
        "Fibra óptica de alta velocidade",
        "5G+ para operações avançadas",
        "Links dedicados para estabilidade",
        "Conectividade M2M para IoT"
      ],
      ctaText: "Revolucione sua Conectividade",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Revolucione sua Comunicação",
      description: "Telefonia Fixa Empresarial, Telefonia Móvel, PABX Virtual/Cloud e soluções integradas.",
      benefits: [
        "PABX Virtual na nuvem",
        "Telefonia móvel empresarial",
        "Comunicação unificada",
        "Atendimento inteligente"
      ],
      ctaText: "Inove sua Comunicação",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Digitalize sua Empresa",
      description: "Websites, Domínios, E-mail Empresarial, Microsoft 365, Google Workspace.",
      benefits: [
        "Sites profissionais responsivos",
        "E-mail empresarial seguro",
        "Microsoft 365 completo",
        "Colaboração na nuvem"
      ],
      ctaText: "Acelere sua Digitalização",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Fortaleça e Proteja seu Negócio",
      description: "ERP, Segurança Cibernética, Monitoramento, Gestão de Equipes e soluções de proteção.",
      benefits: [
        "ERP para gestão integrada",
        "Proteção Digital McAfee",
        "Monitoramento 24/7",
        "Backup e recuperação"
      ],
      ctaText: "Proteja sua Operação",
      gradient: "bg-gradient-to-r from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções que <span className="text-orange-500">Transformam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de soluções digitais da Claro Empresas, 
            com o diferencial do atendimento consultivo e expertise local da Coonect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Precisa de uma solução específica? Nossa equipe está pronta para criar a combinação perfeita para seu negócio.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Solicite uma Consultoria Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
