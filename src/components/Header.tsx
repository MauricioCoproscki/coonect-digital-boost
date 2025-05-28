
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(51) 3333-4444</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>contato@coonect.com.br</span>
            </div>
          </div>
          <div className="text-xs">
            <span className="text-orange-400">Agente Autorizado</span> Claro Empresas
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-red-600">Coonect</span>
                <span className="text-gray-900"> Ltda.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Sobre Nós
              </a>
              <a href="#solucoes" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Soluções
              </a>
              <a href="#diferenciais" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Por que Coonect?
              </a>
              <a href="#contato" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Fale com um Especialista
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium">
                  Início
                </a>
                <a href="#sobre" className="text-gray-700 hover:text-orange-500 font-medium">
                  Sobre Nós
                </a>
                <a href="#solucoes" className="text-gray-700 hover:text-orange-500 font-medium">
                  Soluções
                </a>
                <a href="#diferenciais" className="text-gray-700 hover:text-orange-500 font-medium">
                  Por que Coonect?
                </a>
                <a href="#contato" className="text-gray-700 hover:text-orange-500 font-medium">
                  Contato
                </a>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-lg font-semibold mt-4">
                  Fale com um Especialista
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
