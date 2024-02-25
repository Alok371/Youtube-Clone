import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import './Navbar.css'
import logo from './yt.svg'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
function Navbar() {
    // const CurrentUser = null;
    const CurrentUser = {
        result: {
            // name: "alok",
            email: "alok@gmail.com",
            joinedOn: "2222-07-15T09:57:23.4892",
        }
    }
    return (
        <div className='Container_Navbar'>
            <div className='Burger_Logo_Navbar'>
                <div className='burger'>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className='logo_div_navbar'>
                    <img src={logo} />
                    <p className='logo_title_navbar'>YouTube</p>
                </div>
            </div>
            <Searchbar />
            <RiVideoAddLine size={22} className={'video_bell_Navbar'} />
            <div className='app_box'>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
            </div>
            <IoMdNotificationsOutline size={22} className={'video_bell_Navbar'} />
            <div className='auth_cont_navbar'>
                {
                    CurrentUser ? (
                        <>
                            <div className='Channel_logo_app'>
                                <p className='fstChar_logo_app'>
                                    {
                                        CurrentUser?.result.name ? (
                                            <>
                                                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                                            </>
                                        ) : (<>
                                            {CurrentUser?.result.email.charAt(0).toUpperCase()}
                                        </>)
                                    }
                                </p>
                            </div>
                        </>) : (<>
                            <p className='auth_Btn'>
                                <BiUserCircle size={22} />
                                <b>Sign In</b>
                            </p>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar
