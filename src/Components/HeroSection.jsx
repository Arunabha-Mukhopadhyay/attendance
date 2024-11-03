import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'; 
import { Link } from 'react-router-dom';  
import img1 from '../assets/ab.png'; 

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(imgRef.current, { scale: 0 }, { scale: 1, duration: 1.5, ease: 'bounce.out', delay: 0.5 });
    gsap.fromTo(headingRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 1.5 });
    gsap.fromTo(buttonRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 2 });
    
    gsap.to(paraRef.current, {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      duration: 5, 
      ease: "power2.out",
      delay: 1.8
    });
  }, []);

  return (
    <main className="fixed min-h-full bg-black text-white flex flex-col lg:flex-row items-center justify-between p-10">
      <div className="lg:w-1/2  w-10/12 mt-10 lg:mt-0 order-1 lg:order-2 flex justify-center">
        <img
          ref={imgRef}
          src={img1}
          alt="Illustration"
          className="w-2/3 lg:w-full h-auto "
        />
      </div>

      <div className="lg:w-1/3  text-left order-2 lg:order-1">
        <h1 ref={headingRef} className="lg:text-9xl text-4xl font-inria-serif font-bold mb-4">Creating Ease</h1>
        <p ref={paraRef} className="text-lg text-slate-300 mb-6"></p>
        <div ref={buttonRef} className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
          

          <Link to="/new-class">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              New Class
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;