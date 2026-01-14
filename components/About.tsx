import React from 'react';
import { StatItem } from '../types';
import { motion } from 'framer-motion';

// 数据基于PDF工厂介绍汇总
const STATS: StatItem[] = [
  { label: '战略扩张', value: '2014', suffix: '年' },
  { label: '占地总面积', value: '520', suffix: '亩+' },
  { label: '年产能力', value: '3000', suffix: '万㎡' },
  { label: '下属子公司', value: '6', suffix: '家' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 左侧：文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-primary-accent font-semibold tracking-wider uppercase text-sm">Group Profile</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                集团简介 <br />
                <span className="text-2xl font-light text-gray-600">深耕地板建材，打造全球顶级代工厂</span>
              </h2>
            </div>

            <div className="text-gray-600 leading-relaxed space-y-6 text-justify">
              <p>
                山东万润集团及旗下各子公司，是中国最大的地板建材生产企业之一。集团前身为以生产PVC塑胶地板为主导产品的专业公司，自2014年战略扩张后，已发展成为一家致力于PVC地板产品研发、生产、服务于一体的超大型OEM公司。
              </p>
              <p>
                目前，万润集团的产品线已全面覆盖 <strong>PVC片材地板、SPC锁扣地板、多层复合塑胶地板、同质透心卷材、地板革</strong> 等五大品类。凭借卓越的品质控制与庞大的生产规模，万润在中国已成为众多地板行业领军品牌的长期合作伙伴。
              </p>

              {/* 四大核心价值观 - 基于PDF第3页 */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {['客户至上', '追求卓越', '诚信经营', '持续创新'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded border-l-4 border-primary-accent">
                    <div className="w-2 h-2 rounded-full bg-primary-accent"></div>
                    <span className="font-bold text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 数据统计网格 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-1"
                  >
                    {stat.value}<span className="text-lg text-primary-accent ml-1">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧：图片组合 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-accent/30 z-0 hidden lg:block"></div>
            <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                alt="万润集团工业园区"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-xl z-20 hidden md:block max-w-xs border-l-4 border-primary-accent"
            >
              <p className="font-semibold text-lg italic">"质量第一，用户至上"</p>
              <p className="text-sm text-gray-400 mt-2">万润集团贯彻始终的经营宗旨</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;