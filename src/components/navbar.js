import React, { useState ,useEffect} from 'react'
import logo from '../images/logo.svg'
import './navbar.css'
const Navbar=()=> {
    const [hamburger,sethamburger]=useState(false);
    const [openBurg,setOpenBurg]=useState([false,false]);
    const displayHamburger=()=>{
        if(window.innerWidth<=800){
            sethamburger(true);
        }
        else{
            sethamburger(false);
        }
    }
    useEffect(()=>{displayHamburger()},[])
    window.addEventListener('resize',displayHamburger);
    const onBurgerClick=()=>{
        // setOpenBurg([!openBurg[0],!openBurg[1]]);
        if(!openBurg[0])
            setOpenBurg([true,false]);
        else
            setOpenBurg([false,true]);
    }
    return (
        <div className="navbar">
            <div className={`overlay ${openBurg[0]?"open":""} ${openBurg[1]?"close":""}`}>
            <div className="header--list">
               <a href="#top">About</a>
               <a href="#top">Careers</a>
               <a href="#top">Events</a>
               <a href="#top">Products</a>
               <a href="#top">Support</a>
           </div>
            </div>
           <img className="logo" src={logo} alt="Loop Studios"/> 
           <div className={`menu ${hamburger?"hamburger":""} ${openBurg[0]?"open":""}`} onClick={()=>onBurgerClick()}>
               <span></span>
               <span></span>
               <span></span>
           </div>
           <div className={`header--list ${hamburger?"hide-for-mobile":"show"}`}>
               <a href="#top">About</a>
               <a href="#top">Careers</a>
               <a href="#top">Events</a>
               <a href="#top">Products</a>
               <a href="#top">Support</a>
           </div>
        </div>
    )
}

export default Navbar;
