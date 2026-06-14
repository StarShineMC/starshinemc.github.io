import React from 'react';
import { SOCIALS } from '../constants';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="connect" className="bg-slate-100 dark:bg-[#0b1120] pt-16 pb-8 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
              <span className="font-bold text-xl text-slate-800 dark:text-white">StarShine</span>
            </div>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              StarShine 是一个成立于2024年的实体公网Minecraft服务器。我们追求极致的性能与友好的社区氛围，欢迎每一位热爱创造的玩家加入。
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm md:text-center">
              <li><a href="https://wiki.8bc.top/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">服务器规则</a></li>
              <li><a href="https://wiki.8bc.top/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">封禁查询</a></li>
              <li><a href="https://wiki.8bc.top/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">服务器文档</a></li>
              <li><a href="https://qm.qq.com/q/FKll6UwOE8" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">玩家社区</a></li>
            </ul>
          </div>

          {/* Social / Join */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4">关注我们</h4>
            <div className="flex gap-4">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-yellow-400 hover:text-black shadow-sm transition-all duration-300"
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <button className="mt-6 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white text-sm py-2 px-6 rounded-lg transition-colors border border-slate-300 dark:border-white/10 w-full md:w-auto">
              申请加入管理团队
            </button>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-gray-500 text-xs">
            &copy; 2026 StarShine Server. All rights reserved. Not affiliated with Mojang Studios.
          </p>
          <div className="flex gap-4 text-xs text-slate-500 dark:text-gray-500">
            <span>隐私政策</span>
            <span>服务条款</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;