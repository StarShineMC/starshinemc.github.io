import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              星光管理组
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
              每一位成员都在用技术与热爱守护着这片星空，打造温馨和谐的游戏环境。
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <RevealOnScroll key={index} delay={index * 50} animation="fade-in-up">
              <div className="bg-slate-50 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 dark:border-white/5 hover:border-yellow-400/50 transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-32 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-900">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 object-cover bg-slate-200 dark:bg-slate-700 relative z-10 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-16 pb-8 px-6 text-center flex-grow flex flex-col items-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">{member.name}</h3>
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-400/10 text-yellow-700 dark:text-yellow-400 text-xs px-3 py-1 rounded-full font-bold mb-4 border border-yellow-200 dark:border-yellow-400/20">
                    {member.role}
                  </span>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;