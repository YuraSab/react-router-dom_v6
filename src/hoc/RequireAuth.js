import {Navigate, useLocation} from "react-router";
import { useAuth } from "../hook/UseAuth";

const RequireAuth = ({children}) => {

    const location = useLocation();
    const {user} = useAuth();

    if(!user){
        return <Navigate to={'/login'} state={{from: location}} />
    }

    return children;
}

export {RequireAuth};