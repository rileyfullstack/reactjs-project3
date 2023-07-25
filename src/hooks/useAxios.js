import axios from "axios"
import { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";

const useAxios = () => {

    const { token } = useUser();

    useEffect(() => {
        axios.defaults.headers.common["x-auth-token"] = token;
        const requestInterseptor = axios.interceptors.request.use((data)=>{
            return Promise.resolve(data);
        }, null);
    
        const responseInterseptor = axios.interceptors.response.use(null, (error) => {
            return Promise.reject(error);
        });
        return () => {
            axios.interceptors.request.eject(requestInterseptor);
            axios.interceptors.request.eject(responseInterseptor);
        }
    }, [token]);
};

export default useAxios;