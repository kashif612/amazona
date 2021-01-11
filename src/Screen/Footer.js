import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Footer = ()=>{
    return (
        <div>

         <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Easy Education consultant</h3>
              <p>
                F192 <br/>
                Naya Quila, Asi Nagar,Siwan,Bihar,841226<br/><br/>
                <strong>Phone:</strong> +91 8863952993<br/>
                <strong>Email:</strong> easyconedu@gmail.com<br/>
              </p>
              <div className="social-links mt-3">
                <NavLink to="https://www.facebook.com/admission.abroad.161" className="twitter"><i className="bx bxl-twitter"></i></NavLink>
                <NavLink to="https://www.facebook.com/admission.abroad.161" className="facebook"><i className="bx bxl-facebook"></i></NavLink>
                <NavLink to="https://instagram.com/adm_issionabroad?igshid=l5a9has6e4pg" className="instagram"><i className="bx bxl-instagram"></i></NavLink>
                <NavLink to="https://www.facebook.com/admission.abroad.161" className="google-plus"><i className="bx bxl-skype"></i></NavLink>
                <NavLink to="https://www.facebook.com/admission.abroad.161
                " className="linkedin"><i className="bx bxl-linkedin"></i></NavLink>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/About">About us</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/Admission">Apply For Admission</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Terms of service</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Privacy policy</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/Country">Ukraine</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/Country">kazakhstan</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/Country">Armenia</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/Country">Russia</NavLink></li>
              <li><i className="bx bx-chevron-right"></i> <NavLink to="/Country">kyrgyzstan</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>For latest update kindly Subscribe with our website.</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>EasyConsultant Group</span></strong>. All Rights Reserved. Powererd By:<strong><span>K&I </span></strong>
      </div>
      <div className="credits">
     
      </div>
    </div>
  </footer>

 
  <NavLink to="/" className="back-to-top"><i className="icofont-simple-up"></i></NavLink>


        </div>

    );
}

export default Footer;