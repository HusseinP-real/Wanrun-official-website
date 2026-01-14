import React from 'react';
import { BusinessItem } from '../types';
import { Layers, Disc, Scroll, ArrowRight, PackageCheck, Ship, Building, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const BUSINESS_AREAS: BusinessItem[] = [
  {
    title: 'SPC锁扣系列',
    description: '采用挤塑机融合T型模具挤压PVC地材，一次性加温贴合。具备零甲醛、防水、防火、防虫及安装便捷等特性。',
    icon: <Layers size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1581858726768-7589d36de172?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'LVT片材系列',
    description: '涵盖常规铺设、自粘、自吸、锁扣及ABA复合工艺。质地柔软有弹性，脚感舒适，是多层复合结构的极致体现。',
    icon: <Disc size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2832&auto=format&fit=crop',
  },
  {
    title: '商用/同质透心',
    description: '通过PVC造粒流化制作，材质花色密度完全均一。具有极强耐磨性和重压稳定性，广泛应用于医疗及高端商用空间。',
    icon: <Scroll size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2670&auto=format&fit=crop',
  },
];

const SERVICE_MODELS = [
  { label: 'OEM代工', icon: <PackageCheck className="w-5 h-5" /> },
  { label: '外贸出口', icon: <Ship className="w-5 h-5" /> },
  { label: '地产工程', icon: <Building className="w-5 h-5" /> },
  { label: '工程实施', icon: <Hammer className="w-5 h-5" /> },
];

const Business: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="business" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 业务模式概览 - 基于PDF第5页主要业务内容 */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20">
          {SERVICE_MODELS.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center space-x-2 text-primary/70 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-primary-accent">{service.icon}</span>
              <span className="font-semibold">{service.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            产品品类
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500"
          >
            Product Categories & Technical Solutions
          </motion.p>
          <div className="w-16 h-1 bg-primary-accent mx-auto mt-4"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {BUSINESS_AREAS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
                <div className="absolute bottom-0 right-0 bg-primary text-white p-4 rounded-tl-lg">
                  <div className="text-primary-accent">{item.icon}</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-accent transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.description}</p>
                <div className="flex items-center text-primary-accent font-medium text-sm group/link">
                  查看详情 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Business;