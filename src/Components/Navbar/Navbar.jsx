
import { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa"
import { LuCircleUserRound } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { FiUserMinus } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
const Navbar = () => {
    const[show,setshow]=useState(false)
    // const data =useSelector((store)=>store.data.value)
    // console.log(data)
  return (
    <>
    <div className="alamin-nav  bg-[#E8F9FF]">
        <div className="container">
        <div className="main-menu">
            <div className={`main-nav ${show?'openmenu' : 'closemenu'}`}>
                <div className={`icons icons1 ${show?'showicon':'hiddenicon'}`}>
                    <ul>
                        <li><LuCircleUserRound/>
                        <p>Profile</p>
                        </li>
                        <li><HiOutlineUsers/><p>User</p></li>
                        <li><LuMessageSquareMore/><p>Message</p></li>
                    </ul>
                </div>
                <button onClick={()=>setshow(!show) } className="barbutton">
                    <FaBars/>
                </button>
                <div  className={`icons icons2 ${show?'showicon':'hiddenicon'}`}>
                    <ul>
                        <li><FiUserCheck/><p>Request</p></li>
                        <li><FiUserPlus/><p>Friends</p></li>
                        <li><FiUserMinus/><p>Blocked</p></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
)
}

export default Navbar