import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import buck1 from '../assets/buckyy.png';
import img1 from '../assets/ab.png';

const Attendance = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Destructure the form data from location.state or set default values
    const { branch, batch, section, subject } = location.state || {
        branch: "N/A",
        batch: "N/A",
        section: "N/A",
        subject: "N/A"
    };
    
    const [prn, setPrn] = useState('');

    const handleInputChange = (e) => {
        setPrn(e.target.value);
    };

    const handleSubmit = () => {
        console.log("Marked attendance for PRN:", prn);
        
        navigate('/success', {
            state: { prn, branch, batch, section, subject } 
        });
    };

    return (
        <div className='w-full h-screen flex justify-center items-center relative overflow-hidden'>
            <img className='absolute w-full h-full object-cover' src={buck1} alt="Background" />
            <h1 className='text-4xl font-bold text-white absolute top-24'>Attendance</h1>

            {/* Card Container */}
            <div className="bg-white/90 rounded-lg p-8 shadow-lg flex items-center w-7/12 max-w-4xl relative z-10">
                <img className='w-1/3 h-auto' src={img1} alt="Illustration" />

                <div className="ml-8 w-2/3">
                    <div className="space-y-4 text-lg text-gray-800">
                        <p><span className="font-semibold text-blue-600">BRANCH:</span> {branch}</p>
                        <p><span className="font-semibold text-blue-600">BATCH:</span> {batch}</p>
                        <p><span className="font-semibold text-blue-600">SECTION:</span> {section}</p>
                        <p><span className="font-semibold text-blue-600">SUBJECT:</span> {subject}</p>

                        <div>
                            <label htmlFor="prn" className="font-semibold text-blue-600">PRN:</label>
                            <input
                                type="text"
                                id="prn"
                                className="border border-blue-600 rounded p-2 w-full mt-1 outline-none"
                                placeholder="Enter PRN"
                                value={prn}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <button
                        className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        MARK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
