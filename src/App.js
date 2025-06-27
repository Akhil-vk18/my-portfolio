import React ,{useState} from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profile from './components/Profile';
import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';




function App(){
  // const [darkmode,setDarkMode]=useState(false);
  // const changeTheme =()=>{
  //   setDarkMode(!darkmode);
  // };
  // return (
  //   <div className={darkmode?'dark':'light'}>
  //     <div className='toggle-Wrapper' onClick={changeTheme}>
  //       <div className={`toggle-circle ${darkmode?"Dark":""}`}>
  //       {darkmode?"☀️":"🌙"}
  //       </div>
  //     </div>
  return(
    <div className='main'>
      <Header />
      <Profile  />
      <Skills  />
      <Projects  />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;