import './App.css';
import { useRoutes } from "react-router-dom";
import { Routes } from "./routes/index"; // Ensure you point to the correct file where Routes is defined

function App() {
    // useRoutes should be called and returned inside JSX
    const routing = useRoutes(Routes);

    return (
        <div>
            {routing}
        </div>
    );
}

export default App;
