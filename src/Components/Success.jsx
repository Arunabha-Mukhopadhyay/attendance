import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import buck1 from '../assets/buckyy.png';
import successIcon from '../assets/checked.png'; 

const Success = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { prn, branch, batch, section, subject } = location.state || {};

    const handleBack = () => {
           navigate('/dashboard',{
            state: { prn, branch, batch, section, subject } 
        });
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
            <img className="absolute w-full h-full object-cover" src={buck1} alt="Background" />

            <div className="absolute top-4 left-0 w-full flex justify-between items-center px-8 text-lg font-semibold text-white">
                <button onClick={handleBack} className="hover:underline mt-24">
                    &larr; BACK
                </button>
            </div>

            <div className="flex flex-col items-center z-10">
                <div className="bg-white rounded-xl p-12 shadow-xl flex items-center justify-center">
                    <img src={successIcon} alt="Success" className="w-48 h-48" />
                </div>
                <p className="text-3xl font-semibold text-white mt-8 p-4 text-center">
                    Attendance marked successfully!
                </p>
            </div>
        </div>
    );
};

export default Success;
