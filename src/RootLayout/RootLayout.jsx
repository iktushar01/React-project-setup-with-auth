import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';

export const valueContext = createContext();

const RootLayout = () => {
    const handleLogin = (email, password) => {
        console.log("inside handleLogin", email, password);
      return  signInWithEmailAndPassword(auth, email, password)
           
    };

    const handleSignUp = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
          
    };

    const contextData = {
        handleLogin,
        handleSignUp
    };

    return (
        <div>
            <Navbar />
            <valueContext.Provider value={contextData}>
                <Outlet />
            </valueContext.Provider>
        </div>
    );
};

export default RootLayout;
