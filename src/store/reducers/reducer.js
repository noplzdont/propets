import {
    VIEW_TRIGGER_AUTH_FORM,
    VIEW_TRIGGER_AUTH,
    VIEW_TRIGGER_PROFILE,
    REQUEST_PENDING, REQUEST_SUCCESS, SET_CURRENT_PAGE, LOGOUT, PAGE_START
} from "../../utils/constants";

export const reducer = (state, action) =>
{
    switch (action.type)
    {
        case REQUEST_PENDING:
            return {...state, requestStatus: action.payload};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case VIEW_TRIGGER_AUTH:
            return {...state, viewTriggerAuth: action.payload};
        case VIEW_TRIGGER_AUTH_FORM:
            return {...state, viewTriggerAuthForm: action.payload};
        case VIEW_TRIGGER_PROFILE:
            return {...state, viewTriggerProfile: action.payload};
        case REQUEST_SUCCESS:
            localStorage.setItem('token', action.token);
            return {...state, account: action.account, token: action.token};
        case LOGOUT:
            localStorage.removeItem("token");
            return {...state, token: null};
        default:
            return state;
    }
}
