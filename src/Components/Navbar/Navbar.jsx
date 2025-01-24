
import { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa"
import { LuCircleUserRound } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { FiUserMinus } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const[show,setshow]=useState(false)
    const navigate=useNavigate()
    //............ handelLogout
    const handellogout=()=>{
        localStorage.removeItem('jmadata')
        navigate('/Login')
    }

  return (
    <>
    <div className="alamin-nav  bg-[#E8F9FF]">
        <div className="container">
            <div className="flex justify-center gap-[120px] items-center">
        <div className="main-menu">
            <div className={`main-nav ${show?'openmenu' : 'closemenu'}`}>
                <div className={`icons icons1 ${show?'showicon':'hiddenicon'}`}>
                    <ul>
                        <li><Link to={'/'}><LuCircleUserRound/></Link>
                        <p>Profile</p>
                        </li>
                        <li><Link to={'/allUser'}><HiOutlineUsers/></Link><p>User</p></li>
                        <li><Link to={''}><LuMessageSquareMore/></Link><p>Message</p></li>
                    </ul>
                </div>
                <button onClick={()=>setshow(!show) } className="barbutton">
                    <FaBars/>
                </button>
                <div  className={`icons icons2 ${show?'showicon':'hiddenicon'}`}>
                    <ul>
                        <li><Link to={''}><FiUserCheck/></Link><p>Request</p></li>
                        <li><Link to={''}><FiUserPlus/></Link><p>Friends</p></li>
                        <li><Link to={''}><FiUserMinus/></Link><p>Blocked</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <button onClick={handellogout} className="icon text-[24px] text-gray-400 mt-[20px] hover:text-[#000957] bg-brand-color px-2 py-1 rounded-md hover:scale-[1.1]">
            <LuLogOut/>
        </button>
            </div>
        </div>
    </div>
    </>
)
}

export default Navbar