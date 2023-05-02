import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setSuccess('')
        setError('')

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Login Successful')
                form.reset()
            })
            .catch(err => setError(err.message))
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Login Successful')
                form.reset()
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <span className='text-xs mt-0'>New to Gusto? please<button className="btn btn-link text-xs"><Link to="/register">Register</Link></button></span>
                    </div>
                    <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary mt-5"><FaGoogle /><span className='ms-3'> Login with google</span></button> <br />
                    <button className="btn btn-outline btn-primary mt-5"><FaGithub /><span className='ms-3'> Login with github</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;