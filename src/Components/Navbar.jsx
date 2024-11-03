import { AlignJustify, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import profileIcon from '../assets/user.png';
import Home from '../assets/house.png';
import dashboard from '../assets/dashboardd.png';
import immi from '../assets/immigration.png';
import task from '../assets/task-management.png';
import sett from '../assets/cogwheel.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemsRef = useRef([]);
  const mobileNavItemsRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(navItemsRef.current, {
        x: -20,
        duration: 0.5,
        stagger: 0.2,
      }, "-=0.3");

    if (isOpen) {
      gsap.from(mobileNavItemsRef.current, {
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [isOpen]);

  const toggleNavbar = () => {
    console.log("Navbar is toggling, current state:", isOpen);
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: dashboard },
    { name: "Attendance", href: "/qr-page", icon: immi },
    { name: "Projects", href: "#contact", icon: task },
    { name: "Settings", href: "#settings", icon: sett },
  ];

  return (
    <nav className={`fixed flex justify-between items-center top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white px-12 py-4 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-90'} bg-black`}>

      <div className='text-white text-2xl font-bold'>
        JustScan 
      </div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex space-x-8 ml-auto items-center justify-center'>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            ref={(el) => (navItemsRef.current[index] = el)}
            className='nav-item text-xl font-bold text-white hover:text-violet-500 hover:underline decoration-2 underline-offset-8 font-[Oswald] duration-500'
          >
            {item.name}
          </a>
        ))}
        <button className='bg-blue-600 text-white text-lg font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300'>
          LOGIN
        </button>
        <button className='bg-blue-600 text-white text-lg font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300'>
          SIGN UP
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='lg:hidden ml-auto'>
        <button onClick={toggleNavbar}>
          {isOpen ? <X className="text-gray-600" /> : <AlignJustify className="text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden fixed top-0 bottom-0 right-0 z-50 bg-neutral-900 opacity-95 w-60 h-screen p-12 flex flex-col justify-center items-center'>
          <button onClick={toggleNavbar} className="absolute top-4 right-4">
            <X className="text-white" />
          </button>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4 flex items-center">
                <img src={item.icon} alt={`${item.name} icon`} className="mr-3 w-6 h-6" />
                <a
                  className="nav-item text-lg text-white font-bold font-[poppins] duration-1000"
                  href={item.href}
                  ref={(el) => (mobileNavItemsRef.current[index] = el)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
