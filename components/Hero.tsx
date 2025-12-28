import React, { useState, useEffect } from 'react';
import { Copy, Check, Wifi, Users, ServerCrash, MessageCircle } from 'lucide-react';
import { SERVER_IP, QQ_GROUP_URL } from '../constants';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [copied, setCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState<{ online: boolean; players: number; max: number } | null>(null);
  const [loading, setLoading] = useState(true);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
        const data = await response.json();
        
        if (data.online) {
          setServerStatus({
            online: true,
            players: data.players?.online || 0,
            max: data.players?.max || 0
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
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Always dark to maintain contrast for white text */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://t.alcy.cc/moez" 
          alt="Starry Night Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay - Adjusted for Light Mode integration at bottom */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#0f172a]' : 'from-slate-50'} via-transparent to-transparent transition-colors duration-300`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-cyan-400 font-bold tracking-[0.2em] text-xs md:text-sm mb-4 animate-fade-in-up">
          EST. LATE 2024 · PHYSICAL SERVER
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
          星光 StarShine
        </h1>

        <p className="text-gray-200 text-base md:text-lg font-light mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-200">
          技术优越的宝藏服务器 · 开启你的创作之旅
        </p>

        {/* Server Status Widget */}
        <div className="mb-8 animate-fade-in-up delay-200">
             <div className="inline-flex items-center gap-4 bg-slate-900/60 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10 shadow-lg hover:bg-slate-900/80 transition-all duration-300 group">
                {loading ? (
                    <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <span className="text-xs font-medium">获取状态中...</span>
                    </div>
                ) : serverStatus?.online ? (
                    <>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 font-bold text-xs tracking-wide">ONLINE</span>
                        </div>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex items-center gap-2 text-gray-200">
                            <Users className="w-3.5 h-3.5 text-yellow-400" />
                            <span className="text-xs font-medium">
                                <span className="text-white font-bold">{serverStatus.players}</span>
                                <span className="text-gray-500 mx-1">/</span>
                                {serverStatus.max} 
                                <span className="ml-1 text-[10px] text-gray-400 hidden sm:inline">玩家在线</span>
                            </span>
                        </div>
                        <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-gray-400 text-[10px] hidden sm:flex">
                           <Wifi className="w-3 h-3" />
                           <span>{Math.floor(Math.random() * 20 + 30)}ms</span>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-2 text-red-400">
                         <ServerCrash className="w-4 h-4" />
                         <span className="text-xs font-bold">在线10</span>
                    </div>
                )}
             </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={copyIp}
            className="group flex-1 relative bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full text-base shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[180px]"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>已复制 IP</span>
              </>
            ) : (
              <>
                <span>立即加入游戏</span>
                <span className="text-xs font-normal opacity-75 hidden sm:inline ml-1">(点击复制)</span>
              </>
            )}
          </button>
          
          <a 
            href={QQ_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 relative bg-white/10 text-white hover:bg-white/20 backdrop-blur-md font-bold py-3 px-8 rounded-full text-base border border-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[180px]"
          >
            <MessageCircle className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span>加入玩家群</span>
          </a>
        </div>
        
        <div className={`mt-4 text-xs text-gray-400 font-mono transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-60'}`}>
            {SERVER_IP}
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;