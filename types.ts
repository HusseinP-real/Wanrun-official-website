import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface BusinessItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
  summary?: string;
  imageUrl?: string;
}