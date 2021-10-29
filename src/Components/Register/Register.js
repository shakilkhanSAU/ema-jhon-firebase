import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Please Create an Account</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your email" id="" />
                    <br />
                    <input type="password" name="" placeholder="Your password" id="" />
                    <br />
                    <input type="password" name="" placeholder="Re-enter your password" id="" />
                    <br /><br />
                    <input className="btn-regular" type="submit" value="Create Account" />
                </form>
                <p>Already Have an Account? <Link to="/login">Log-in</Link></p>
                <br />
                <button className="btn-regular">Google Sign-in</button>
            </div>
        </div>
    );
};

export default Register;