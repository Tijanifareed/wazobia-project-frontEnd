import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import "./loginStyle.css";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // API call to log in the user
            const response = await fetch("http://localhost:8080/passenger/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                alert('Login Successful');
                // You can redirect the user after successful login if necessary
                // window.location.href = '/dashboard';
            } else {
                alert('Error: ' + responseData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred: ' + error.message);
        }
    };
    return (
        <div className='login-wrapper'>
            <h1>Login Form</h1>
            <form action=''>
                <div className="input">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaUser className='icon'/>
                </div>
                <div className="input">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className='icon'/>
                </div>

                <button type='submit'>Login</button>
                <div className="register-link">
                    <a href='./registration.jsx'>
                        <p>
                            Don't have an Account? <button type="button" className='small-button'>Register</button>
                        </p>
                    </a>

                </div>
            </form>
        </div>
    );
};

export default Login