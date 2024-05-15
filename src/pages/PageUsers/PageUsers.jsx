
import React from 'react';
import { PageUsersWrapper } from './PageUsers.styled';
import FeatUserCount from '../../features/FeatUsers/FeatUserCount/FeatUserCount';
import FeatUsersList from '../../features/FeatUsers/FeatUsersList/FeatUsersList';


const PageUsers = ( props = {} ) => (
 <PageUsersWrapper>
    <FeatUserCount></FeatUserCount>
    <FeatUsersList></FeatUsersList>
 </PageUsersWrapper>
);

PageUsers.propTypes = {};

export default PageUsers;
