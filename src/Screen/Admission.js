import {NavLink} from 'react-router-dom';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import AOS from 'aos';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Admission=()=>{
AOS.init()
const [selectedTab, setSelectedTab] = useState('tab-1');

    return(
        <div>
            
    <section id="services" className="services services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Choose Your Interest Here.</h2>
          <p>We are suggesting here to choose your future career we are providing the different types of study visa for the best universities of given countires choose your career and submit your form one of our counsellor will call you and provide the best way to choose your carerr.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="icofont-medical-sign-alt"></i></div>
            <h4 className="title"><NavLink to="/apply">MEDICAL(MBBS)</NavLink></h4>
            <p className="description">We have a range of universities available in different country they are apporoved by WHO and MCI recongnised so don't wait apply Now.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="icofont-graduate-alt"></i></div>
            <h4 className="title"><NavLink to="/apply">Engineering</NavLink></h4>
            <p className="description">Engineering from european country give you better oppurtinity to learn new techonology and also you can easly placed in reputed company.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="icofont-certificate"></i></div>
            <h4 className="title"><NavLink to="/apply">MS(M.TECH)</NavLink></h4>
            <p className="description">Ms and M.tech are the best courses for master if you want to become a expert in techonology and keen to understand the new technology apply this course will suggest the best university in european country.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="icofont-tooth"></i></div>
            <h4 className="title"><NavLink to="/apply">BDS</NavLink></h4>
            <p className="description">Become dentist is very easy but become a good dentist it is very hard so we provide you best university which help you out in study of dental surgery.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="icofont-businessman"></i></div>
            <h4 className="title"><NavLink to="/apply">MBA</NavLink></h4>
            <p className="description">Become a master in business if you are willing to become a good business advisor and keen to know how business is run very smoothly choose MBA degree from european country we will provide the best universities for business management</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="icofont-pills"></i></div>
            <h4 className="title"><NavLink to="/apply">Pharmacy</NavLink></h4>
            <p className="description">Pharmacy is best option for study in european country if you want become a very smart pharmalist so choose world best Pharmacy universities to know about the medicine combination.</p>
          </div>
        </div>

      </div>
    </section>
   
           </div>
    )
}
export default Admission;