
import React, { useCallback } from 'react';
import { useCustomerStore } from '../hooks/user-customer-store.hook';
import LayoutResponsiveTile from '../../../layouts/LayoutResponsiveTile/LayoutResponsiveTile';

const FeatUsersList = (props = {}) => {

   const [state, dispatch, ActionTypes] = useCustomerStore();

   const handleClick = useCallback(() => {
      dispatch({ type: ActionTypes.USERS_LIST_REQUEST });
   }, [dispatch, ActionTypes]);

   return (
      <>
         <h2>User List </h2>
         <button onClick={ handleClick }>Refresh or Load List</button>
         <hr />
         <LayoutResponsiveTile size={200}>
            {
               state.users.map((user) => (
                  <div key={user.id}>{user.name}</div>
               ))
            }
         </LayoutResponsiveTile>
      </>
   )
};

FeatUsersList.propTypes = {};

export default FeatUsersList;
