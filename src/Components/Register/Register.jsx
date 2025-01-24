import './Register.css'
import { getAuth, createUserWithEmailAndPassword ,updateProfile ,sendEmailVerification   } from "firebase/auth";
import formbg from '../../assets/images/frombg.png'
import googlelogo from '../../assets/images/google 1.png'
import applelogo from '../../assets/images/apple-seeklogo.com 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
const Register = () => {
    
            const [data,setdata]=useState({ 'username':'','password':'','email':'','usererror':"", 'emailerror':'','passworderror':''})
            // firebase variable
            const auth = getAuth();

            // custom variable 
            const navigate =useNavigate()
            const [loding,setloding]=useState(false)
    // button part///////////////////
    const handelbutton=(e)=>{
        e.preventDefault()
        if(data.username == ''){
            setdata((prev)=>({... prev ,usererror:'Plz Enter Your Username'}))
        }
        if(data.email == ''){
            setdata((prev)=>({... prev ,emailerror:'Plz Enter Your email'}))
        }
        if(data.password == ''){
            setdata((prev)=>({... prev ,passworderror:'Plz Enter Your password'}))
        }
        else{
            setloding(true)
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: data.username, photoURL: "https://thumbs.dreamstime.com/z/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg"
                }).then(() => {
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.success('send Email Verification Code', {
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
                    });
                    navigate('/Login')
                    setloding(false)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode== 'auth/invalid-email'){
                    toast.error('invalid Email', {
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
                // 
                if(errorCode== 'auth/weak-password'){
                    toast.error('weak Password', {
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
//email-already-in-use
                if(errorCode== 'auth/email-already-in-use'){
                    toast.error('email Already Use', {
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
                // ..
              });
        }
        
    }

  return (
    <>
        <div className="main-from">
            <div style={{background:`url(${formbg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} className="from-bg">
                <div className="main-from-part">
                    <h1>Get Started</h1>
                    <p>Already have an Account ?<Link to={'/Login'}>Log in</Link></p>
                    <div className="input-from">
                        {/* name filds */}
                        <label>Name</label>
                        <p className='text-[24px] !text-red-500'>{data.usererror}</p>
                        <input onChange={(e)=>{setdata((prev)=>({... prev , username:e.target.value})),setdata((prev)=>({... prev ,usererror:''}))}} type="text" />
                        {/* email filds */}
                        <label>Email</label>
                        <p className='text-[14px] !text-red-500'>{data.emailerror}</p>
                        <input  onChange={(e)=>{setdata((prev)=>({... prev , email:e.target.value})),setdata((prev)=>({... prev ,emailerror:''}))}} type="email" />
                        {/* password filds */}
                        <label>Password</label>
                        <p className='text-[14px] !text-red-500'>{data.passworderror}</p>
                        <input type='password' onChange={(e)=>{setdata((prev)=>({... prev , password:e.target.value})),setdata((prev)=>({... prev ,passworderror:''}))}}/>
                    </div>
                        <div className="from-button">
                            {
                                loding?
                                <button onClick={handelbutton} ><BeatLoader/></button>
                                :
                            <button onClick={handelbutton} >Sign Up</button>
                            }
                        </div>
                    <div className="sing-out flex items-center justify-center  gap-2 mt-[30px]">
                        <div className="w-[150px] h-[2px] bg-white"></div>
                        <p>Or Sign Up with </p>
                        <div className="w-[150px] h-[2px] bg-white"></div>
                    </div>
                    <div className="google-button flex justify-center items-center gap-[30px]">
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

export default Register