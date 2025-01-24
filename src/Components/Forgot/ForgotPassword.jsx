import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Bounce, toast } from "react-toastify"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { BeatLoader } from "react-spinners";
const ForgotPassword = () => {
    // ............custom variable
    const [Sendotp,setsendotp]=useState('')
    const [showbuttn,setshowbutton]=useState(false)
    const navigate =useNavigate()
    // ............firebase variable
    const auth = getAuth();
    //............ function part 
    const handelOtp=()=>{
        if(!Sendotp){
            toast.warn('Enter Your Email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
        else{
            setshowbutton(true)
            sendPasswordResetEmail(auth, Sendotp)
        .then(() => {
        toast.info('check your email', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        navigate('/Login')
        setshowbutton(false)
  })
  .catch((error) => {
    const errorCode = error.code;
        if(errorCode){
            toast.error('Invalid Email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
        
  });
        }
    }
  return (
    <>
    <div className="ForgotPassword  bg-[#C4D9FF]">
        <div className="container">
            <div className="forgot-password w-full h-screen flex justify-center items-center">
                <div className="forgot-box w-[600px] flex justify-center flex-col gap-4 items-center py-4 rounded-lg bg-white">
                <div className="input-filed">
                <input type="email" onChange={(e)=>setsendotp(e.target.value)} placeholder="Enter Your Email" className=" w-[400px] h-[50px] bg-gray-200 outline-none rounded text-[16px] font-Poppins font-semibold text-gray-400 pl-3" />
                {
                    showbuttn?
                    <button onClick={handelOtp} className=" w-[100px] h-[50px] hover:scale-[1.1] rounded text-black bg-brand-color text-[16px] font-Poppins font-semibold ">
                    <BeatLoader/>
                    </button>
                    :
                    <button onClick={handelOtp} className=" w-[100px] h-[50px] hover:scale-[1.1] rounded text-black bg-brand-color text-[16px] font-Poppins font-semibold ">
                        Send OTP
                    </button>
                }
                </div>
                    <Link className="block text-[16px] font-Poppins font-semibold text-gray-500 " to={'/Login'}>Back to <span className="text-[black]">Login</span></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword