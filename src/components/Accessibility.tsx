interface AccessibilityData {
  score?: number;
  issues?: Array<{ type: string; description: string; element: string }>;
  summary?: any;
}

interface AccessibilityProps {
  data: AccessibilityData | null;
}

export default function Accessibility({ data }: AccessibilityProps) {
  if (!data) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>Accessibility</h2>
        <p className='text-muted'>No accessibility data available</p>
      </div>
    );
  }

  const score = data.score || 0;
  const issues = data.issues || [];

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>Accessibility</h2>
      
      <div className='bg-card p-6 rounded border animate-fadeIn'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-lg font-medium'>Overall Score</span>
          <div className='flex items-center space-x-2'>
            <span className={
              'text-2xl font-bold ' + 
              (score >= 80 ? 'text-success' : 
              score >= 60 ? 'text-warning' : 
              'text-error')
            }>
              {score}%
            </span>
            <span className={
              'text-sm px-2 py-1 rounded ' +
              (score >= 80 ? 'bg-success text-white' : 
              score >= 60 ? 'bg-warning text-white' : 
              'bg-error text-white')
            }>
              {score >= 80 ? 'Excellent' : 
               score >= 60 ? 'Good' : 
               'Needs Improvement'}
            </span>
          </div>
        </div>
        
        <div className='w-full bg-gray rounded-full h-3 mb-4 relative overflow-hidden'>
          <div 
            className={
              'h-3 rounded-full transition-all duration-700 ' +
              (score >= 80 ? 'bg-success' : 
              score >= 60 ? 'bg-warning' : 
              'bg-error')
            }
            style={{ width: ${score}% }}
          >
            <div className='absolute inset-0 w-full h-3 rounded-full overflow-hidden'>
              <div className='absolute inset-0 w-full h-3 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse' style={{ animationDuration: '3s' }}></div>
            </div>
          </div>
        </div>
        
        <div className='mt-4'>
          <h3 className='text-sm font-medium text-muted mb-2'>Score Breakdown</h3>
          <div className='grid grid-cols-2 gap-2 text-sm'>
            <div className='flex justify-between'>
              <span>Alt Text</span>
              <div className='flex items-center space-x-1'>
                <div className='w-20 bg-gray rounded-full h-2'>
                  <div 
                    className='h-2 bg-success rounded-full transition-all duration-700'
                    style={{ width: ${Math.max(0, 100 - ((data.summary?.imagesWithoutAlt || 0) / (data.summary?.totalImages || 1)) * 100}% }}
                  />
                </div>
              </div>
              <span className='text-success font-medium'>{100 - Math.round(((data.summary?.imagesWithoutAlt || 0) / (data.summary?.totalImages || 1)) * 100)}%</span>
            </div>
            
            <div className='flex justify-between'>
              <span>Form Labels</span>
              <div className='flex items-center space-x-1'>
                <div className='w-20 bg-gray rounded-full h-2'>
                  <div 
                        className='h-2 bg-warning rounded-full transition-all duration-700'
                        style={{ width: ${Math.max(0, 100 - ((data.summary?.inputsWithoutLabels || 0) / (data.summary?.totalInputs || 1)) * 100}% }}
                      />
                  </div>
                </div>
                <span className='text-warning font-medium'>{Math.round(((data.summary?.inputsWithoutLabels || 0) / (data.summary?.totalInputs || 1)) * 100)}%</span>
              </div>
            </div>
            
            <div className='flex justify-between'>
              <span>Landmarks</span>
              <div className='flex items-center space-x-1'>
                <div className='w-20 bg-gray rounded-full h-2'>
                  <div 
                        className='h-2 bg-accent rounded-full transition-all duration-700'
                        style={{ width: '70%' }}
                  />
                </div>
              </div>
              <span className='text-accent font-medium'>70%</span>
            </div>
          </div>
        </div>
        
        {issues.length > 0 && (
          <div className='mt-4 space-y-2'>
            <h3 className='text-sm font-medium text-muted mb-2'>Issues Found</h3>
            <div className='space-y-2'>
              {issues.map((issue, index) => (
                <div key={index} className='bg-error bg-opacity-10 p-3 rounded border border-error animate-slideIn'>
                  <div className='flex items-center justify-between mb-1'>
                    <p className='text-sm font-medium text-error'>{issue.type}</p>
                    <span className='text-xs px-2 py-1 bg-gray text-white rounded'>
                      {issue.severity || 'low'}
                    </span>
                  </div>
                  <p className='text-xs text-muted mt-1'>{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
