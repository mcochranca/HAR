// src/ui/ErrorBoundary.tsx

import React, { ErrorInfo } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold">Something went wrong.</h1>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
