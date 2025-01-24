import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import formbg from '../../assets/images/frombg.png'
import googlelogo from '../../assets/images/google 1.png'
import applelogo from '../../assets/images/apple-seeklogo.com 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Bounce, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { datastore } from "../../slick/counterSlice";
import { getDatabase, ref, set } from "firebase/database";
const Login = () => {
        // custom variable 
        const navigate =useNavigate()
        const [data,setdata]=useState({ 'username':'','password':'','email':'','usererror':"", 'emailerror':'','passworderror':''})
        const [loding,setloding]=useState(false)
        const dispatch=useDispatch()
       // firebase variable
        const auth = getAuth();
        const db = getDatabase();
        
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
                setloding(true)
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if(user.emailVerified == false){
                        toast.warn('email is not Verified', {
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
                        navigate('/Login')
                        setloding(false)
                    }
                    else{
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
                            setloding(false)
                            dispatch(datastore(user))
                            localStorage.setItem('jmadata' , JSON.stringify(user))
                            set(ref(db, 'allUser/'), {
                                userPhoto:user.photoURL,
                                userName:user.displayName
                            });
                    }
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
                            setloding(false)
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
                            <Link className="block text-[14px] font-Poppins font-bold text-white" to={'/forgotPassword'}>Forgot Password?</Link>
                        </div>
                            <div className="from-button">
                                {
                                    loding?
                                    <button onClick={handelbutton}><BeatLoader/></button>
                                    :
                                <button onClick={handelbutton}>Sign Up</button>
                                }
                            </div>
                        <div className="sing-out flex items-center justify-center gap-2 mt-[30px]">
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

export default Login