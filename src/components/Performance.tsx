interface PerformanceData {
  loadTime: number;
  totalSize: number;
  resourceCount: {
    scripts: number;
    stylesheets: number;
    images: number;
    fonts: number;
  };
  domNodes: number;
  maxDepth: number;
  grade: string;
}

interface PerformanceProps {
  data: PerformanceData | null;
}

export default function Performance({ data }: PerformanceProps) {
  if (!data) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>Performance</h2>
        <p className='text-muted'>No performance data available</p>
      </div>
    );
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-success';
      case 'B': return 'text-warning';
      case 'C': return 'text-warning';
      case 'D': return 'text-error';
      default: return 'text-error';
    }
  };

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>Performance</h2>
      
      <div className='bg-card p-4 rounded border animate-fadeIn'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-lg font-medium'>Overall Grade</span>
          <span className={	ext-3xl font-bold }>
            {data.grade}
          </span>
        </div>
        
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-sm text-muted'>Load Time</span>
              <span className='text-sm font-medium'>{data.loadTime}ms</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-sm text-muted'>Page Size</span>
              <span className='text-sm font-medium'>{data.totalSize}KB</span>
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-sm text-muted'>DOM Nodes</span>
              <span className='text-sm font-medium'>{data.domNodes.toLocaleString()}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-sm text-muted'>Max Depth</span>
              <span className='text-sm font-medium'>{data.maxDepth}</span>
            </div>
          </div>
        </div>
        
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-muted mb-2'>Resource Breakdown</h3>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-between text-sm'>
              <span>Scripts</span>
              <span className='font-medium'>{data.resourceCount.scripts}</span>
            </div>
            <div className='flex justify-between text-sm'>
              <span>Stylesheets</span>
              <span className='font-medium'>{data.resourceCount.stylesheets}</span>
            </div>
            <div className='flex justify-between text-sm'>
              <span>Images</span>
              <span className='font-medium'>{data.resourceCount.images}</span>
            </div>
            <div className='flex justify-between text-sm'>
              <span>Fonts</span>
              <span className='font-medium'>{data.resourceCount.fonts}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
