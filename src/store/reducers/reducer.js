import {AUTH_FORM_TRIGGER, AUTH_TRIGGER, LOGIN, PROFILE_VIEW_TRIGGER, REGISTER} from "../../utils/constants";

export const reducer = (state, action) =>
{
    switch (action.type)
    {
        case AUTH_TRIGGER:
            return {...state, authViewTrigger: !state.authViewTrigger};
        case AUTH_FORM_TRIGGER:
            return {...state, authViewFormTrigger: action.payload};
        case PROFILE_VIEW_TRIGGER:
            return {...state, profileViewTrigger: action.payload};
        case REGISTER:
        case LOGIN:
            console.log("LogReg reducer");
            localStorage.setItem('token', action.token);
            return {...state, ...action.payload, token: action.token};
        default:
            throw new Error("Unknown action type " + action.type);
    }
}
