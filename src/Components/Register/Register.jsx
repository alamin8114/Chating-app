import './Register.css'
import formbg from '../../assets/images/frombg.png'
import googlelogo from '../../assets/images/google 1.png'
import applelogo from '../../assets/images/apple-seeklogo.com 1.png'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
        <div className="main-from">
            <div style={{background:`url(${formbg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} className="from-bg">
                <div className="container">
                <div className="main-from-part">
                    <h1>Get Started</h1>
                    <p>Already have an Account ?<Link to={''}>Log in</Link></p>
                    <div className="input-from">
                        {/* name filds */}
                        <label>Name</label>
                        <input type="text" />
                        {/* email filds */}
                        <label>Email</label>
                        <input type="email" />
                        {/* password filds */}
                        <label>Password</label>
                        <input type="password" />
                        <div className="from-button">
                            <Link to={''}>Sign Up</Link>
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
        </div>
    </>
  )
}

export default Register