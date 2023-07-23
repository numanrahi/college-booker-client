import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import getAuth from "firebase/auth";

export const AuthContext = createContext({});

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    

    const authInfo ={
        user,
        loading,

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;