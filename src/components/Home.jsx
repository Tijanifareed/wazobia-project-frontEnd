import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to Our App!</h1>
            <p>Please choose an option below:</p>
            <div style={styles.buttonContainer}>
                <Link to="/signin">
                    <button style={styles.button}>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button style={styles.button}>Login</button>
                </Link>
            </div>
        </div>
    );
};

// Simple inline styles for layout and buttons
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    },
};

export default Home;
