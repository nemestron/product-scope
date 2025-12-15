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

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>Accessibility</h2>
      
      <div className='bg-card p-6 rounded border border-gray'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-lg font-medium'>Overall Score</span>
          <span className={
            'text-2xl font-bold ' + 
            (score >= 80 ? 'text-success' : 
            score >= 60 ? 'text-warning' : 
            'text-error')
          }>
            {score}%
          </span>
        </div>
        <div className='w-full bg-gray rounded-full h-3'>
          <div 
            className={
              'h-3 rounded-full transition-all duration-500 ' +
              (score >= 80 ? 'bg-success' : 
              score >= 60 ? 'bg-warning' : 
              'bg-error')
            }
            style={{ width: score + '%' }}
          />
        </div>
        <div className='mt-3 text-center'>
          <span className={
            'text-sm font-medium ' +
            (score >= 80 ? 'text-success' : 
            score >= 60 ? 'text-warning' : 
            'text-error')
          }>
            {score >= 80 ? 'Excellent' : 
             score >= 60 ? 'Good' : 
             'Needs Improvement'}
          </span>
        </div>
      </div>
    </div>
  );
}
