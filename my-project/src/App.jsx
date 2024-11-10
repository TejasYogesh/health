import { useState } from 'react'
import Graph from './Components/Graph';
import Graph2 from './Components/Graph2';
import './App.css'
import './Components/CssFiles/Graph.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Login from './Pages/Login';
import { motion } from 'framer-motion'
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Nithin from './Pages/Nithin';
import Home from './Pages/Home';
import First from './Pages/First';
function App() {


  return (
    <>
      <div>

        {/* <Navbar /> */}
        {/* <motion.h1 className='text-white text-center text-6xl m-10 font-bold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}>Comparision Graph</motion.h1>
        <motion.h2 className='text-white text-center mx-24'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 4
          }}>This is a simple health monitor application that displays the user's health data in
          This is a Representation of the Health of a individual - Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Maiores qui omnis,
          quod est voluptatibus, dicta quasi et assumenda autem cumque esse sint!</motion.h2> */}
        {/* <Graph /> */}
        {/* <Graph2 /> */}



        {/* <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<h1 className='text-white'><Login /></h1>}></Route>
          <Route path='/register' element={<h1 className='text-white'><Register /></h1>}></Route>
        </Routes> */}

        
        {/* <Login /> */}
        {/* <Nithin/> */}
      </div>

    </>
  )
}

export default App
