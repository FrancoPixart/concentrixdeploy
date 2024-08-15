import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyAuth } from "../../auth/authService";

// interface ProtectedRouteProps {
//     children: React.ReactNode;
// }

// export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ children }) => {
export const ProtectedRoutes: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const authUser = async () => {
        await verifyAuth()

        const userId = sessionStorage.getItem('userId');
        const range = sessionStorage.getItem('range');
        const roles = sessionStorage.getItem('roles');

        console.log({ userId });
        console.log({ range });
        console.log({ roles });

        if (userId && range && roles) setIsAuth(true)
        else setIsAuth(false)
    }

    useEffect(() => { authUser() }, [])

    if (isAuth === null) return <div>Cargando...</div>

    return isAuth ? <Outlet /> : <Navigate to="/unauthorized" />
}
// import React, { useEffect, useState } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { verifyAuth } from "./auth/authService";

// export const ProtectedRoutes: React.FC = () => {
//     const [isAuth, setIsAuth] = useState<boolean | null>(() => {
//         const userId = sessionStorage.getItem('userId');
//         const range = sessionStorage.getItem('range');
//         const roles = sessionStorage.getItem('roles');
//         return !!(userId && range && roles);
//     });

//     useEffect(() => {
//         const authUser = async () => {
//             await verifyAuth();
//             const userId = sessionStorage.getItem('userId');
//             const range = sessionStorage.getItem('range');
//             const roles = sessionStorage.getItem('roles');
//             setIsAuth(!!(userId && range && roles));
//         };

//         if (isAuth === null) {
//             authUser();
//         }
//     }, [isAuth]);

//     if (isAuth === null) return <div>Cargando...</div>;

//     return isAuth ? <Outlet /> : <Navigate to="/unauthorized" />;
// };
