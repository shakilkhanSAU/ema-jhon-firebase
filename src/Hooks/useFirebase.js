import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // sign in using google 
    const signinUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    };

    // sign out 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // special observer to observe user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    // return 
    return {
        user,
        signinUsingGoogle,
        logOut
    }
}

export default useFirebase;