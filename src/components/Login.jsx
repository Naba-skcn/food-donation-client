import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            // Attempt to log in
            await signInUser(email, password);
            toast.success('Login successful!');
            e.target.reset();
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error('Login failed. Please check your email and password.');
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                toast.error('Google Sign-In failed.');
            });
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                toast.error('GitHub Sign-In failed.');
            });
    }

    return (
        <div className="hero container mx-auto rounded-lg min-h-screen bg-center bg-cover bg-[url('https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=')]">
            
            <ToastContainer />
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-shadow-lg text-white">Sign-in now!</h1>
                </div>
                <p className='text-white font-semibold text-center'>Welcome back to DelishDomain! Indulge in culinary delights with just a click.<br />Sign in now and savor the flavors!🍽️</p>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#66A000] border-[#66A000] text-white">Sign in</button>
                        </div>
                    </form>
                    <p className='text-center font-semibold text-1xl'>Or, Sign in Using..</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <button onClick={handleGoogleSignIn}><AiFillGoogleCircle className='size-[25px]' /></button>
                        <button onClick={handleGithubSignIn}><AiFillGithub className='size-[25px]' /></button>
                    </div>
                    <p className='text-center'>New here? Please <Link to="/register" className='btn btn-link'>Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;