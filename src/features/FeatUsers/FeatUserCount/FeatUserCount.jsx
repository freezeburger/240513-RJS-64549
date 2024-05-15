
import React from 'react';
import { FeatUserCountWrapper } from './FeatUserCount.styled';
import { useCustomerStore } from '../hooks/user-customer-store.hook';

const FeatUserCount = (props = {}) => {

   const [state] = useCustomerStore();

   return (
      <FeatUserCountWrapper>
         <code>Number of users : { state.count }</code>
      </FeatUserCountWrapper>
   )
};

FeatUserCount.propTypes = {};

export default FeatUserCount;
