import {useAuth} from "./AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }){
    const isLoggedIn = useAuth();

    if (!isLoggedIn) {
      return <Navigate to = "/login" replace />
    }
    return children
}