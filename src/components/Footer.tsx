
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-red-500">Coonect</span> Ltda.
              </h3>
              <p className="text-orange-400 text-sm font-medium">
                Agente Autorizado Claro Empresas
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Soluções digitais que transformam negócios. Conectando PMEs brasileiras 
              à inovação tecnológica com expertise local e atendimento personalizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-gray-300 hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-orange-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#solucoes" className="text-gray-300 hover:text-orange-400 transition-colors">Soluções</a></li>
              <li><a href="#diferenciais" className="text-gray-300 hover:text-orange-400 transition-colors">Por que Coonect?</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-orange-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Nossas Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">Conectividade Empresarial</span></li>
              <li><span className="text-gray-300">Comunicação Integrada</span></li>
              <li><span className="text-gray-300">Presença Digital</span></li>
              <li><span className="text-gray-300">Produtividade e Colaboração</span></li>
              <li><span className="text-gray-300">Gestão e Segurança</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">(51) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">contato@coonect.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">Porto Alegre, RS</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Coonect Ltda. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
