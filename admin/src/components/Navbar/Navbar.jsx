import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { User, LogOut, Settings, ChevronDown, Mail, ShieldCheck } from 'lucide-react'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='navbar' ref={dropdownRef}>
      <div className='logo-container'>
        <img className='logo' src={assets.logo} alt='logo' />
        <p>Admin Panel</p>
      </div>

      <div className='navbar-profile' onClick={() => setShowDropdown(!showDropdown)}>
        <div className='profile-image-wrapper'>
          <img className='profile' src={assets.profile_image} alt='profile' />
          <ChevronDown size={14} className={`chevron-icon ${showDropdown ? 'rotate' : ''}`} />
        </div>

        <ul className={`nav-profile-dropdown ${showDropdown ? 'visible' : ''}`}>
          <li className='dropdown-header'>
            <p className='user-name'>Zaid Malik</p>
            <p className='user-email'>admin@Yumgo.com</p>
            <div className='status-badge'>
              <ShieldCheck size={12} />
              <span>Verified Admin</span>
            </div>
          </li>
          <hr />
          <li><User size={18} /> <p>My Profile</p></li>
          <li><Settings size={18} /> <p>Settings</p></li>
          <hr />
          <li className='logout-item'><LogOut size={18} /> <p>Logout</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
