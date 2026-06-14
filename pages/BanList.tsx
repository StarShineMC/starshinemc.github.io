import React, { useEffect, useState } from 'react';
import { Search, Ban, Clock, AlertCircle, ArrowLeft, ShieldOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

interface BanEntry {
  player: string;
  reason: string;
  date: string;
}

// TODO: 替换为真实 API 地址
const API_URL = 'https://api.8bc.top/bans';

const BanList: React.FC = () => {
  const [bans, setBans] = useState<BanEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchBans = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setBans(data.bans ?? data);
      } catch (err) {
        console.error('Failed to fetch ban list', err);
        setError('封禁数据加载失败，请稍后再试。');
      } finally {
        setLoading(false);
      }
    };

    fetchBans();
  }, []);

  const filtered = bans.filter(
    (b) =>
      b.player.toLowerCase().includes(search.toLowerCase()) ||
      b.reason.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white transition-colors duration-300">
      {/* Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <RevealOnScroll animation="fade-in-up">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-yellow-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <ShieldOff className="w-8 h-8 text-red-400" />
            <h1 className="text-3xl md:text-4xl font-bold">封禁名单</h1>
          </div>
          <p className="text-gray-400 text-sm max-w-xl">
            以下为服务器封禁记录，所有处罚均经过管理团队审核。如有疑问请联系管理员。
          </p>
        </RevealOnScroll>

        {/* Search */}
        <RevealOnScroll animation="fade-in-up" delay={100}>
          <div className="mt-8 relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="搜索玩家名或封禁原因..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800/60 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/30 transition-all"
            />
          </div>
        </RevealOnScroll>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-400 text-sm">加载中...</span>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <AlertCircle className="w-10 h-10 text-red-400" />
            <span className="text-gray-400 text-sm">{error}</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Ban className="w-10 h-10 text-gray-600" />
            <span className="text-gray-400 text-sm">
              {search ? '没有匹配的封禁记录' : '暂无封禁记录'}
            </span>
          </div>
        ) : (
          <>
            <p className="text-gray-500 text-xs mb-4">
              共 {filtered.length} 条记录
              {search && ` · 搜索 "${search}"`}
            </p>

            <div className="space-y-3">
              {filtered.map((entry, index) => (
                <RevealOnScroll key={index} delay={Math.min(index * 50, 300)} animation="fade-in-up">
                  <div className="bg-slate-800/40 border border-white/5 rounded-xl p-4 sm:p-5 hover:border-red-400/20 hover:bg-slate-800/60 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      {/* Player Name */}
                      <div className="flex items-center gap-3 sm:min-w-[180px]">
                        <img
                          src={`https://mc-heads.net/avatar/${entry.player}/40`}
                          alt={entry.player}
                          className="w-9 h-9 rounded-lg bg-slate-700"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <span className="font-bold text-white group-hover:text-yellow-400 transition-colors text-sm sm:text-base">
                          {entry.player}
                        </span>
                      </div>

                      {/* Reason */}
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-300 text-sm">{entry.reason}</span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:min-w-[120px] sm:justify-end">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(entry.date).toLocaleDateString('zh-CN')}</span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default BanList;
