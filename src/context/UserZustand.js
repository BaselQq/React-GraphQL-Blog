import React from 'react';
import { create } from 'zustand';

// export const UserContext = createContext({
//     user: '',
//     setUser: () => {},
//     authenticated: "",
//     setAuthenticated: () => {}
//   });

export const UserZustand = create((set) => ({
    user: "",
    setNewUser: () => set((state) => ({user: state.user})),
    authenticated: "",
    setAuthenticated: () => set((state) => ({authenticated: state.authenticated}))
}));

// export default () => {
//     const [user, setUser] = useState("");
//     const [token, setToken] = useState("");
//     const [authenticated, setAuthenticated] = useState("");

//     useEffect(() => {
//         userActions.login().then(data => {
//             console.log(data);
//         });
//     }, []);

//     return (
//         <UserContext.Provider
//             value={{
//                 user,
//                 setUser,
//                 authenticated,
//                 setAuthenticated,
//             }}
//         >
//             {children}
//         </UserContext.Provider>
//     );
// };