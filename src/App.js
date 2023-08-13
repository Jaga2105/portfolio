import React from 'react'
import './App.css';
import Navbar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar/>
      <div className="max-w-screen-xl">
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
      </div>
    </div>
  )
}

export default App