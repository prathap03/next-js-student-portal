// import React, { useState, useEffect, useContext, createContext } from "react";
// import nookies from "nookies";
// import {auth,app} from "../components/FirebaseConfig";





// const AuthContext = createContext<{user: app.User | null }>({
//   user: null,
// });


// export function AuthProvider({ children }: any) {
//   const [user, setUser] = useState<app.User | null>(null);
  
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       (window as any).nookies = nookies;
//     }
//     return auth.onIdTokenChanged(async (user) => {
//       console.log(`token changed!`);
//       if (!user) {
//         console.log(`no token found...`);
//         setUser(null);
//         nookies.destroy(null, "token");
//         nookies.set(null, "token", "", {path: '/'});
//         nookies.set(null,"user","",{path:"/"})

//         return;
//       }

//       console.log(`updating token...`);
//       const token = await user.getIdToken();
//       setUser(user);
//       nookies.destroy(null, "token");
//       nookies.set(null, "token", token, {path: '/'});
//       nookies.destroy(null, "user");

//       nookies.set(null,"user",JSON.stringify({email:user.email,uid:user.uid}),{path:'/'})
//     });
//   }, []);

//   // force refresh the token every 10 minutes
//   useEffect(() => {
//     const handle = setInterval(async () => {
//       console.log(`refreshing token...`);
//       const user = auth.currentUser;
//       if (user) await user.getIdToken(true);
//     }, 10 * 60 * 1000);
//     return () => clearInterval(handle);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   return useContext(AuthContext);
// };