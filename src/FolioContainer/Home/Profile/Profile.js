import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, This is <span className='highlighted-text'>Hemant.</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Tech Enthusiaste",
                                        2000,
                                        "Back End Developer",
                                        2000,
                                        "MicroServices",
                                        2000,
                                        "Tech J2Ee",
                                        2000,
                                        "Bit of Front End",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>Short description</span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>{" "}
                            Hire Me!{" "}</button>
                        <a href='resume.pdf' download='Hemant-Bawaskar-Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>



                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>

            </div>

        </div>
    )
}