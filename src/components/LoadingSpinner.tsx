export default function LoadingSpinner() {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <div className='relative'>
        <div className='w-10 h-10 border-2 border-gray-300 border-t-accent rounded-full animate-spin'></div>
        <div className='absolute inset-0 w-10 h-10 border-2 border-transparent border-t-accent/20 rounded-full animate-spin' style={{ animationDelay: '0.15s' }}></div>
      </div>
      <div className='mt-4 flex flex-col items-center space-y-1'>
        <p className='text-sm text-muted animate-pulse'>Analyzing page...</p>
        <div className='flex space-x-1'>
          <div className='w-1 h-1 bg-accent rounded-full animate-pulse' style={{ animationDelay: '0s' }}></div>
          <div className='w-1 h-1 bg-accent rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></div>
          <div className='w-1 h-1 bg-accent rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
