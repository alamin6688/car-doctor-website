import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload,setReload]=useState(false)

    const createUser = (email, password) =>{
        setLoading(true);
        setReload(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        setReload(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        setReload(true);
        return signOut(auth);
    }

    //update profile
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
    };
      

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>
        {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log('user in the auth state changed', currentUser);
            setLoading(false);
            // if user exits then issue a token
            if(currentUser){
                axios.post( 'http://localhost:5000/jwt',loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response', res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res =>{
                    console.log(res.data);
                })
            }
        });
        return () =>{
            unSubscribe();
        }
    },[reload])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;    