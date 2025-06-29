import "./ToggleTheme.css";
import react  from "react";
import { IoSunny,IoMoon } from "react-icons/io5";

function ToggleTheme({darkmode,setDarkMode}){

  const changeTheme =()=>{
    setDarkMode(!darkmode);
  };
  
  return (
    
      <div className='toggle-Wrapper' onClick={changeTheme}>
        <div className={`toggle-circle ${darkmode?"Dark":""}`}>
        {darkmode?<IoSunny />:<IoMoon />}
        </div>
      </div>
      
  );
}
export default ToggleTheme;