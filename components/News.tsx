import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { NEWS_UPDATES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const News: React.FC = () => {
  return (
    <section id="news" className="py-16 bg-slate-50 dark:bg-slate-900/50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                最新动态
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm">
                了解服务器的最新公告、更新日志与活动信息。
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-medium text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors">
              查看更多 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_UPDATES.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 150} animation="fade-in-up">
              <div 
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                {item.image && (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-5 flex flex-col flex-grow">
                  {!item.image && (
                     <div className="mb-4">
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-gray-300 text-xs font-bold px-2 py-1 rounded">
                        {item.category}
                      </span>
                     </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-slate-400 dark:text-gray-500 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                    {item.content}
                  </p>
                  
                  <div className="pt-4 mt-auto border-t border-slate-100 dark:border-white/5">
                    <span className="text-xs font-medium text-slate-500 dark:text-gray-500 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors flex items-center gap-1">
                      阅读详情
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
          
          {/* Mobile "View More" button */}
          <RevealOnScroll delay={300} animation="fade-in-up">
            <div className="md:hidden mt-4 flex justify-center">
               <button className="flex items-center gap-2 text-sm font-medium text-yellow-600 dark:text-yellow-400">
                  查看更多 <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default News;