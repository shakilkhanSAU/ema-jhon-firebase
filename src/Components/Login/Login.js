import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop';
    console.log('came from', location.state?.from);

    const handleGooglelogin = () => {
        signinUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(error => {

            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="email" name="" id="" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Continue" />
                </form>
                <p>New to ema-jhon <Link to="/register">Create New Account</Link></p>
                <br />
                <button onClick={handleGooglelogin} className="btn-regular">Google Sign-in</button>
            </div>

        </div >
    );
};

export default Login;