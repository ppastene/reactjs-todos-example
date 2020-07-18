import React, { createContext, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { createBrowserHistory } from 'history';

export const AuthContext = createContext(null);

export default function AuthContextProvider({children}) {

    const history = createBrowserHistory()

    const [cookies, setCookie, removeCookie] = useCookies();

    /*const [authData, setAuthData] = useState({
        token: undefined,
        refreshToken: undefined,
        isLoggedIn: false,
    });*/

    /*function cookieAuth(cookie) {
        setCookie("auth", cookie, {path: '/', secure:true})
    }*/

    const logout = () => {
        removeCookie('auth', {path: '/', secure: true})
    }

    return (
        <AuthContext.Provider value={{ cookies, setCookie, removeCookie, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
