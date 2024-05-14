
import React from 'react';
import { PageHomeWrapper } from './PageHome.styled';
import LayoutResponsiveTile from '../../layouts/LayoutResponsiveTile/LayoutResponsiveTile.lazy';

const PageHome = ( props = {} ) => (
 <PageHomeWrapper>
    PageHome Component
    <LayoutResponsiveTile size={250}>
         <div>LayoutResponsiveTile Component</div>
         <div>LayoutResponsiveTile Component</div>
         <div>LayoutResponsiveTile Component</div>
         <div>LayoutResponsiveTile Component</div>
         <div>LayoutResponsiveTile Component</div>
         <div>LayoutResponsiveTile Component</div>
    </LayoutResponsiveTile>
 </PageHomeWrapper>
);

PageHome.propTypes = {};

export default PageHome;
