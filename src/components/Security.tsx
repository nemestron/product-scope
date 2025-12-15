interface SecurityData {
  score: number;
  issues: Array<{ type: string; description: string; severity: 'low' | 'medium' | 'high' }>;
  isHTTPS: boolean;
  hasCSP: boolean;
  mixedContentCount: number;
  insecureFormCount: number;
  insecureScriptCount: number;
}

interface SecurityProps {
  data: SecurityData | null;
}

export default function Security({ data }: SecurityProps) {
  if (!data) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>Security</h2>
        <p className='text-muted'>No security data available</p>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      default: return 'text-muted';
    }
  };

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>Security</h2>
      
      <div className='bg-card p-4 rounded border animate-fadeIn'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-lg font-medium'>Security Score</span>
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
          <h3 className='text-sm font-medium text-muted mb-2'>Security Features</h3>
          <div className='grid grid-cols-2 gap-2 text-sm'>
            <div className='flex items-center space-x-2'>
              <span className={data.isHTTPS ? 'text-success' : 'text-error'}>
                {data.isHTTPS ? '✓' : '✗'}
              </span>
              <span>HTTPS</span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className={data.hasCSP ? 'text-success' : 'text-error'}>
                {data.hasCSP ? '✓' : '✗'}
              </span>
              <span>Content Security Policy</span>
            </div>
          </div>
        </div>
        
        {data.issues.length > 0 && (
          <div className='mt-4 space-y-2'>
            <h3 className='text-sm font-medium text-muted mb-2'>Security Issues</h3>
            {data.issues.map((issue, index) => (
              <div key={index} className='bg-error bg-opacity-10 p-3 rounded border border-error'>
                <div className='flex items-center justify-between mb-1'>
                  <p className='text-sm font-medium text-error'>{issue.type}</p>
                  <span className={	ext-xs px-2 py-1 rounded }>
                    {issue.severity.toUpperCase()}
                  </span>
                </div>
                <p className='text-xs text-muted'>{issue.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
