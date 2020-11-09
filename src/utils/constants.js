/*URLs--------------------------------------------------*/
export const ROUTE_URL = "http://localhost:3000";
export const REQUEST_URL = "https://propets-app.herokuapp.com"

export const CREATE_TOKEN = (user, password) =>
{
    return 'Basic ' + btoa(`${user}:${password}`);
};

export const STATUS_GUEST = "STATUS_GUEST";
export const STATUS_USER = "STATUS_USER";
export const STATUS_ADMIN = "STATUS_ADMIN";

export const AUTH_TRIGGER = "AUTH_TRIGGER";
export const AUTH_FORM_TRIGGER = "AUTH_FORM_TRIGGER";
export const PROFILE_VIEW_TRIGGER = "PROFILE_VIEW_TRIGGER";

export const PROFILE = "PROFILE";
export const ACTIVITIES = "ACTIVITIES";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const RESTORE_PASSWORD = "RESTORE_PASSWORD";
export const LOGOUT = "LOGOUT";
