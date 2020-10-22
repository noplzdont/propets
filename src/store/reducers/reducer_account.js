import {AUTH_TRIGGER} from "../../utils/constants";

export const accountReducer = (state, action) =>
{
    switch (action.type)
    {
        case AUTH_TRIGGER:
            return {authViewTrigger: !state.authViewTrigger};
        default:
            throw new Error("Unknown action type " + action.type);
    }
}
