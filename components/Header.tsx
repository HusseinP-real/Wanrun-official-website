import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, Layers } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '集团介绍', href: '#about' },
  { label: '产品系列', href: '#business' },
  { label: '发展历程', href: '#news' },
  { label: '工厂展示', href: '#culture' },
  { label: '联系我们', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 z-50">
            <div className={`w-10 h-10 rounded flex items-center justify-center ${isScrolled || isMobileMenuOpen ? 'bg-primary text-primary-accent' : 'bg-white text-primary-accent'}`}>
              <Layers size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`}>
                山东万润集团
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled || isMobileMenuOpen ? 'text-primary-accent' : 'text-gray-300'}`}>
                Shandong Wanrun Group
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? 'text-gray-700 hover:text-primary-accent' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-800" size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-gray-800 hover:text-primary-accent"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;