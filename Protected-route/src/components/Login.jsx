import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext"
export default function Login(){
    const navigate = useNavigate();
    const {login} = useAuth();
    const handleLogin = () =>{
        loginFunction();
        navigate("/Dashboard")
    }

    return(
        <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
