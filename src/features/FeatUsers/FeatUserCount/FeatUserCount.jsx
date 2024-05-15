
import React from 'react';
import { useCustomerStore } from '../hooks/user-customer-store.hook';

const FeatUserCount = (props = {}) => {

   const [state] = useCustomerStore();

   return (
      <>
         <code>Number of users : { state.count }</code>
      </>
   )
};

FeatUserCount.propTypes = {};

export default FeatUserCount;
