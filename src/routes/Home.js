import { Navigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage"

export default function Auth() {
    const [isLoggedIn, setLogout] = useLocalStorage('loginstate', true);
    console.log(isLoggedIn);

    const handleSubmit = () => {
        if(isLoggedIn) {
            setLogout(false);
            console.log(isLoggedIn);
        }
    } 

    const renderElement = !isLoggedIn ? ( <Navigate to='/' /> ): (
                                        <div>
                                            Home Route.
                                            <button type="submit" onClick={handleSubmit}>Logout</button>
                                        </div> 
                                    )
    return renderElement    
}