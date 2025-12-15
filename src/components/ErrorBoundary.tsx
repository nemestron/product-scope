import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='p-4 bg-error bg-opacity-10 border border-error rounded animate-slideIn'>
          <h3 className='text-lg font-medium text-error mb-2'>Something went wrong</h3>
          <p className='text-sm text-muted mb-3'>We encountered an error while analyzing this page.</p>
          <details className='text-xs text-muted bg-gray bg-opacity-50 p-2 rounded border border-gray'>
            <summary className='cursor-pointer font-medium'>Error details</summary>
            <pre className='mt-2 text-xs overflow-auto max-h-40'>
              {this.state.error?.stack || 'Unknown error occurred'}
            </pre>
          </details>
          <button 
            className='mt-3 px-3 py-2 bg-accent text-white rounded hover:bg-accent-hover transition-colors'
            onClick={() => this.setState({ hasError: false, error: undefined })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
