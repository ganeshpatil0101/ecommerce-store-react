import React from 'react';
import { Typography } from '@mui/material';
import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({ error }: any) {
    return (
        <>
            <Typography variant="h4" > Ohh Hoo!! Something went wrong :( !!! </Typography>
            <details className="error-details">
                <pre>{error.message}</pre>
            </details>
        </>
    )
}

export function withErrorBoundary(Component: any){
    return ({...props}: any) => {
      return (<>
        <ErrorBoundary FallbackComponent={ErrorFallback} >
          <Component {...props} />
        </ErrorBoundary>
      </>);
    }
  }