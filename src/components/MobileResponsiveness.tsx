interface MobileData {
  score: number;
  issues: Array<{ type: string; description: string }>;
  hasViewport: boolean;
  responsiveImageCount: number;
  totalImages: number;
  hasMediaQueries: boolean;
  hasModernLayout: boolean;
}

interface MobileProps {
  data: MobileData | null;
}

export default function MobileResponsiveness({ data }: MobileProps) {
  if (!data) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>Mobile Responsiveness</h2>
        <p className='text-muted'>No mobile data available</p>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>Mobile Responsiveness</h2>
      
      <div className='bg-card p-4 rounded border animate-fadeIn'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-lg font-medium'>Mobile Score</span>
          <span className={	ext-2xl font-bold }>
            {data.score}%
          </span>
        </div>
        
        <div className='w-full bg-gray rounded-full h-2 mb-4'>
          <div 
            className={h-2 rounded-full transition-all duration-500 }
            style={{ width: ${data.score}% }}
          />
        </div>
        
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-muted mb-2'>Mobile Features</h3>
          <div className='grid grid-cols-2 gap-2 text-sm'>
            <div className='flex items-center space-x-2'>
              <span className={data.hasViewport ? 'text-success' : 'text-error'}>
                {data.hasViewport ? '✓' : '✗'}
              </span>
              <span>Viewport Meta</span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className={data.hasMediaQueries ? 'text-success' : 'text-error'}>
                {data.hasMediaQueries ? '✓' : '✗'}
              </span>
              <span>Media Queries</span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className={data.hasModernLayout ? 'text-success' : 'text-error'}>
                {data.hasModernLayout ? '✓' : '✗'}
              </span>
              <span>Modern Layout</span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className={data.responsiveImageCount > 0 ? 'text-success' : 'text-error'}>
                {data.responsiveImageCount > 0 ? '✓' : '✗'}
              </span>
              <span>Responsive Images</span>
            </div>
          </div>
          
          <div className='mt-3 text-sm text-muted'>
            {data.responsiveImageCount} of {data.totalImages} images are responsive
          </div>
        </div>
        
        {data.issues.length > 0 && (
          <div className='mt-4 space-y-2'>
            <h3 className='text-sm font-medium text-muted mb-2'>Issues Found</h3>
            {data.issues.map((issue, index) => (
              <div key={index} className='bg-error bg-opacity-10 p-2 rounded border border-error'>
                <p className='text-sm font-medium text-error'>{issue.type}</p>
                <p className='text-xs text-muted mt-1'>{issue.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
