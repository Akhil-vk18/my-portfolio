import React ,{useState} from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';



function App(){
  const [darkmode,setDarkMode]=useState(false);
  const changeTheme =()=>{
    setDarkMode(!darkmode);
  };
  return (
    <div className={darkmode?'app dark':'app'}>
      <div className='toggle-Wrapper' onClick={changeTheme}>
        <div className={'toggle-circle ${darkmode?"Dark":""}'}>
        {darkmode?"☀️":"🌙"}
        </div>
      </div>
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;