import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import formbg from '../../assets/images/frombg.png'
import googlelogo from '../../assets/images/google 1.png'
import applelogo from '../../assets/images/apple-seeklogo.com 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Bounce, toast } from "react-toastify";

const Login = () => {
       const [data,setdata]=useState({ 'username':'','password':'','email':'','usererror':"", 'emailerror':'','passworderror':''})
        // firebase variable
        const auth = getAuth();
            // custom variable 
        const navigate =useNavigate()
        // button part///////////////////
        const handelbutton=(e)=>{
            e.preventDefault()
            if(data.email == ''){
                setdata((prev)=>({... prev ,emailerror:'Plz Enter Your email'}))
            }
            if(data.password == ''){
                setdata((prev)=>({... prev ,passworderror:'Plz Enter Your password'}))
            }
            else{
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success('Login Success', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
                        navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if(errorCode){
                        toast.error('Something went wrong', {
                            position: "top-right",
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
     <div className="main-from">
                <div style={{background:`url(${formbg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} className="from-bg">
                    <div className="main-from-part">
                        <h1>Get Started</h1>
                        <p>You have No Account ?<Link to={'/Register'}>Register</Link></p>
                        <div className="input-from">
                            {/* email filds */}
                            <label>Email</label>
                            <p className='text-[14px] !text-red-500'>{data.emailerror}</p>
                            <input  onChange={(e)=>{setdata((prev)=>({... prev , email:e.target.value})),setdata((prev)=>({... prev ,emailerror:''}))}} type="email" />
                            {/* password filds */}
                            <label>Password</label>
                            <p className='text-[14px] !text-red-500'>{data.passworderror}</p>
                            <input type='password' onChange={(e)=>{setdata((prev)=>({... prev , password:e.target.value})),setdata((prev)=>({... prev ,passworderror:''}))}}/>
                            <div className="from-button">
                                <Link onClick={handelbutton} to={''}>Sign Up</Link>
                            </div>
                        </div>
                        <div className="sing-out flex items-center justify-center pl-[67px] gap-2 mt-[30px]">
                            <div className="w-[150px] h-[2px] bg-white"></div>
                            <p>Or Sign Up with </p>
                            <div className="w-[150px] h-[2px] bg-white"></div>
                        </div>
                        <div className="google-button flex justify-center items-center">
                            <button>
                                <img src={googlelogo} alt="google-logo" />
                            </button>
                            <button>
                                <img src={applelogo} alt="google-logo" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login