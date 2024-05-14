
import React, { lazy, Suspense } from 'react';

const LazyPageUsers = lazy(() => import('./PageUsers'));

const PageUsers = props => (
  <Suspense fallback={null}>
    <LazyPageUsers {...props} />
  </Suspense>
);

export default PageUsers;
