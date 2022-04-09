import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = () => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}

// function useAuth() {
//     const [authed, setAuthed] = React.useState(false);

//     return {
//         authed,
//         login() {
//             return new Promise((res) => {
//                 setAuthed(true);
//                 res();
//             });
//         },
//         logout() {
//             return new Promise((res) => {
//                 setAuthed(false);
//                 res();
//             });
//         },
//     }
// }

// export function AuthProvider({ children }) {
//     const auth = useAuth();

//     return (
//         <authContext.Provider value={auth}>
//             {children}
//         </authContext.Provider>
//     );
// }

// export default function AuthConsumer() {
//     return React.useContext(authContext);
// }
