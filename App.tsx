import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Future from './components/Future';
import Team from './components/Team';
import Footer from './components/Footer';
import BanList from './pages/BanList';

function App() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDark(false);
    }
    document.body.classList.add('opacity-100');
    document.body.classList.remove('opacity-0');
  }, []);

  // Update HTML class when theme changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0f172a] text-white' : 'bg-slate-50 text-slate-900'} selection:bg-yellow-400 selection:text-black`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} />
              <main>
                <Hero isDark={isDark} />
                <About />
                <Future />
                <Team />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/banlist" element={<BanList />} />
      </Routes>
    </div>
  );
}

export default App;