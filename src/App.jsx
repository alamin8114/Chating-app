import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import { ToastContainer } from 'react-toastify';
import app from './Components/Sdk/Firebase.congig'
import Login from './Components/Login/Login';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import ForgotPassword from './Components/Forgot/ForgotPassword';
import Profile from './Components/Profile/Profile';
import AllUser from './Pages/AllUser';
function App() {
 const myroute=createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/' element={<Profile/>}/>
    <Route path='/allUser' element={<AllUser/>}/>

    </Route>
    </Route>
  )
 )

  return (
    <>
    <ToastContainer/>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
