// import React from "react";
import registration from "../components/registration.css";
//
// const Registration = () => {
//     return (
//
//
//         <div className="all">
//             <div>
//                 <p className="welcome-user">Create Your Account.!<br/><br/></p>
//
//             </div>
//             <form className="sign-up" >
//                 <h2 className="sign-up-message">Signup</h2>
//                 <p className="some-details">Just some details to get you in.!</p>
//                 <form className="form-tag">
//                     <input id="first-name" type="text" name="first-name" placeholder="First Name" size="30px" color="#ED9182"
//                            required/>
//                     <input id="last-name" type="text" name="last-name" placeholder="Last Name" size="30px"
//                            required/>
//                     <input id="email" type="email" name="email" placeholder="E-mail" size="30px"
//                            required/>
//                     <input id="password" type="password" name="password" placeholder="Password" size="30px"
//                            required/>
//                     <select id="gender" name="gender" defaultValue="">
//                         <option value="" disabled>Select your gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                     <input type="text" id="nextOfKinName" name="nextOfKinName" placeholder="Next of Kin Name" size="30px"/>
//                     <input type="tel" id="nextOfKinPhone" name="nextOfKinPhone" placeholder="Next of Kin Phone" size="30px"/>
//
//                     <button id="submit" type="submit" className="sign-up-button">Sign-Up</button>
//                 </form>
//                 <a href="">
//                     <p>Already Registered? <button className="another-login">Login</button></p>
//                 </a>
//             </form>
//
//         </div>
//     )
// }
// export default Registration;
import React, { useState } from 'react';
// import './SignUp.css'; // Assuming your CSS is the same

const Registration = () => {
    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [nextOfKinName, setNextOfKinName] = useState('');
    const [nextOfKinPhone, setNextOfKinPhone] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // API call to register the user
            const response = await fetch("http://localhost:8080/api/v1/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    gender,
                    nextOfKinName,
                    nextOfKinPhone
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                alert('User Created Successfully');
                window.location.href = '/login'; // Redirect to the login page
            } else {
                alert('Error: ' + responseData.data);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="all">

                 <div>
                 <p className="welcome-user">Create Your Account.!<br/><br/></p>

                 </div>
                <form className="sign-up" onSubmit={handleSubmit}>
                    <h2 className="sign-up-message">Signup</h2>
                    <p className="some-details">Just some details to get you in.!</p>
                    <div className="form-tag">
                        <input
                            id="first-name"
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            id="last-name"
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select your gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input
                            type="text"
                            id="nextOfKinName"
                            name="nextOfKinName"
                            placeholder="Next of Kin Name"
                            value={nextOfKinName}
                            onChange={(e) => setNextOfKinName(e.target.value)}
                        />
                        <input
                            type="tel"
                            id="nextOfKinPhone"
                            name="nextOfKinPhone"
                            placeholder="Next of Kin Phone"
                            value={nextOfKinPhone}
                            onChange={(e) => setNextOfKinPhone(e.target.value)}
                        />
                        <button id="submit" type="submit" className="sign-up-button">
                            Sign-Up
                        </button>
                    </div>
                    <a href="/login">
                        <p>
                            Already Registered? <button className="another-login">Login</button>
                        </p>
                    </a>
                </form>
            </div>
            );
            };

            export default Registration;