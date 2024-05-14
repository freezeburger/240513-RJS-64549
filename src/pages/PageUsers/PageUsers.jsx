
import React from 'react';
import { PageUsersWrapper } from './PageUsers.styled';
import FeatUsers from '../../features/FeatUsers/FeatUsers.lazy';

const PageUsers = ( props = {} ) => (
 <PageUsersWrapper>
   <FeatUsers></FeatUsers>
 </PageUsersWrapper>
);

PageUsers.propTypes = {};

export default PageUsers;
