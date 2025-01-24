import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import { useSelector } from "react-redux"
import { useEffect } from "react"


const Layout = () => {
  const courentuser=useSelector((store)=>store.data.value)
  const navigate=useNavigate()
  useEffect(()=>{
    if(courentuser == null){
      navigate('/Login')
    }
  } , [])

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout