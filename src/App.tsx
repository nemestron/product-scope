import { useState, useEffect } from 'react';
import TabNavigator from './components/TabNavigator';
import TechStack from './components/TechStack';
import SEOInsights from './components/SEOInsights';
import Accessibility from './components/Accessibility';
import Performance from './components/Performance';
import MobileResponsiveness from './components/MobileResponsiveness';
import Security from './components/Security';
import SocialMedia from './components/SocialMedia';
import LoadingSpinner from './components/LoadingSpinner';

interface AnalysisData {
  tech: string[] | null;
  seo: any;
  accessibility: any;
  performance: any;
  mobile: any;
  security: any;
  social: any;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('tech');
  const [data, setData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('productscope-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('productscope-theme', newTheme);
  };

  useEffect(() => {
    const analyzePage = async () => {
      try {
        setLoading(true);
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        if (!tab.id) {
          throw new Error('No active tab found');
        }

        const response = await chrome.tabs.sendMessage(tab.id, { action: 'analyze' });
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Analysis failed');
      } finally {
        setLoading(false);
      }
    };

    analyzePage();
  }, []);

  const tabs = [
    { id: 'tech', label: 'Tech Stack' },
    { id: 'seo', label: 'SEO' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'performance', label: 'Performance' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'security', label: 'Security' },
    { id: 'social', label: 'Social' }
  ];

  return (
    <div className='w-96 p-4 min-h-600px bg-dark text-light relative'>
      {/* Theme Toggle */}
      <button 
        className='theme-toggle'
        onClick={toggleTheme}
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            <circle cx='12' cy='12' r='5'/>
            <line x1='12' y1='1' x2='12' y2='3'/>
            <line x1='12' y1='21' x2='12' y2='23'/>
            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'/>
            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'/>
            <line x1='1' y1='12' x2='3' y2='12'/>
            <line x1='21' y1='12' x2='23' y2='12'/>
            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'/>
            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'/>
          </svg>
        ) : (
          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'/>
          </svg>
        )}
      </button>

      <h1 className='text-xl font-bold mb-4 animate-fadeIn'>ProductScope</h1>
      
      {error && (
        <div className='mb-4 p-3 bg-error border border-error rounded animate-slideIn'>
          <p className='text-sm text-error'>{error}</p>
        </div>
      )}

      <TabNavigator activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='mt-4 animate-fadeIn'>
          {activeTab === 'tech' && <TechStack data={data?.tech || null} />}
          {activeTab === 'seo' && <SEOInsights data={data?.seo} />}
          {activeTab === 'accessibility' && <Accessibility data={data?.accessibility} />}
          {activeTab === 'performance' && <Performance data={data?.performance} />}
          {activeTab === 'mobile' && <MobileResponsiveness data={data?.mobile} />}
          {activeTab === 'security' && <Security data={data?.security} />}
          {activeTab === 'social' && <SocialMedia data={data?.social} />}
        </div>
      )}
    </div>
  );
}
