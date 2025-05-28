
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  gradient: string;
}

const SolutionCard = ({ icon: Icon, title, description, benefits, ctaText, gradient }: SolutionCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
      <div className={`h-2 ${gradient}`}></div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className={`inline-flex p-3 rounded-lg ${gradient.replace('bg-gradient-to-r', 'bg-gradient-to-br')} text-white`}>
            <Icon className="w-6 h-6" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600">
            {description}
          </p>
          
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button variant="outline" className="w-full mt-4 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors">
            {ctaText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
