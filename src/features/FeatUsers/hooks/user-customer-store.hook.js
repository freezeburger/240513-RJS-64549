import { useEffect, useState } from "react";
import { ActionTypes, store } from "../logic";


export const useCustomerStore = () => {

    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, []);

    return [state, store.dispatch, ActionTypes]
}