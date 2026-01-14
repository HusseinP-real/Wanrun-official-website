import React from 'react';
import { Phone, MapPin, Mail, Layers } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary text-gray-400 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Layers size={32} className="text-primary-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none text-white">
                  山东万润集团
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-primary-accent">
                  Shandong Wanrun Group
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              中国最大的地板建材生产企业之一。
              <br/>
              OEM代工、外贸出口、地产工程、工程实施。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">快速链接</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary-accent transition-colors">集团介绍</a></li>
              <li><a href="#business" className="hover:text-primary-accent transition-colors">产品品类</a></li>
              <li><a href="#news" className="hover:text-primary-accent transition-colors">发展历程</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">联系我们</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-accent mt-0.5" />
                <span>
                  中国·山东省菏泽市巨野县<br />
                  （各子公司分布于巨野不同园区）
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-accent" />
                <span>+86 0530-XXXXXXX</span> 
                {/* Note: Specific phone number not found in OCR, using placeholder */}
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-accent" />
                <span>info@wanrungroup.com</span>
                 {/* Note: Specific email not found in OCR, using placeholder */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Shandong Wanrun Group. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500">NFE级认证</span>
            <span className="text-gray-500">国际标准品质认证</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;