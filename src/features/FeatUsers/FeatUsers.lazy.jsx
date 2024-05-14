
import React, { lazy, Suspense } from 'react';

const LazyFeatUsers = lazy(() => import('./FeatUsers'));

const FeatUsers = props => (
  <Suspense fallback={null}>
    <LazyFeatUsers {...props} />
  </Suspense>
);

export default FeatUsers;
