interface TechStackProps {
  data: string[] | null;
}

export default function TechStack({ data }: TechStackProps) {
  if (!data || data.length === 0) {
    return (
      <div className='space-y-2'>
        <h2 className='font-semibold text-lg'>Tech Stack</h2>
        <p className='text-muted'>No technologies detected</p>
      </div>
    );
  }

  return (
    <div className='space-y-2'>
      <h2 className='font-semibold text-lg'>Tech Stack</h2>
      <div className='grid grid-cols-2 gap-2'>
        {data.map((tech, index) => (
          <div
            key={index}
            className='px-3 py-2 bg-card rounded border border-gray'
          >
            <span className='text-sm'>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
