import {CREATE_TOKEN, LOGOUT, REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_URL} from "../../utils/constants";

const actionRequestPending = (payload) =>
    (
        {
            type: REQUEST_PENDING,
            payload: payload
        }
    );

const actionResponseSuccess = (account, token) =>
    (
        {
            type: REQUEST_SUCCESS,
            account,
            token
        }
    );

export const actionRegistration = (registrationData) =>
{
    const token = CREATE_TOKEN(registrationData.email, registrationData.password);

    return (dispatch) =>
    {
        dispatch(actionRequestPending(REQUEST_PENDING));

        fetch(`${REQUEST_URL}/account/en/v1/registration`, {
            method: 'Post',
            body: JSON.stringify(registrationData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response =>
            {
                if (response.ok)
                {
                    return response.json()
                }
                else
                {
                    throw new Error(response.statusText);
                }
            })
            .then(profile =>
            {
                dispatch(actionRequestPending(null));
                dispatch(actionResponseSuccess(profile, token));
            })
            .catch(e =>
            {
                dispatch(actionRequestPending(null));
                console.log(e.message)
            });
    };
};

export const actionLogin = (loginData) =>
{
    let token = CREATE_TOKEN(loginData.email, loginData.password);

    return (dispatch) =>
    {
        dispatch(actionRequestPending(REQUEST_PENDING));

        fetch(`${REQUEST_URL}/account/en/v1/login`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(response =>
            {
                if (response.ok)
                {
                    return response.json()
                }
                else
                {
                    throw new Error(response.statusText);
                }
            })
            .then(profile =>
            {
                dispatch(actionRequestPending(null));
                dispatch(actionResponseSuccess(profile, token))

            })
            .catch(e =>
            {
                dispatch(actionRequestPending(null));
                console.log(e.message)
            });
    }
};

export const actionLogout = () =>
    (
        {
            type: LOGOUT
        }
    );
