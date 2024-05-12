import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth'; 
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';


const Register = () => {
    const { createUser, logout } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignOut = () =>{
        logout()
        .then()
        .catch()
    }

    const handleRegister = async (e) => { 
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        
        // Password verification rules
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasLength = password.length >= 6;

        if (!(hasUppercase && hasLowercase && hasDigit && hasLength)) {
            setError('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.');
            return;
        }

        try {
            // Create user in Firebase
            const result = await createUser(email, password);
            // Update user profile with additional info
            await updateProfile(getAuth().currentUser, { displayName: name, photoURL: photoURL });
            swal("Registration successful!");
            handleSignOut();
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    }

    return (
        <div className="hero min-h-screen container mx-auto rounded-lg bg-center bg-cover bg-[url('https://t3.ftcdn.net/jpg/01/91/27/76/360_F_191277640_tdXKlzGlKAI8701Wd0WHQm6ljHAgDGPw.jpg')]">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Register now!</h1>
                </div>
                <p className='text-white text-center font-semibold'>Join the RusticChic Crafts community today! Sign up to discover unique handcrafted treasures and connect with fellow artisans.</p>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Your photo URL" name='photoURL' className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered" required />
                            <span className='absolute top-[50px] right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#BA4A00] border-[#BA4A00] text-white">Register</button>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? Please<Link to="/login"><button className='btn btn-link'>Login</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
