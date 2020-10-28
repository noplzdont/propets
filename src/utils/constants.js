/*URLs--------------------------------------------------*/
export const ROUTE_URL = "http://localhost:3000";
export const REQUEST_URL = "https://propets-app.herokuapp.com"

/*ACTIONs--------------------------------------------------*/
/*Accounting*/
export const CREATE_TOKEN = (user, password) =>
{
    return 'Basic ' + btoa(`${user}:${password}`);
};

export const AUTH_TRIGGER = "AUTH_TRIGGER";
export const AUTH_FORM_TRIGGER = "AUTH_FORM_TRIGGER";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const RESTORE_PASSWORD = "RESTORE_PASSWORD";
export const LOGOUT = "LOGOUT";
