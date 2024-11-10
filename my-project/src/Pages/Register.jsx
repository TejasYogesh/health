import React, { useState } from 'react'
import { useFirebase } from '../Context/Firebase'
const Register = () => {
    const firebase = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(firebase);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sign in up a User")
        const result = await firebase.signUpWithUserWithEmailAndPassword(email, password);
        console.log("Successful")
    }
    return (
        <div>
            <div className='container'>
                <div className='h-screen bg-black grid grid-cols-2'>

                    <div className='text-white text-8xl font-bold text-center'>
                        <p>Register Now</p>

                        <div className='m-10 text-xl text-center text-black'>

                            <input type="text" className='h-20 bg-white rounded-3xl w-[40vw] m-10' placeholder='Enter Username' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="text" className='h-20 bg-white rounded-3xl w-[40vw] m-10' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />


                        </div>
                        <button onClick={handleSubmit} className='bg-white rounded-2xl text-black text-xl px-8 py-4 text-center'>Submit</button>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Register
