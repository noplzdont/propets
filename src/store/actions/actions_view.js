import {
    VIEW_TRIGGER_AUTH_FORM,
    VIEW_TRIGGER_AUTH,
    VIEW_TRIGGER_PROFILE,
} from "../../utils/constants";

export const actionViewTriggerAuth = (payload) =>
    (
        {
            type: VIEW_TRIGGER_AUTH,
            payload: payload
        }
    );

export const actionViewTriggerAuthForm = (payload) =>
    (
        {
            type: VIEW_TRIGGER_AUTH_FORM,
            payload
        }
    );

export const actionViewTriggerProfile = (payload) =>
    (
        {
            type: VIEW_TRIGGER_PROFILE,
            payload
        }
    );
