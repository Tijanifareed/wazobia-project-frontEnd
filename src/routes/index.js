// import Registration from "../components/registration";
// import Login from "../components/loginpage";
//
// // Define routes directly without wrapping App component again
// export const Routes = [
//     {
//         path: "/signin",  // Sign-in route
//         element: <Registration />,
//     },
//     {
//         path: "/login",   // Login route
//         element: <Login />,
//     },
// ];

// import Registration from "../components/registration";
// import Login from "../components/loginpage";
//
// // Define routes directly without wrapping App component again
// export const Routes = [
//     {
//         path: "/",  // Root path, could redirect or show home page content
//         element: <div>Welcome! Please Sign in or Login</div>, // Placeholder for the home page
//     },
//     {
//         path: "/signin",  // Sign-in route
//         element: <Registration />,
//     },
//     {
//         path: "/login",   // Login route
//         element: <Login />,
//     },
//     {
//         path: "*",  // Catch-all route to handle 404
//         element: <div>404 Not Found</div>,
//     },
// ];

import Home from "../components/Home"; // Import the new Home component
import Registration from "../components/registration";
import Login from "../components/loginpage";

// Define routes
export const Routes = [
    {
        path: "/",  // Root path showing the home page
        element: <Home />, // Home page with options to Sign Up or Login
    },
    {
        path: "/signin",  // Sign-in route
        element: <Registration />,
    },
    {
        path: "/login",   // Login route
        element: <Login />,
    },
    {
        path: "*",  // Catch-all route to handle 404
        element: <div>404 Not Found</div>,
    },
];

