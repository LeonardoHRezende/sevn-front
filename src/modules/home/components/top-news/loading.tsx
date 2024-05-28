import React from 'react';

export interface LoadingProps {
  isLoading: boolean;
}

export const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & LoadingProps) => {
    if (props.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
};
