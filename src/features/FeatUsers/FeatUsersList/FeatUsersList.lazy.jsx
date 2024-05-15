
import React, { lazy, Suspense } from 'react';

const LazyFeatUsersList = lazy(() => import('./FeatUsersList'));

const FeatUsersList = props => (
  <Suspense fallback={null}>
    <LazyFeatUsersList {...props} />
  </Suspense>
);

export default FeatUsersList;
