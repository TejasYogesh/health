import React from 'react';
import { useFirebase } from '../Context/Firebase';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
import Scroll from './Scroll';
import { Link } from 'react-router-dom';
import Graph2 from '../Components/Graph2';

import "./CSSFiles/home.css"
const Home = () => {

  const { signOut } = useFirebase();
  const nav = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(); // Wait for the signOut promise to resolve

      console.log("Successfully logged out");
      nav(-1);
    } catch (error) {
      console.error("Error logging out: ", error); // Log any error that occurs during sign out
    }
  };


  return (
    <div className='bg-black h-full'>

      <Scroll />

      <div>
        <motion.div className='text-8xl text-white text-center font-bold p-12'> <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Introducing")
              .pauseFor(1000)
              .deleteAll()
              .typeString("CERT-IQ")
              .start();
          }}
        /></motion.div>
        <motion.div className='text-md text-white m-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}>Designed to make
          learning efficient, accessible, and enjoyable, this system fosters
          a deeper understanding of concepts and helps students build
          skills that are essential for success in the modern world.</motion.div>
        <motion.div className='text-md text-white m-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}>An Innovative way to learn new things and
          improve your learning ability</motion.div>
        {/* <button className='bg-white px-6 py-4 my-8 mx-4 rounded-xl'>Visit Now</button> */}
        {/* <button>Register</button> */}



      </div>

      <section className="education" id="education">

        <div className="timeline-items">




          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">01</div>
            <div className="timeline-content">
              <h3 className='font-bold'>4th Stroke Engine</h3>
              <p>A four-stroke engine, also known as a four-cycle engine, is an internal combustion engine that completes four distinct strokes of the piston.
              </p>
              <div className='my-8'>
                <Link to="/stroke" className='know bg-white p-4 my-4 rounded-xl'>Know more</Link>
              </div>
            </div>


          </div>


          {/* <!-------------------------------------------------------- Timeline - item2 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">02</div>
            <div className="timeline-content">
              <h3 className='font-bold'>NEET - Human Execretory System</h3>
              <p>The human excretory system, also known as the urinary system, is responsible for the removal of waste products
                from the body and the regulation of water</p>
              <div className='my-8'>
                <Link to="/excretory" className='bg-white p-4 my-4 rounded-xl'>Know more</Link>
              </div>
            </div>

          </div>



          {/* <!-------------------------------------------------------- Timeline - item3 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">03</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Electric Circuits</h3>
              <p>A Crackathon is a competition for tech enthusiasts solving complex puzzles through debugging and reverse engineering.</p>
              <div className='my-8'>
                <Link to="/electric" className='bg-white p-4 my-4 rounded-xl'>Know more</Link>
              </div>
            </div>

          </div>


          {/* <!-------------------------------------------------------- Timeline - item3 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">04</div>
            <div className="timeline-content">
              <h3 className='entror font-bold'>CPU - Working</h3>
              <p>ENTRORPHOSIS Ignites entrepreneurial insights, sharpens skills, and
                fosters innovation, cultivating a growth-focused mindset.
              </p>
              <div className='my-8'>
                {/* <Link to="/entrorphosis" className='bg-white p-4 my-4 rounded-xl'>Know more</Link> */}
              </div>
            </div>

          </div>


          {/* <!-------------------------------------------------------- Timeline - item4 -------------------------------------------------------------> */}


          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">05</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Computer Science-Basics</h3>
              <p>Git & GitHub Hackathon unites developers to solve challenges, learn, collaborate,and innovate in technology.</p>
              <div className='my-8'>
                {/* <Link to="/git" className='bg-white p-4 my-4 rounded-xl'>Know more</Link> */}
              </div>
            </div>

          </div>


          {/* <!-------------------------------------------------------- Timeline - item5 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">06</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Cyber Security && Ethical Hacking </h3>
              <p>Cyber Security and Ethical Hacking , This Workshop enhances cybersecurity skills, covering
                threats, defenses , and ethical hacking techniques for protection.
              </p>
              <div className='my-8'>
                {/* <Link to="/cyber" className='bg-white p-4 my-4 rounded-xl'>Know more</Link> */}
              </div>
            </div>

          </div>







        </div>
      </section>

      <div className='whats text-white'>
        <p className='text-[50px] lg:text-[100px] font-bold p-10'>What's <span className='text-blue-400'>New:</span></p>
        <div className='newEvents px-10'>
          <p className='text-[40px] lg:text-[90px] font-bold text-blue-400'>01.</p>
          <p className='text-[30px] lg:text-[50px] font-bold'>Generative AI</p>
          <p className='text-[10px] lg:text-[30px] font-bold'>Generative AI is set to dominate as a key technology trend in 2025</p>
          <p className='justify-center'>Starting the list of new technology trends with the talk of the town, gen-AI!
            Generative AI is set to dominate as a key technology trend in 2025, reshaping industries through its ability to create highly
            sophisticated and human-like content, from text and images to audio and complex simulations. Advancements in generative models, like GPTs
            and multimodal systems, are driving new applications in content creation,
            design automation, and interactive experiences.</p>
          <button className='my-10 p-5 bg-white text-black'><a href="https://forms.gle/BaZBMWTkS1zunVSt7">Register Now</a></button>
        </div>

        <br />
        <div>
          <div className='bg-white w-full h-2'></div>
        </div>
        {/* <div className='w-[99vw] h-[10px] bg-pink-700 text-center items-center'></div> */}


        <div className='newEvents2 px-10'>
          <p className='text-[40px] lg:text-[90px] font-bold text-blue-400'>02.</p>
          <p className='text-[30px] lg:text-[50px] font-bold'>Quantum Computing</p>
          <p className='text-[10px] lg:text-[30px] font-bold'>9:30 AM | 30th Nov to 1st Dec | Venue - Civil CAED Lab</p>
          <p className='justify-center'>The Git & GitHub Workshop unites

            visionary developers and creative designers to address real-world challenges
            . Participants engage in immersive, hands-on sessions to master Git for
            effective version control and GitHub for seamless collaboration. This
            dynamic platform fosters creativity, nurtures teamwork, and empowers
            innovators to transform bold ideas into
            groundbreaking solutions that can shape the future of the tech industry.</p>
          <button className='my-10 p-5 bg-white text-black'><a href="https://forms.gle/vEXxLU49TczCb6qi8">Register Now</a></button>
        </div>
      </div>

      <div>
        <div className='bg-white w-full h-2'></div>
      </div>
      <div className='mx-10'>
        <button className='bg-white px-6 py-4 my-8 rounded-xl' onClick={handleLogOut}>Log Out</button>
        {/* <button className='bg-white px-6 py-4 my-8 rounded-xl mx-10' onClick={handleLogOut}>About App</button> */}
        <button className='bg-white px-4 py-4 my-8 rounded-xl mx-4' onClick={handleLogOut}>Attend the Test</button>
        <Link to="/graph" className='bg-white px-4 py-4 my-8 rounded-xl mx-2'>Know Your Level | Through Graph</Link>
      </div>

    </div>
  );
};

export default Home;