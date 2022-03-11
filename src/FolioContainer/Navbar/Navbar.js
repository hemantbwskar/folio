import React from 'react';
import './navbar.css'
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <div className='navbar'>
            
            <a className={splitLocation[1] === "" ? "active" : ""} href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a className={splitLocation[1] === "projectlist" ? "active" : ""} href="/projectlist"><i className="fa fa-fw fa-tasks"></i> Projects</a>
            <a href="https://github.com/hemantbwskar"><i className="fa fa-fw fa-github"></i> Git</a>
            <a className={splitLocation[1] === "contact" ? "active" : ""} href="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
        </div>
    )
}