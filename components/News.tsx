import React from 'react';
import { NewsItem } from '../types';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// Using "Development History" from PDF as News Items
const FEATURED_NEWS: NewsItem = {
  id: '2025',
  date: '2025',
  title: '战略规划：越南万润科技有限公司',
  category: '未来展望',
  summary: '为进一步拓展国际市场，集团计划于2025年成立越南万润科技有限公司，布局全球供应链，提升国际竞争力。',
  imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
};

const NEWS_LIST: NewsItem[] = [
  { id: '2023-1', date: '2023', title: '成立山东润欧新材料有限公司', category: '集团扩张' },
  { id: '2023-2', date: '2023', title: '成立巨野一塑新材料有限公司，专注于LVT/自吸系列生产', category: '新厂投产' },
  { id: '2022', date: '2022', title: '成立巨野华冉新材料有限公司，占地160亩', category: '产能提升' },
  { id: '2019', date: '2019', title: '成立巨野元赫新型材料有限公司及山东泗泽新材料有限公司', category: '多元发展' },
  { id: '2016', date: '2016', title: '成立山东万润高科新材料有限公司，开启品牌新篇章', category: '里程碑' },
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">发展历程</h2>
            <p className="text-gray-500 uppercase text-sm tracking-wider">Development History</p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:block w-32 h-px bg-gray-200 mb-4 origin-left"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Featured/Latest Milestone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-sm mb-4 border border-gray-100">
              <img
                src={FEATURED_NEWS.imageUrl}
                alt={FEATURED_NEWS.title}
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary-accent text-white text-xs px-3 py-1 font-medium">
                {FEATURED_NEWS.category}
              </div>
            </div>
            <div className="text-primary-accent font-bold text-lg mb-2">{FEATURED_NEWS.date}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-accent transition-colors">
              {FEATURED_NEWS.title}
            </h3>
            <p className="text-gray-600 line-clamp-3 leading-relaxed">
              {FEATURED_NEWS.summary}
            </p>
          </motion.div>

          {/* Timeline List */}
          <div className="flex flex-col justify-start">
            <div className="divide-y divide-gray-100">
              {NEWS_LIST.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="py-6 first:pt-0 group cursor-pointer hover:bg-gray-50 px-4 -mx-4 transition-colors rounded-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 pt-1">
                        <span className="text-xl font-bold text-gray-400 group-hover:text-primary-accent transition-colors">{item.date}</span>
                      </div>
                      <div>
                        <div className="mb-1">
                          <span className="text-xs text-primary bg-primary/5 px-2 py-0.5 rounded text-opacity-70">
                            {item.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary-accent transform group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default News;