export default function LoadingSpinner() {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-light'></div>
      <p className='mt-4 text-sm text-muted'>Analyzing page...</p>
    </div>
  );
}
