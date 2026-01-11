import React, { useState, useEffect } from 'react';
import { Copy, Check, Wifi, Users, ServerCrash, MessageCircle } from 'lucide-react';
import { SERVER_IP, QQ_GROUP_URL } from '../constants';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [copied, setCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState<{ online: boolean; players: number; max: number; version?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // 分割 IP 和 端口
        const parts = SERVER_IP.split(':');
        const host = parts[0];
        const port = parts[1] || '25565';
        
        // 使用 minebbs API，增加 type=je 确保正确解析 Java 版 1.21.4+ 协议
        const url = `https://motd.minebbs.com/api/status?ip=${host}&port=${port}&stype=je`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        // 匹配示例中的 {"status":"online", "players":{"online":1,"max":69}, ...}
        if (data && data.status === 'online') {
          setServerStatus({
            online: true,
            players: typeof data.players?.online === 'number' ? data.players.online : 0,
            max: typeof data.players?.max === 'number' ? data.players.max : 0,
            version: data.version || '未知版本'
          });
        } else {
          setServerStatus({ online: false, players: 0, max: 0 });
        }
      } catch (error) {
        console.error("Failed to fetch server status", error);
        setServerStatus({ online: false, players: 0, max: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // 30秒更新一次
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - 使用高质量星空背景，增强 StarShine 主题感 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://t.alcy.cc/moez" 
          alt="Starry Sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#0f172a]' : 'from-slate-50'} via-transparent to-transparent transition-colors duration-300`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-yellow-400 font-bold tracking-[0.2em] text-xs md:text-sm mb-4 animate-fade-in-up">
          EST. 2024 · 高性能物理机 · 建筑启航
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
          星光 <span className="text-yellow-400">StarShine</span>
        </h1>

        <p className="text-gray-200 text-base md:text-lg font-light mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-200">
          技术领先的实体公网宝藏服 · 目前处于建筑阶段
        </p>

        {/* Server Status Widget */}
        <div className="mb-8 animate-fade-in-up delay-200 min-h-[50px] flex items-center">
             <div className="inline-flex items-center gap-4 bg-slate-900/60 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10 shadow-lg hover:bg-slate-900/80 transition-all duration-300 group">
                {loading ? (
                    <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium tracking-wide uppercase">探测状态中...</span>
                    </div>
                ) : serverStatus?.online ? (
                    <>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 font-bold text-xs tracking-wide">服务器在线</span>
                        </div>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex items-center gap-2 text-gray-200">
                            <Users className="w-3.5 h-3.5 text-yellow-400" />
                            <span className="text-xs font-medium">
                                <span className="text-white font-bold">{serverStatus.players}</span>
                                <span className="text-gray-500 mx-1">/</span>
                                {serverStatus.max} 
                                <span className="ml-1 text-[10px] text-gray-400 hidden sm:inline">玩家在场</span>
                            </span>
                        </div>
                        {serverStatus.version && (
                          <>
                            <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
                            <div className="flex items-center gap-2 text-gray-400 text-[10px] hidden sm:flex">
                               <Wifi className="w-3 h-3 text-cyan-400" />
                               <span>{serverStatus.version}</span>
                            </div>
                          </>
                        )}
                    </>
                ) : (
                    <div className="flex items-center gap-2 text-red-400">
                         <ServerCrash className="w-4 h-4" />
                         <span className="text-xs font-bold uppercase tracking-widest">服务器离线 (维护)</span>
                    </div>
                )}
             </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={copyIp}
            className="group flex-1 relative bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold py-3.5 px-8 rounded-full text-base shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>地址已复制</span>
              </>
            ) : (
              <>
                <span>加入星光世界</span>
                <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </button>
          
          <a 
            href={QQ_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 relative bg-white/10 text-white hover:bg-white/20 backdrop-blur-md font-bold py-3.5 px-8 rounded-full text-base border border-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            <span>官方玩家群</span>
          </a>
        </div>
        
        <div className={`mt-6 text-xs text-gray-400 font-mono transition-opacity duration-300 flex items-center gap-2 ${copied ? 'opacity-100' : 'opacity-60'}`}>
            <span className="px-2 py-0.5 bg-white/5 rounded">IP: {SERVER_IP}</span>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-yellow-400/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;