import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
export const SmugFolio = () => {

    if (localStorage.getItem("sf_token")) {
        return(
         <>
            <Route>
                <NavBar />
                <ApplicationViews />
            </Route>
            </>
            )
        }
}