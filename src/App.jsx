import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';
function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const Opensidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
  <div className='grid-container'>
    <Header Opensidebar = {Opensidebar} />
    <Sidebar openSidebarToggle = {openSidebarToggle}  Opensidebar = {Opensidebar} />
    <Home />

  </div>
  
  );
}

export default App;
