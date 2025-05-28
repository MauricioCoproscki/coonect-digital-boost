
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>Agente Autorizado Claro Empresas</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-orange-400">Soluções digitais</span><br />
                que <span className="text-white">transformam</span><br />
                <span className="text-red-300">negócios.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Sua PME conectada à inovação com a força da Claro e nossa expertise local.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105">
                Descubra como Transformar seu Negócio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg">
                Solicite um Diagnóstico
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">+25</div>
                <div className="text-sm text-gray-300">Anos Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-300">Foco em PMEs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">RS/SC/PR</div>
                <div className="text-sm text-gray-300">Região Sul</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/17d1daff-699f-48c3-9635-1c05e3bc492c.png"
                alt="Empresários usando tecnologia para transformar negócios"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
