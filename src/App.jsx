import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'

function App() {
 const myroute=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Register/>}>

    </Route>
  )
 )

  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
