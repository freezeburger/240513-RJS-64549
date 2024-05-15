
import React, { lazy, Suspense } from 'react';

const LazyFeatUserCard = lazy(() => import('./FeatUserCard'));

const FeatUserCard = props => (
  <Suspense fallback={null}>
    <LazyFeatUserCard {...props} />
  </Suspense>
);

export default FeatUserCard;
