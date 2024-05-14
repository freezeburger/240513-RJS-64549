
import React, { lazy, Suspense } from 'react';

const LazyPageHome = lazy(() => import('./PageHome'));

const PageHome = props => (
  <Suspense fallback={null}>
    <LazyPageHome {...props} />
  </Suspense>
);
PageHome.displayName = 'PageHomeLazy';

export default PageHome;
