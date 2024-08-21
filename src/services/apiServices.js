import Cookies from "universal-cookie";

const CookiesObject = new Cookies(null, {path: "/"})

export const setToken = (value) => {
    CookiesObject.set('token', value)
}

export const deleteToken = () => {
    CookiesObject.remove('token')
}

export const getToken = () => {
    return CookiesObject.get('token')
}

const baseUrl = `${import.meta.env.VITE_APP_API}`

export const api = {
    get: async (url) => {
        const response = await fetch(`${baseUrl}${url}`, {headers: {
            "Authorization": `Bearer ${getToken()}`
        }, method: "GET"})

        const responseJson = await response.json();

        return responseJson;
    },
    post: async (url, body) => {
        const response = await fetch(`${baseUrl}${url}`, {headers: {
            "Authorization": `Bearer ${getToken()}`,
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
    })

        const responseJson = await response.json();

        return responseJson;
    },
    delete: async (url) => {
        const response = await fetch(`${baseUrl}${url}`, {headers: {
            "Authorization": `Bearer ${getToken()}`,
            "content-type": "application/json"
        },
        method: "DELETE"
    })

        const responseJson = await response.json();

        return responseJson;
    }
}