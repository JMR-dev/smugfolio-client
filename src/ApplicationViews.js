import React from "react";
import { Home } from "./home/Home";
import { Route } from "react-router-dom";
import { SelectTags } from "./tags/SelectTags";
import { PhotosByTag } from "./tags/PhotosByTag";
import { MyImages } from "./images/MyImages";
import { Profile } from "./profile/Profile";


export const ApplicationViews = () => {

    return (
    
    <>

    <main>
        <Route exact path="/">
            <Home />
            </Route >
        <Route path = "/SelectTags/:id">
            <SelectTags />
                
        </Route>
        <Route exact path = "/PhotosByTag">
            <PhotosByTag />
        </Route>
        <Route exact path="/Profile">
            <Profile />
        </Route>
        <Route exact path ="/MyImages" >
            <MyImages />
        </Route>
        </main>
    </>
    )
}