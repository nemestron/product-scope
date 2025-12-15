interface TabNavigatorProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs?: Array<{ id: string; label: string }>;
}

export default function TabNavigator({ activeTab, onTabChange, tabs }: TabNavigatorProps) {
  const defaultTabs = [
    { id: 'tech', label: 'Tech Stack' },
    { id: 'seo', label: 'SEO' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'performance', label: 'Performance' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'security', label: 'Security' },
    { id: 'social', label: 'Social' }
  ];

  const tabsToUse = tabs || defaultTabs;

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const currentIndex = tabsToUse.findIndex(tab => tab.id === activeTab);
      let newIndex;
      
      if (e.key === 'ArrowLeft') {
        newIndex = currentIndex === 0 ? tabsToUse.length - 1 : currentIndex - 1;
      } else if (e.key === 'ArrowRight') {
        newIndex = currentIndex === tabsToUse.length - 1 ? 0 : currentIndex + 1;
      }
      
      if (newIndex !== undefined) {
        onTabChange(tabsToUse[newIndex].id);
      }
    }
  };

  return (
    <div 
      className='flex space-x-4 border-b border-gray overflow-x-auto' 
      onKeyDown={handleKeyDown}
      role='tablist'
    >
      {tabsToUse.map((tab, index) => (
        <button
          key={tab.id}
          id={	ab-}
          onClick={() => onTabChange(tab.id)}
          className={
            'pb-2 px-1 text-sm font-medium transition-colors whitespace-nowrap ' +
            (activeTab === tab.id
              ? 'tab-active'
              : 'tab-inactive hover-tab')
          }
          role='tab'
          aria-selected={activeTab === tab.id}
          tabIndex={activeTab === tab.id ? 0 : -1}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
