import { Route, Routes } from "react-router-dom";
import { routes } from "./routerConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map((route) => <Route key={crypto.randomUUID()} path={route.path} element={route.element} />)
            }
        </Routes>
    )
}
