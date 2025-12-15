interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  h1?: string[];
  h2?: string[];
  meta?: Array<{ name: string; content: string }>;
}

interface SEOInsightsProps {
  data: SEOData | null;
}

export default function SEOInsights({ data }: SEOInsightsProps) {
  if (!data) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>SEO Insights</h2>
        <p className='text-muted'>No SEO data available</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <h2 className='font-semibold text-lg'>SEO Insights</h2>
      
      <div className='space-y-3'>
        <div>
          <h3 className='text-sm font-medium text-muted mb-1'>Title</h3>
          <p className='text-sm bg-card p-2 rounded border border-gray'>
            {data.title || 'No title found'}
          </p>
        </div>

        <div>
          <h3 className='text-sm font-medium text-muted mb-1'>Description</h3>
          <p className='text-sm bg-card p-2 rounded border border-gray'>
            {data.description || 'No description found'}
          </p>
        </div>

        <div>
          <h3 className='text-sm font-medium text-muted mb-1'>H1 Tags</h3>
          <div className='space-y-1'>
            {data.h1 && data.h1.length > 0 ? (
              data.h1.map((h1, index) => (
                <p key={index} className='text-sm bg-card p-2 rounded border border-gray'>
                  {h1}
                </p>
              ))
            ) : (
              <p className='text-sm text-muted'>No H1 tags found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
