import React from 'react';
import { useLocation } from 'react-router-dom';
import profileIcon from '../assets/user.png';

const Dashboard = () => {
    const location = useLocation();
    const { prn, branch, batch, section, subject } = location.state || {};

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            <div className="flex mt-28 items-center justify-between px-8 py-4 bg-black text-white">
                <h1 className="text-2xl font-bold">Attendance</h1>
                <div className="flex items-center space-x-2">
                    <img src={profileIcon} alt="Profile" className="w-6 h-6 rounded-full" />
                    <p>Profile</p>
                </div>
            </div>

            <div className="flex-1 p-8 space-y-8">
                <div className="text-center p-4 bg-white text-black rounded-lg shadow-md">
                    <p className="text-sm text-gray-500">YOUR PRN</p>
                    <p className="text-lg font-semibold">{prn || "PRN Not Available"}</p>
                </div>

                {/* Use responsive flex utilities */}
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="text-center p-4 bg-white text-black rounded-lg shadow-md w-48 mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">BRANCH</p>
                        <p className="text-lg font-semibold">{branch || "N/A"}</p>
                    </div>
                    <div className="text-center p-4 bg-white text-black rounded-lg shadow-md w-48 mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">BATCH</p>
                        <p className="text-lg font-semibold">{batch || "N/A"}</p>
                    </div>
                    <div className="text-center p-4 bg-white text-black rounded-lg shadow-md w-48 mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">SECTION</p>
                        <p className="text-lg font-semibold">{section || "N/A"}</p>
                    </div>
                    <div className="text-center p-4 bg-white text-black rounded-lg shadow-md w-48 mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">SUBJECT</p>
                        <p className="text-lg font-semibold">{subject || "N/A"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
