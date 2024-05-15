
import React from 'react';
import { PageHomeWrapper } from './PageHome.styled';
import FeatUserCount from '../../features/FeatUsers/FeatUserCount/FeatUserCount';
import FeatUsersList from '../../features/FeatUsers/FeatUsersList/FeatUsersList';

const PageHome = ( props = {} ) => (
 <PageHomeWrapper>
   
    <FeatUserCount></FeatUserCount>
    <FeatUsersList></FeatUsersList>

 </PageHomeWrapper>
);

PageHome.propTypes = {};

export default PageHome;
