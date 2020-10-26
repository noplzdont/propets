import {AUTH_FORM_TRIGGER, AUTH_TRIGGER} from "../../utils/constants";

export const reducer = (state, action) =>
{
    switch (action.type)
    {
        case AUTH_TRIGGER:
            return {...state, authViewTrigger: !state.authViewTrigger};
        case AUTH_FORM_TRIGGER:
            return {...state, authViewFormTrigger: action.payload};
        default:
            throw new Error("Unknown action type " + action.type);
    }
}
