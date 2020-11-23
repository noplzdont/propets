import {
    VIEW_TRIGGER_AUTH_FORM,
    VIEW_TRIGGER_AUTH,
    CREATE_TOKEN,
    LOGIN,
    VIEW_TRIGGER_PROFILE,
    REGISTRATION,
    REQUEST_URL
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
    )

export const actionRegistration = (account) =>
{
    console.log("Action Started!");

    const token = CREATE_TOKEN(account.email, account.password);
    let payload = null;

    fetch(`${REQUEST_URL}/account/en/v1/registration`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
    })
        .then(response =>
        {
            console.log("Fetch responded!");
            console.log(response.json());

            if (response.ok)
            {
                return response.json();
            }
            else
            {
                throw new Error(response.statusText);
            }
        })
        .then(data =>
        {
            payload = data;
            console.log(data);
        })
        .catch(e =>
        {
            console.log(e.message)
        });

    console.log("Action Ended!");

    return {
        type: REGISTRATION,
        payload, token
    }
}

export const actionLogin = (token) =>
{
    console.log("Action Started!");

    let payload = null;

    fetch(`${REQUEST_URL}/account/en/v1/login`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(response =>
        {
            console.log("Fetch Responded!")

            if (response.ok)
            {
                return response.json()
            }
            else
            {
                throw new Error(response.statusText);
            }
        })
        .then(data =>
        {
            payload = data;
            console.log(data);
        })
        .catch(e =>
        {
            console.log(e.message)
        });

    return {
        type: LOGIN,
        payload, token
    }
};
