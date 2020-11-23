import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers/reducer";
import {LOGIN, PROFILE, STATUS_GUEST, VIEW_HIDDEN} from "../utils/constants";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const initialState = {
    viewTriggerAuth: VIEW_HIDDEN,
    viewTriggerAuthForm: LOGIN,
    viewTriggerProfile: PROFILE,
    //--------------------
    status: STATUS_GUEST,
    account: {
        email: "email@email.com",
        password: "password",
        name: "Name Surname",
        avatar: "https://www.gravatar.com/avatar/0?d=mp",
        phone: "0580000000",
        roles: [
            "User"
        ]
    }
};

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

export default store;
