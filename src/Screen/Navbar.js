import React from 'react';
import {NavLink} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';




class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  
  }
 
render(){
    return(
        <>
              <Menu>
      <li className="active"><i className="icofont-layers"></i><NavLink to="/"> <strong> Home</strong></NavLink></li>
          <li><i className="icofont-box"></i><NavLink to="/Admission"> <strong> Admission </strong></NavLink></li>
          <li><i className="icofont-briefcase"></i><NavLink to="/Country"><strong>  Country</strong></NavLink></li>
             <li><i className="icofont-direction-sign"></i> <NavLink to="/Country"><strong>Ukraine</strong></NavLink></li>
              <li><i className="icofont-direction-sign"></i> <NavLink to="/Country"><strong>kazakhstan</strong></NavLink></li>
              <li><i className="icofont-direction-sign"></i> <NavLink to="/Country"><strong>Armenia</strong></NavLink></li>
              <li><i className="icofont-direction-sign"></i> <NavLink to="/Country"><strong>Russia</strong></NavLink></li>
              <li><i className="icofont-direction-sign"></i> <NavLink to="/Country"><strong>kyrgyzstan</strong></NavLink></li>
          <li><i className="icofont-bullhorn"></i><NavLink to="/About"><strong> About</strong></NavLink></li>
        <li><i className="icofont-contacts"></i><NavLink to="/Contact"><strong> Contact</strong></NavLink></li><br/>
         <li><i className="icofont-paper-plane"></i> <NavLink to="/"><strong>Terms & service</strong></NavLink></li>
              <li><i className="icofont-tasks"></i> <NavLink to="/"><strong>Privacy policy</strong></NavLink></li>
                        <div className="social-links mt-3"><br/>

           <NavLink to="#" className="twitter"><i className="bx bxl-twitter"></i></NavLink>
                <NavLink to="#" className="facebook"><i className="bx bxl-facebook"></i></NavLink>
                <NavLink to="#" className="instagram"><i className="bx bxl-instagram"></i></NavLink>
                <NavLink to="#" className="google-plus"><i className="bx bxl-skype"></i></NavLink>
                <NavLink to="#" className="linkedin"><i className="bx bxl-linkedin"></i></NavLink>
</div>
      </Menu>

         <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <i className="icofont-email"></i> easyconedu@gmail.com
      </div>
      <div className="d-flex align-items-center">
        <i className="icofont-phone"></i> Call us now +91 8863952993
        
      </div>
    </div>
  </div>

  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <NavLink to="" className="logo mr-auto"><img src={"/assets/img/logo.png"} /></NavLink>


      <nav className="nav-menu d-none d-lg-block">
      <ul>
      
          <li className="active"><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Admission">Apply For Admission</NavLink></li>
          <li><NavLink to="/Country">Country</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        

        </ul>


      </nav>

      <NavLink to="/Apply" className="appointment-btn scrollto"><span className="d-none d-md-inline"></span>Apply Now </NavLink>

    </div>
  </header>
  <br/>
  <br/>
  <br/>
  <br/>
 

  
        </>

);
    }
}
export default Navbar;