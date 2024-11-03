import { useNavigate, useLocation } from 'react-router-dom';
import buck1 from '../assets/buckyy.png';
import qr_img from '../assets/QR_code.svg';

const QrPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { message, formData } = location.state || {
        message: "CS A Data Structures Theory - 21/10/2024",
        formData: {}
    };

    return (
        <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover" src={buck1} alt="Background" />

            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center">

                <h2 className="text-xl font-semibold mb-4">Attendance QR Code</h2>
                <img src={qr_img} alt="QR Code" className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72" />
                <p className="mt-4 text-gray-700 text-sm text-center">{message}</p>
                <button
                    className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
                    onClick={() => navigate('/attendance', { state: formData })} // Pass formData to Attendance
                >
                    CLOSE
                </button>
            </div>

            <div className="absolute bottom-0 w-full h-48 bg-blue-600 rounded-t-full"></div>
        </div>
    );
};


export default QrPage;
