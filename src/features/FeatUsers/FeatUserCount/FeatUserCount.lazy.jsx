
import React, { lazy, Suspense } from 'react';

const LazyFeatUserCount = lazy(() => import('./FeatUserCount'));

const FeatUserCount = props => (
  <Suspense fallback={null}>
    <LazyFeatUserCount {...props} />
  </Suspense>
);

export default FeatUserCount;
