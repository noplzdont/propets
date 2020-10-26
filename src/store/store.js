import * as React from "react";
import {reducer} from "./reducers/reducer";
import {useReducer} from "react";
import {LOGIN} from "../utils/constants";

const initialState = {
    authViewTrigger: false,
    authViewFormTrigger: LOGIN
};

const store = React.createContext(initialState);

const {Provider} = store;

/*const init = (initState) =>
{
    return {
        authViewTrigger: initState
    };
}*/

const StateProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(reducer, store);

    return <Provider value = {{state, dispatch}}>{children}</Provider>
}

export {store, StateProvider};
