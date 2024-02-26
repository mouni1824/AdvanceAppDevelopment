import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Home from './Home';
import AddOn from './AddOn'; 
import "../../assets/css/style.css";
import logo from '../../assets/Images/logo.png';
import Plans from './Plans';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Plans'); // Set initial state to 'Plans'

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Item 1':
        return <Dashboard />;
      case 'Item 2':
        return <Settings />;
      case 'Item 3':
        return <Home />;
      case 'Item 4':
        return <Home />;
      case 'Plans':
        return <Plans />;
      case 'Add On':
        return <AddOn />;
      case 'Recharge History':
        return <div>Recharge History Page Content</div>; 
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <div className={`w-64 bg-black text-white fixed top-0 right-0 bottom-0 transition-all duration-300 ease-in-out z-10 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="flex justify-between items-center p-4">
          <div className="logo" style={{display:'flex'}}>
            <img src={logo} style={{borderRadius:10,marginLeft:15}} alt="Logo"></img>
            <b style={{fontSize:30,marginLeft:10}}>Netfi</b>
          </div>
        </div>
        <div className="p-4">
          <ul>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 1')}>
              Profile
            </li>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 2')}>
              Settings
            </li>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 3')}>
              About
            </li>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 4')}>
              Logout
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <div>
            <button onClick={toggleSidebar}>
              <FaBars className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-grow justify-center">
            <button className="text-white hover:text-gray-300 mr-8" onClick={() => handleItemClick('Plans')}>Plans</button>
            <button className="text-white hover:text-gray-300 mr-8" onClick={() => handleItemClick("Add On")}>Add On</button>
            <button className="text-white hover:text-gray-300" onClick={() => handleItemClick('Recharge History')}>Recharge History</button>
          </div>
        </div>
        <div className='content-div-div'>
          {selectedItem && (
            <div>
              {renderComponent()} 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
