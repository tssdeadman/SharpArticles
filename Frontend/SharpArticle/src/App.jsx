import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { useState } from 'react'


function App() {

  const[element,setElement]=useState(<Login/>);

  if (true) {
    // setElement(<Home/>)
  }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={element} />
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)
  return <RouterProvider router={router} />

}

export default App
