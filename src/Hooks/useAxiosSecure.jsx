import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://cars-doctor-server-psi.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => res,
            error => {
                // console.log('error tracked in the interceptor', error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    // console.log('logout the user')
                    logOut()
                        .then(() => {
                            navigate('/login')
                        })
                        .catch(error => console.log(error))
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
