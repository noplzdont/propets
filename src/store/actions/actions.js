import {CREATE_TOKEN, LOGIN, REGISTER, REQUEST_URL} from "../../utils/constants";

export const actionRegister = (account) =>
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
                console.log("Action Ended!");
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
}

console.log("Action Ended!");

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
