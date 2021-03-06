import React from "react"
import { Link, useHistory } from "react-router-dom"


export const NavBar = () => {
    const history = useHistory()
    return (
        
        <ul className="navbar">
            <li className="navbar__item">
                <Link to={ "/"} >Upload Images</Link>
            </li>
            <li className="navbar__item">
                <Link to={"/MyImages"}>My Images</Link>
            </li>
            <li className="navbar__item">
              <Link to={"/PhotosByTag"}>  Explore Images by Tag</Link>
            </li>
            <li className="navbar__item">
               <Link to={"/Profile"}>My Profile</Link>
            </li>
            {
                (localStorage.getItem("sf_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("sf_token")
                                history.push({ pathname: "/login" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
