"use client";
import { Component, ReactNode } from "react";

interface TErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}
interface TErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
