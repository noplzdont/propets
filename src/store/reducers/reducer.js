import {
    VIEW_TRIGGER_AUTH_FORM,
    VIEW_TRIGGER_AUTH,
    VIEW_TRIGGER_PROFILE,
    REQUEST_PENDING, REQUEST_SUCCESS
} from "../../utils/constants";

export const reducer = (state, action) =>
{
    switch (action.type)
    {
        case REQUEST_PENDING:
            return {...state, requestStatus: action.payload};
        case VIEW_TRIGGER_AUTH:
            return {...state, viewTriggerAuth: action.payload};
        case VIEW_TRIGGER_AUTH_FORM:
            return {...state, viewTriggerAuthForm: action.payload};
        case VIEW_TRIGGER_PROFILE:
            return {...state, viewTriggerProfile: action.payload};
        case REQUEST_SUCCESS:
            localStorage.setItem('token', action.token);
            return {...state, ...action.account, token: action.token};
        default:
            return state;
    }
}
