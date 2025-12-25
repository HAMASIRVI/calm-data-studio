import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <label className="theme-toggle-switch">
      <input
        type="checkbox"
        checked={!isDark}
        onChange={toggleTheme}
        className="theme-toggle-input"
      />
      <span className="theme-toggle-slider">
        {/* Sun */}
        <svg className="theme-toggle-sun" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g className="theme-toggle-rays">
            <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
        
        {/* Moon */}
        <svg className="theme-toggle-moon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="currentColor"
          />
        </svg>

        {/* Stars */}
        <div className="theme-toggle-stars">
          <svg className="theme-toggle-star theme-toggle-star-1" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
          </svg>
          <svg className="theme-toggle-star theme-toggle-star-2" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
          </svg>
          <svg className="theme-toggle-star theme-toggle-star-3" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
          </svg>
        </div>

        {/* Clouds */}
        <div className="theme-toggle-clouds">
          <svg className="theme-toggle-cloud theme-toggle-cloud-1" viewBox="0 0 64 40" fill="currentColor">
            <path d="M52,20A12,12,0,0,0,30,12,16,16,0,1,0,16,40H52A12,12,0,0,0,52,20Z" />
          </svg>
          <svg className="theme-toggle-cloud theme-toggle-cloud-2" viewBox="0 0 64 40" fill="currentColor">
            <path d="M52,20A12,12,0,0,0,30,12,16,16,0,1,0,16,40H52A12,12,0,0,0,52,20Z" />
          </svg>
        </div>
      </span>
    </label>
  );
};

export default ThemeToggle;
