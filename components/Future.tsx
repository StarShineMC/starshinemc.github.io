import React from 'react';
import { Compass, Hammer, Sword, BookOpen } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Future: React.FC = () => {
  return (
    <section id="future" className="py-16 bg-white dark:bg-slate-900 relative border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <RevealOnScroll animation="fade-in-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-400/10 text-yellow-700 dark:text-yellow-400 text-xs font-medium mb-4">
                <Compass className="w-3 h-3" />
                <span>未来展望 Roadmap</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                不止于建筑 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-500">
                  探索无限可能
                </span>
              </h2>
              
              <p className="text-slate-600 dark:text-gray-400 text-base mb-6 leading-relaxed">
                目前 StarShine 处于<strong>建筑服务器</strong>阶段，我们专注于为玩家提供广阔的创作空间与丰富的建筑工具。但这仅仅是开始。
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg h-fit">
                    <Sword className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">RPG 剧情冒险</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs">计划引入宏大的世界观剧情与副本挑战，让每一位玩家都能成为故事的主角。</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg h-fit">
                    <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">硬核生存模式</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs">回归本质的生存体验，不仅有原汁原味的荒野求生，更有特色的领地与经济系统。</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                 <p className="text-slate-500 dark:text-gray-300 text-sm italic border-l-4 border-yellow-400 pl-4">
                   “我们致力于不断丰富游戏体验，每一块方块都承载着未来的希望。诚邀您积极参与，共同建设 StarShine 的未来！”
                 </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Visual/Cards */}
          <RevealOnScroll animation="fade-in-right" delay={200}>
            <div className="relative">
               {/* Decorative gradient blob */}
               <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-purple-500/20 rounded-full blur-3xl transform rotate-12"></div>
               
               <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                       <Hammer className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mb-3" />
                       <h4 className="font-bold text-slate-900 dark:text-white text-sm">当前阶段</h4>
                       <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1">创造模式 / 建筑比赛 / 地皮系统</p>
                    </div>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl opacity-50">
                       <div className="h-2 w-10 bg-slate-300 dark:bg-gray-600 rounded mb-3"></div>
                       <div className="h-3 w-16 bg-slate-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="bg-white/50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl opacity-50">
                       <div className="h-2 w-10 bg-slate-300 dark:bg-gray-600 rounded mb-3"></div>
                       <div className="h-3 w-16 bg-slate-300 dark:bg-gray-600 rounded"></div>
                     </div>
                     <div className="bg-gradient-to-br from-indigo-800 to-slate-900 dark:from-indigo-900 dark:to-slate-900 p-5 rounded-2xl border border-indigo-500/30 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                       <Compass className="w-6 h-6 text-indigo-400 mb-3" />
                       <h4 className="font-bold text-white text-sm">下一阶段</h4>
                       <p className="text-[10px] text-gray-300 dark:text-gray-400 mt-1">生存服开启 / RPG内测 / 更多玩法</p>
                    </div>
                  </div>
               </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Future;