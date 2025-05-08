import { createContext, useContext, useState } from "react";

const AuthContext = createContext;

export function AuthProvider({children}){
const [isLoggedIn, setIsLoggedIn] = useState(false);

const login = () => setIsLoggedIn(true);

return(
    <AuthContext.Provider value = {{isLoggedIn,login}}>
        {children}
    </AuthContext.Provider>
)
}

export function useAuth(){
    return useContext(AuthContext);
}