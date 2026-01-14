import React from 'react';
import { BusinessItem } from '../types';
import { Layers, Disc, Scroll, ArrowRight } from 'lucide-react';

// Product Categories from PDF
const BUSINESS_AREAS: BusinessItem[] = [
  {
    title: 'SPC锁扣地板',
    description: '新型环保地板，具备零甲醛、防水、防火、防虫特性。采用挤塑机融合T型模具挤压，一次性加温贴合，安装便捷。',
    icon: <Layers size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1581858726768-7589d36de172?q=80&w=2070&auto=format&fit=crop', // Wood floor texture
  },
  {
    title: 'LVT片材系列',
    description: '多层复合结构弹性地板，质地柔软，脚感舒适。核心层采用PVC树脂与石粉混合，经热压或挤出工艺制成。',
    icon: <Disc size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2832&auto=format&fit=crop', // Interior floor
  },
  {
    title: '商用/同质透心卷材',
    description: '耐磨抗菌，适合医疗商用。流化制作，材质花色密度完全均一，超长使用寿命，抗重压性能强。',
    icon: <Scroll size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2670&auto=format&fit=crop', // Commercial floor
  },
];

const Business: React.FC = () => {
  return (
    <section id="business" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">产品品类</h2>
          <p className="text-gray-500">
            Product Categories
          </p>
          <div className="w-16 h-1 bg-primary-accent mx-auto mt-4"></div>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_AREAS.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
                {/* Icon Badge */}
                <div className="absolute bottom-0 right-0 bg-primary text-white p-4 rounded-tl-lg">
                  <div className="text-primary-accent">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center text-primary-accent font-medium text-sm group/link">
                  查看详情
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Business;