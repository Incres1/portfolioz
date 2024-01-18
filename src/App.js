import React, { useState } from 'react';
import Navbar from './components/navbar';
import Body from './components/body';

function App() {
  const [selectedComponent, setSelectedComponent] = useState();

  const handleNavClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className='bg-dark-blue h-screen'>
      <Navbar onNavClick={handleNavClick} />
      <Body selectedComponent={selectedComponent} />
    </div>
  );
}

export default App;