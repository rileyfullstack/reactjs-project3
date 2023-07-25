import jwtDecode from "jwt-decode";

const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken) => {
    localStorage.setItem(TOKEN, encryptedToken);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const getUser = () => {
    try {
        const myToken = getToken();
        return jwtDecode(myToken);
    } catch (error) {
        return null;
    }
}