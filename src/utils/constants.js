/*URLs--------------------------------------------------*/
export const BASE_URL = "http://localhost:3000";

/*ACTIONs--------------------------------------------------*/
/*Accounting*/
export const CREATE_TOKEN = (user, password) =>
{
    return 'Basic ' + btoa(`${user}:${password}`);
};

export const AUTH_TRIGGER = "AUTH_TRIGGER";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const RESTORE_PASSWORD = "RESTORE_PASSWORD";
export const LOGOUT = "LOGOUT";
