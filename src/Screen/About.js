import React from "react";
import {NavLink} from 'react-router-dom';


const About =()=>{
    return (
        

<div>
 
<section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <p>We easy education consultant is one of the trusted consultant group in india which provide and suggest the best university abroad so that the student can start there career and do the best in future . we not only suggest the university but also provide the best suggestion and guide the student to choose best universities in ukraine , kazaskasthan, armenia , russia and phillipines most of student start their career so don't wait apply now</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="/assets/img/about/a2.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Why Easy Eduction consultant?</h3>
            <p className="font-italic">
              Easy Education consultant is one of the fastest growing consultant group.Our is transparent and clear so below are the point why you have to choose easy consultant
            </p>
            <ul>
              <li><i className="icofont-check-circled"></i> We work in the policy no work no payment.</li>
              <li><i className="icofont-check-circled"></i> We provide the best guideline to the student so that they choose the best universities of the abroad.</li>
              <li><i className="icofont-check-circled"></i> Our work is simple and clear and provide the fatest service to the student and provide the education visa and univerities admission as soon as possible</li>
            </ul>
            <p>
             Don't wait apply now and start your career in MBBS, Engineering , MBA, MS, MD with the countires like kazakasthan , Armenia, Russia, phillipines,Ukraine with the best univeristies better education qualtities, better infrasturcture with best technology and medical science.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-doctor-alt"></i>
              <span data-toggle="counter-up">40+</span>
              <p><strong>univeristies</strong> We are collabirated with more than 40 universities </p>
              <NavLink to="#">Find out more &raquo;</NavLink>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-patient-bed"></i>
              <span data-toggle="counter-up">4+</span>
              <p><strong>Office</strong>We have offices in India as well as different country also </p>
              <NavLink to="#">Find out more &raquo;</NavLink>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-laboratory"></i>
              <span data-toggle="counter-up">7+</span>
              <p><strong>Courses</strong> We are providing study visa almost all major courses</p>
              <NavLink to="#">Find out more &raquo;</NavLink>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-award"></i>
              <span data-toggle="counter-up">No.1 </span>
              <p><strong>Trusted cosultant</strong> Our business is transparent and fair so we are the one of the trusted...</p>
              <NavLink to="#">Find out more &raquo;</NavLink>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt"></i>
              <h4>Registration</h4>
              <p>Our reputation and knowledge base will help you through college and other Registrations easily</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt"></i>
              <h4>Admission</h4>
              <p>Ensuring proper documentation to secure your seat without any issue</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images"></i>
              <h4>Visa</h4>
              <p>Adhering to embassy guideline for successful visa stamping</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield"></i>
              <h4>Airport Pickup</h4>
              <p>We arrange someone to welcome you at airport and set up thing</p>
            </div>
          </div>
          <img src="/assets/img/about/a1.jpg" className="image col-lg-6 order-1 order-lg-2" alt="" data-aos="zoom-in" />
        </div>

      </div>
    </section>
    </div>

    );
}
export default About;