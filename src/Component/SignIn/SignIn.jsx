import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { valueContext } from '../../RootLayout/RootLayout';

const SignIn = () => {
    const {handleLogin} = useContext(valueContext);
    console.log(handleLogin);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleLogin(email, password)
        handleLogin(email,password)
         .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
    };

    return (
        <div className="min-h-[calc(100vh-138px)] flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors mb-4"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-700">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-black font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
