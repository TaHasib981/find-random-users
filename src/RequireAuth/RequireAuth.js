import React from 'react';
import auth from '../firebase.init';
import { Navigate, useLocation} from 'react-router-dom'
import { useAuthState  } from 'react-firebase-hooks/auth';
const RequireAuth = ({ children }) => {
    // let auth = useAuth();
    const [ user ] = useAuthState(auth)
    let location = useLocation();
    

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;