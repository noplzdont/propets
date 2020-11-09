import * as React from "react";
import {reducer} from "./reducers/reducer";
import {useReducer} from "react";
import {LOGIN, PROFILE, STATUS_GUEST} from "../utils/constants";

const initialState = {
    status: STATUS_GUEST,
    authViewTrigger: false,
    authViewFormTrigger: LOGIN,
    profileViewTrigger: PROFILE,
    account: {
        email: "email",
        password: "password",
        name: "name",
        avatar: "avatar",
        phone: null,
        roles: []
    }
};

const store = React.createContext(initialState);

const {Provider} = store;

const StateProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(reducer, store);

    return <Provider value = {{state, dispatch}}>{children}</Provider>
}

export {store, StateProvider};
