import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const UseAuth = () => {
    const all = useContext(AuthContext);
    return all
};

export default UseAuth;