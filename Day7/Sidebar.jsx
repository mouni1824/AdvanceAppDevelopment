import { useState } from 'react';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Home from './Home';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    // Do not toggle the sidebar state here
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Settings':
        return <Settings />;
      case 'Home':
        return <Home />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: isSidebarOpen ? '40%' : '15%',
            height: '100vh',
            backgroundColor: '#2c3e50',
            transition: 'width 0.3s ease-in-out'
          }}
        >
          <div style={{ padding: '1rem' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={toggleSidebar}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
            </svg>
          </div>
          {isSidebarOpen && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{ padding: '1rem', color: 'white', cursor: 'pointer' }}
                onClick={() => handleMenuItemClick('Dashboard')}
              >
                Dashboard
              </div>
              <div
                style={{ padding: '1rem', color: 'white', cursor: 'pointer' }}
                onClick={() => handleMenuItemClick('Settings')}
              >
                Settings
              </div>
              <div
                style={{ padding: '1rem', color: 'white', cursor: 'pointer' }}
                onClick={() => handleMenuItemClick('Home')}
              >
                Home
              </div>
            </div>
          )}
        </div>
        <div style={{ flex: 1 }}>{renderPage()}</div>
      </div>
    </div>
  );
}
