import axios from 'axios';
export const url = import.meta.env.VITE_BASE_URL;

const api = axios.create({

});

export const userSignUp = async (body, params, options) => {
    return await axios.request({
        url: `${url}/users/user`,
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: body,
    });
}

export const userLogIn = async (body, params, options) => {
    return await axios.request({
        url: `${url}/users/log-in`,
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: body,
    });
};

export default api;