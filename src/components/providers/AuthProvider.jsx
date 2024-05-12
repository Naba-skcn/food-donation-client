import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState(null); // New state variable to store user's email
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Set user's email when signed in
                setUserEmail(email);
            });
    }
    
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubAuthProvider)
            .then(result => {
                // Set user's email when signed in
                setUserEmail(result.user.email);
            });
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setUserEmail(currentUser ? currentUser.email : null); // Update user's email
            setLoading(false);
        });
       
        return () => {
            unSubscribe();
        } 
    }, []);

    const authInfo = { user, userEmail, loading, createUser, signInUser, signInWithGoogle, logout, signInWithGithub };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};
