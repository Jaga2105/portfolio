import React from 'react'
import './App.css';
import Navbar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Projects from './components/projects/Projects';
import About from './components/about/About';

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
      <Navbar/>
      <Banner/>
      <Projects/>
      <About/>
      </div>
    </div>
  )
}

export default App