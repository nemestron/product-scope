interface TabNavigatorProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigator({ activeTab, onTabChange }: TabNavigatorProps) {
  const tabs = [
    { id: 'tech', label: 'Tech Stack' },
    { id: 'seo', label: 'SEO' },
    { id: 'accessibility', label: 'Accessibility' }
  ];

  return (
    <div className='flex space-x-6 border-b border-gray'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={
            'pb-2 px-1 text-sm font-medium border-b-2 ' +
            (activeTab === tab.id
              ? 'tab-active'
              : 'tab-inactive hover-tab')
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
