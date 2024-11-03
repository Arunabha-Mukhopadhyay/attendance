import React, { useEffect, useRef, useState } from 'react';
import img1 from '../assets/ab.png'; 
import buck1 from '../assets/buckyy.png';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const NewClassPage = () => {
  const divref = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    branch: '',
    batch: '',
    section: '',
    subject: '',
    passkey: ''
  });

  useEffect(() => {
    if (divref.current) {
      const animation = gsap.fromTo(divref.current, { scale: 0 }, { scale: 1, duration: 1.5, ease: 'bounce.out', delay: 0.5 });
      return () => {
        animation.kill();
      };
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-GB');
    const message = `${formData.branch} ${formData.section} ${formData.subject} - ${currentDate}`;
    navigate('/qr-page', { state: { message, formData } });
  };

  
  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <img className='absolute w-full h-full object-cover' src={buck1} alt="Background" />

      <div ref={divref} className="bg-white/20 backdrop-blur-sm border border-white/30 absolute rounded-lg p-8 shadow-lg flex items-center justify-between w-11/12 max-w-4xl">

        <div className="w-1/2">
          <img src={img1} alt="Class Illustration" className="w-full h-auto" />
        </div>

        <div className="w-1/2 ml-8">
          <h1 className="text-white text-4xl font-bold mb-8">Generate QR Code</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
      
            <div>
              <label className="text-blue-300 block mb-2">Branch:</label>
              <select
                name="branch"
                className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-white"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="RnA">RnA</option>
                <option value="AIML">AIML</option>
                <option value="ECE">ECE</option>
              </select>
            </div>

            <div>
              <label className="text-blue-300 block mb-2">Batch:</label>
              <select
                name="batch"
                className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-white"
                value={formData.batch}
                onChange={handleInputChange}
              >
                <option value="">Select Batch</option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
              </select>
            </div>

            <div>
              <label className="text-blue-300 block mb-2">Section:</label>
              <select
                name="section"
                className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-white"
                value={formData.section}
                onChange={handleInputChange}
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            
            <div>
              <label className="text-blue-300 block mb-2">Subject:</label>
              <select
                name="subject"
                className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-white"
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="">Select Subject</option>
                <option value="DSA">DSA</option>
                <option value="Flexi">Flexi</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Web Dev">Web Dev</option>
              </select>
            </div>

            <div>
              <label className="text-blue-300 block mb-2">Passkey:</label>
              <input
                type="text"
                name="passkey"
                className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-white"
                value={formData.passkey}
                onChange={handleInputChange}
                placeholder="Enter passkey"
              />
            </div>

            <button type="submit" className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all">
              GENERATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewClassPage;
