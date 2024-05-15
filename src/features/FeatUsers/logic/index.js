import { configureStore } from "@reduxjs/toolkit";
import { fetchUsers } from "./user.service";


const initialState = {
    users:[],
    count:0
}

export const ActionTypes = {
    USERS_LIST_REQUEST: 'USERS_LIST_REQUEST',
    USERS_LIST_UPDATE: 'USER_LIST_UPDATE',
    USER_CREATION_REQUEST: 'USER_CREATION_REQUEST',
    USER_CREATION_UPDATE: 'USER_CREATION_UPDATE'
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    
    switch(action.type) {
        case ActionTypes.USERS_LIST_UPDATE:
            return {
                ...state,
                users: action.payload,
                count: action.payload.length
            }
        default:
            return state;
    }
}

const middleware = store => next => action => {
    console.log('middleware', action);
    next(action);

    if(action.type === ActionTypes.USERS_LIST_REQUEST) {
        fetchUsers().then(data => store.dispatch({
            type: ActionTypes.USERS_LIST_UPDATE,
            payload: data
        }));
    }
}

export const store = configureStore({
    reducer,
    middlewares: [middleware],
    preloadedState: initialState,
    devTools: { name: 'FeatUsers' }
})