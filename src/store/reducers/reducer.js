import {VIEW_TRIGGER_AUTH_FORM, VIEW_TRIGGER_AUTH, LOGIN, VIEW_TRIGGER_PROFILE, REGISTRATION} from "../../utils/constants";

export const reducer = (state, action) =>
{
    switch (action.type)
    {
        case VIEW_TRIGGER_AUTH:
            return {...state, viewTriggerAuth: action.payload};
        case VIEW_TRIGGER_AUTH_FORM:
            return {...state, viewTriggerAuthForm: action.payload};
        case VIEW_TRIGGER_PROFILE:
            return {...state, viewTriggerProfile: action.payload};
        case REGISTRATION:
        case LOGIN:
            localStorage.setItem('token', action.token);
            return {...state, ...action.payload, token: action.token};
        default:
            return state;
    }
}
