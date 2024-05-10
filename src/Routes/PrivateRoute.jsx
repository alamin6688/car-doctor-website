import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <div className="text-center mt-10">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;