import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../Context/Firebase';
import "./CSSFiles/Login.css"
const Login = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateFunction = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigation to the home:

      navigateFunction("/");
    }
  })

  console.log(firebase);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sign in up a User")
    const result = await firebase.signInWithEmailAndPassword(email, password);
    console.log("Successful")
  }
  return (
    <div className='bg-black h-screen'>
      <div className='container bg-black text-center mx-24'>
        <div className='bg-black'>

          <div className='text-white text-8xl font-bold text-center m-4'>
            <p>Login Now</p>

            <div className='m-10 text-xl text-center text-black'>

              <input type="text" className='h-20 bg-white rounded-3xl w-[40vw] m-4' placeholder='Enter Username' onChange={(e) => setEmail(e.target.value)} value={email} />
              <input type="text" className='h-20 bg-white rounded-3xl w-[40vw] m-4' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />


            </div>
            <button onClick={handleSubmit} className='bg-white rounded-2xl text-black text-xl px-8 py-4 text-center'>Submit</button>
            <p className='text-lg m-4'>OR</p>
            <button onClick={firebase.signInWithGoogleProvider} className='text-xl bg-white text-black p-8 rounded-xl'>Sign in With Google</button>
          </div>

        </div>
        


      </div>

    </div>
  )
}

export default Login
