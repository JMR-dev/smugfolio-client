import React from "react";
import { Home } from "./home/Home";
import { Route } from "react-router-dom";


export const ApplicationViews = () => {

    return (
    
    <>

    <main>
        <Route exact path="/">
            <Home />
            </Route>
        </main>
    </>
    )
}