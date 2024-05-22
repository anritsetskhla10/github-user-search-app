
import StyledHeader from '../styles/StyledHeader';
import { HeaderProps } from '../types';
import MoonImg from '/images/icon-moon.svg';
import SunImg from '/images/icon-sun.svg';




function Header({mode , setMode}:HeaderProps) {


    const changeMode = () => {
        setMode(!mode);
    }


  return (
    <StyledHeader mode={mode}>
        <h1>devfinder</h1>
        <div onClick={changeMode}>
            <h2>{mode ? "LIGHT" : "DARK"}</h2>
            <img src={mode ? SunImg : MoonImg} alt="theme icon" />
        </div>
    </StyledHeader>
  )
}

export default Header
