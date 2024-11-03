import React from 'react';
import expired from '../assets/expire.jpg'; // expired image
import buck1 from '../assets/buckyy.png'; // background

const ExpiredPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start pt-20 overflow-hidden">
      <div className="fixed inset-0 bg-black">
        <img src={buck1} className="fixed bottom-0 w-full h-1/3 object-cover" alt="Background Wave" />
      </div>
      
      <div className="absolute top-20 left-4">
        <button className="text-white text-lg" onClick={() => window.history.back()}>
          &larr; BACK
        </button>
      </div>
      
      <div className="relative flex flex-col items-center z-10 mt-12">
        <div className="w-64 h-64 bg-white rounded-3xl flex items-center justify-center">
          <img src={expired} alt="Expired" className="w-40 h-40" />
        </div>
        <h1 className="text-white text-3xl font-bold mt-4">QR Expired!</h1>
      </div>
    </div>
  );
};

export default ExpiredPage;
