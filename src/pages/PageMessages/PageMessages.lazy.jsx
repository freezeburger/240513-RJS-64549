
import React, { lazy, Suspense } from 'react';

const LazyPageMessages = lazy(() => import('./PageMessages'));

const PageMessages = props => (
  <Suspense fallback={null}>
    <LazyPageMessages {...props} />
  </Suspense>
);

export default PageMessages;
