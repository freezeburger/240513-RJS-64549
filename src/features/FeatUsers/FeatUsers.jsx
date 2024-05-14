
import React from 'react';
import { useCustomerApi } from './hooks/use-customer-api.hook';

const FeatUsers = ( props = {} ) => {
   
   const users = useCustomerApi();
   
   return (
      <div>
         <h1>Users:</h1>
         <div>
            { JSON.stringify(users) }
         </div>
      </div>
   )
};

FeatUsers.propTypes = {};

export default FeatUsers;
