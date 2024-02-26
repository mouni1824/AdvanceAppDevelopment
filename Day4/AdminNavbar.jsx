import AdminHome from "./AdminHome";
import AddOnView from "./AddOnView"
import PlanView from "./PlanView"
import Table from "./Table"
import AdminDashboard from "./AdminDashboard"
import  { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import "../../assets/css/style.css";
import logo from '../../assets/Images/logo.png';

export default function AdminNavbar() {

  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Item 1':
        return <AdminDashboard />;
      case 'Item 2':
        return <AdminDashboard/>;
      case 'Item 3':
        return <AdminHome />;
      case 'Plans':
        return <PlanView/>;
      case 'Add On':
        return <PlanView/>;
      case 'Recharge History':
        return <AddOnView/>; 
      default:
        return null;
    }
  };

  return (
    
    <div className="flex h-screen">
    
      <div className={`w-64 bg-black text-white fixed top-0 right-0 bottom-0 transition-all duration-300 ease-in-out z-10 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
      
        <div className="flex justify-between items-center p-4">
        <div className="logo" style={{display:'flex'}}>
        <img src={logo} style={{borderRadius:10,marginLeft:15}}></img>
        <b style={{fontSize:30,marginLeft:10}}>Netfi</b>
        </div>
          
          
        </div>
        <div className="p-4">
          <ul>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 1')}>
              Dashboard
            </li>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 2')}>
              Settings
            </li>
            <li className="p-4 cursor-pointer" onClick={() => handleItemClick('Item 3')}>
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-1">
       
        <div className="bg-black text-white p-4 flex justify-between">
          <div>
            <button onClick={toggleSidebar}>
              <FaBars className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex items-center space-x-8">
            <button className="text-white hover:text-gray-300" onClick={() => handleItemClick('Plans')}>Prepaid</button>
            <button className="text-white hover:text-gray-300" onClick={() => handleItemClick("Add On")}>Plans</button>
            <button className="text-white hover:text-gray-300" onClick={() => handleItemClick('Recharge History')}>Add On</button>
          </div>

          <div></div> 
        </div>
        <div className='content-div-div'>
        {selectedItem && (
          <div>
            {renderComponent()} 
          </div>
        )}</div>
      </div>
    </div>
  )
}
