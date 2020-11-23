/*URLs--------------------------------------------------*/
export const ROUTE_URL = "http://localhost:3000";
export const REQUEST_URL = "https://propets-app.herokuapp.com"

export const CREATE_TOKEN = (user, password) =>
{
    return 'Basic ' + btoa(`${user}:${password}`);
};

export const VIEW_ACTIVE = "ACTIVE";
export const VIEW_HIDDEN = "HIDDEN";

export const STATUS_GUEST = "STATUS_GUEST";
export const STATUS_USER = "STATUS_USER";
export const STATUS_ADMIN = "STATUS_ADMIN";

export const VIEW_TRIGGER_AUTH = "VIEW_AUTHORIZATION";
export const VIEW_TRIGGER_AUTH_FORM = "VIEW_AUTHORIZATION_FORM";
export const VIEW_TRIGGER_PROFILE = "VIEW_PROFILE";

export const PROFILE = "PROFILE";
export const ACTIVITIES = "ACTIVITIES";

export const LOGIN = "LOGIN";
export const REGISTRATION = "REGISTRATION";
export const RESTORE_PASSWORD = "RESTORE_PASSWORD";
export const LOGOUT = "LOGOUT";

export const GET_HOME_POSTS = "GET_HOME_POSTS";
