import React from 'react';
import './navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
        </div>
    )
}