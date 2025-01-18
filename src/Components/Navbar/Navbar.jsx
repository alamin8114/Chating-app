import { useSelector } from 'react-redux';
import chatinglogo from '../../assets/images/chating-nav-removebg-preview.png'
import { IoIosLogOut } from "react-icons/io";
import store from '../../store';
const Navbar = () => {
    const data =useSelector((store)=>store.data.value)
    console.log(data)
  return (
    <>
    <div className="alamin-nav py-3 bg-[#C890A7]">
        <div className="container">
            <div className="nav-row flex justify-around">
                <div className="navlogo">
                    <img className='w-[50px] rounded-full' src={chatinglogo} alt="logo" />
                </div>
                <div className="mein-menu">
                    <ul className='flex items-center gap-6'>
                        <li className='text-[20px] font-Poppins font-bold text-white'>{store.displayName}</li>
                        <li className='w-[50px] h-[50px] border-2 border-[#471f30] bg-gray-300 rounded-full'></li>
                        <li className='text-[24px] hover:text-black transition-all duration-[.4s] hover:scale-[1.1] text-white'><IoIosLogOut/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Navbar