import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon} from "react-social-icons"

export default function NavBar() {
    return(
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4 tex-gray-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest" activeClassName= "text-white">
                    Home
                </NavLink>
                <NavLink to="/post" className="inflex-flex items-center py-6 px-3 mr-6 rounded text-gray-100 hover:text-green-800"  >
                    Post 
                </NavLink>
                <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-6 rounded text-gray-100 hover:text-green-800">
                    Project
                </NavLink>
                <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-6 rounded text-gray-100 hover:text-green-800">
                    About
                </NavLink>
                </nav>
                <div className="inflex-flex items-center py-3 px-3 my-6 ">
                    <SocialIcon url="https://twitter.com/?lang=en" className="mr-4" target="_blank"  fgColor="#fff" style={{height: 35, width:35}}/>
                    <SocialIcon url="https://www.facebook.com/" className="mr-4" target="_blank"  fgColor="#fff" style={{height: 35, width:35}}/>
                    <SocialIcon url="https://www.instagram.com/" className="mr-4" target="_blank"  fgColor="#fff" style={{height: 35, width:35}}/>
                </div>
            </div>
        </header>
    )

}