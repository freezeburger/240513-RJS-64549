
import React, { lazy, Suspense } from 'react';

const LazyLayoutResponsiveTile = lazy(() => import('./LayoutResponsiveTile'));

const LayoutResponsiveTile = props => (
  <Suspense fallback={null}>
    <LazyLayoutResponsiveTile {...props} />
  </Suspense>
);

export default LayoutResponsiveTile;
