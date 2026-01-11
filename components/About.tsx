import React from 'react';
import { FEATURES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-slate-50 dark:bg-[#0f172a] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              服务器特色
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
              致力于打造一个长期稳定、充满创造力的Minecraft社区。
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <RevealOnScroll key={index} delay={index * 100} animation="scale-in">
                <div 
                  className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-yellow-500/30 dark:hover:border-yellow-400/30 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-400/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-xs">
                    {feature.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;