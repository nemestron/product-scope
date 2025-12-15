interface SocialData {
  integrations: Array<{ platform: string; type: string; found: boolean }>;
  totalPlatforms: number;
  hasOpenGraph: boolean;
  hasTwitterCards: boolean;
  shareButtonCount: number;
  socialScore: number;
}

interface SocialProps {
  data: SocialData | null;
}

export default function SocialMedia({ data }: SocialProps) {
  if (!data) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>Social Media</h2>
        <p className='text-muted'>No social media data available</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>Social Media Integration</h2>
      
      <div className='bg-card p-4 rounded border animate-fadeIn'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-lg font-medium'>Social Score</span>
          <div className='text-right'>
            <span className='text-2xl font-bold text-accent'>{data.socialScore}</span>
            <span className='text-sm text-muted'>/100</span>
          </div>
        </div>
        
        <div className='w-full bg-gray rounded-full h-2 mb-4'>
          <div 
            className='h-2 rounded-full transition-all duration-500 bg-accent'
            style={{ width: ${data.socialScore}% }}
          />
        </div>
        
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-muted mb-2'>Social Features</h3>
          <div className='grid grid-cols-2 gap-2 text-sm mb-3'>
            <div className='flex items-center space-x-2'>
              <span className={data.hasOpenGraph ? 'text-success' : 'text-error'}>
                {data.hasOpenGraph ? '✓' : '✗'}
              </span>
              <span>Open Graph</span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className={data.hasTwitterCards ? 'text-success' : 'text-error'}>
                {data.hasTwitterCards ? '✓' : '✗'}
              </span>
              <span>Twitter Cards</span>
            </div>
          </div>
          
          <div className='text-sm text-muted mb-3'>
            {data.shareButtonCount} share buttons detected
          </div>
          
          {data.integrations.length > 0 && (
            <div>
              <h3 className='text-sm font-medium text-muted mb-2'>Detected Platforms</h3>
              <div className='space-y-2'>
                {data.integrations.map((integration, index) => (
                  <div key={index} className='flex items-center justify-between p-2 bg-gray rounded'>
                    <div className='flex items-center space-x-2'>
                      <span className='text-success'>✓</span>
                      <span className='font-medium'>{integration.platform}</span>
                    </div>
                    <span className='text-xs text-muted bg-gray px-2 py-1 rounded'>
                      {integration.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
