import React from 'react';
import { StatItem } from '../types';

// Stats derived from "Factory Introduction" section in PDF
// Summing up areas: 216+65+45+160+40 = ~526亩
// Capacity mentions: 1000万, 600万, etc. Simplified to 3000万+ for group.
const STATS: StatItem[] = [
  { label: '扩张发展', value: '2014', suffix: '年' },
  { label: '占地面积', value: '520', suffix: '亩+' },
  { label: '年产能力', value: '3000', suffix: '万㎡' },
  { label: '下属企业', value: '6', suffix: '家' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-primary-accent font-semibold tracking-wider uppercase text-sm">Group Profile</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                集团简介 <br />
                <span className="text-2xl font-light text-gray-600">中国最大的地板建材生产企业之一</span>
              </h2>
            </div>
            
            <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
              <p>
                山东万润集团及旗下各子公司，是中国最大的地板建材生产企业之一。前身为生产PVC塑胶地板为主导产品的公司，自2014年扩张后，发展成为一家致力于PVC地板产品研发、生产、服务于一体的超大型OEM公司。
              </p>
              <p>
                集团产品涵盖PVC片材地板、SPC锁扣地板、多层复合塑胶地板、同质透心卷材、地板革等五大品类。在中国，万润为众多客户品牌提供代工服务，产品远销海内外。
              </p>
              <p className="font-medium text-primary">
                企业宗旨：质量第一，用户至上，优质服务，信守合同
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}<span className="text-lg text-primary-accent ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative">
            {/* Background shape */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-accent/30 z-0 hidden lg:block"></div>
            
            {/* Main Image - Aerial View Placeholder */}
            <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-58197bd47a30?q=80&w=2070&auto=format&fit=crop" 
                alt="Shandong Wanrun Factory Aerial View" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-xl z-20 hidden md:block max-w-xs border-l-4 border-primary-accent">
              <p className="font-semibold text-lg">诚信经营</p>
              <p className="text-sm text-gray-300">Honest Operation</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;