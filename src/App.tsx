import { useState, useEffect } from 'react';
import TabNavigator from './components/TabNavigator';
import TechStack from './components/TechStack';
import SEOInsights from './components/SEOInsights';
import Accessibility from './components/Accessibility';
import LoadingSpinner from './components/LoadingSpinner';

interface AnalysisData {
  tech: string[] | null;
  seo: any;
  accessibility: any;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('tech');
  const [data, setData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className='w-96 p-4 min-h-600px bg-dark text-light'>
      <h1 className='text-xl font-bold mb-4'>ProductScope</h1>
      
      {error && (
        <div className='mb-4 p-3 bg-error border border-error rounded bg-opacity-50'>
          <p className='text-sm text-error'>{error}</p>
        </div>
      )}

      <TabNavigator activeTab={activeTab} onTabChange={setActiveTab} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='mt-4'>
          {activeTab === 'tech' && <TechStack data={data?.tech || null} />}
          {activeTab === 'seo' && <SEOInsights data={data?.seo} />}
          {activeTab === 'accessibility' && <Accessibility data={data?.accessibility} />}
        </div>
      )}
    </div>
  );
}
