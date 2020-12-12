import {
    VIEW_TRIGGER_AUTH_FORM,
    VIEW_TRIGGER_AUTH,
    VIEW_TRIGGER_PROFILE, SET_CURRENT_PAGE,
} from "../../utils/constants";

export const actionSetCurrentPage = (payload) =>
    (
        {
            type: SET_CURRENT_PAGE,
            payload
        }
    );

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
