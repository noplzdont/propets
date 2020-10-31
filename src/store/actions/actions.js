import {CREATE_TOKEN, LOGIN, REGISTER, REQUEST_URL} from "../../utils/constants";

export const actionRegister = (account) =>
{
    const token = CREATE_TOKEN(account.email, account.password);
    let payload = null;

    console.log("Action Started!");

    fetch(`${REQUEST_URL}/account/en/v1/registration`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
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
        type: REGISTER,
        payload, token
    }
};

export const actionLogin = (token) =>
{
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
        payload
    }
};
