import React from 'react';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';




const Home = ()=>{
  AOS.init()
  const content = [
    {  image: '/assets/img/Russsia/r1.JPG' },
    {  image: '/assets/img/Russsia/r1.JPG'},
    {  image: '/assets/img/Russsia/r5.JPG'},
    {image: "/assets/img/Russsia/r6.JPG"},
    {image: '/assets/img/Russsia/r7.JPG'},
    {image: '/assets/img/Russsia/ru1.JPG'},
    {image: '/assets/img/Russsia/Ru2.JPG'},
    {image: '/assets/img/Russsia/Ru3.JPG'},
    {image:'/assets/img/Russsia/RU4.JPG'},
    {image: '/assets/img/Russsia/RU5.JPG'},
    {image: '/assets/img/Russsia/Slide-1.jpg'},
    {image: '/assets/img/Ukraine/u1.jpg'},
    {image:'/assets/img/Ukraine/u2.jpg'},
    {image: '/assets/img/Ukraine/u3.jpg'},
    {image: '/assets/img/Ukraine/u4.jpg'},
    {image: '/assets/img/Ukraine/u5.jpg'},
    {image: '/assets/img/Ukraine/u6.jpg'},
    {image: '/assets/img/Ukraine/u7.jpg'},
    {image: '/assets/img/Ukraine/u8.jpg'}

  ];

    return(
        <div>
   <br/>
   <br/>
   

   <Slider autoplay={3000}>
	{content.map((content, index) => (
		<div
			key={index}
			style={{ background: `url('${content.image}') no-repeat center center` }}
		>
			<div className="center">
				
			</div>
		</div>
	))}
</Slider>

  <main id="main">

  
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="icofont-globe-alt"></i></div>
              <h4 className="title"><NavLink to="/Apply">Ukraine</NavLink></h4>
              <p className="description">Ukraine is one of the best country for study in europe so if you want to study abroad and to know more about the ukraine university just call on our number and take suggestion with our experts.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="icofont-hat-alt"></i></div>
              <h4 className="title"><NavLink to="/Apply">Russia</NavLink></h4>
              <p className="description">Russia is not only famous for moscow but also for their medical science and technology you want to go higher study first consult with our experts so that you will get best university</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="icofont-graduate-alt"></i></div>
              <h4 className="title"><NavLink to="/Apply">kazakhstan</NavLink></h4>
              <p className="description">kazakhstan is best choice for study so don't wait just call on our number we will touch with you and provide the best knowledge about the university</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="icofont-university"></i></div>
              <h4 className="title"><NavLink to="/Apply">kyrgyzstan</NavLink></h4>
              <p className="description">kyrgyzstan is a very nice place and better study point for the higher education kindly contact with our counsellor they will guide you about the university.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

 
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3> Need help now?</h3>
        <p>Need Help from our expert call on our Helpline Number or send the email one of our consellor will call you and suggest you best university or just click on apply now we will touch with you as soon as possible.</p>
          <NavLink className="cta-btn scrollto" to="/Apply">Apply For Admission</NavLink>
        </div>

      </div>
    </section>
    </main>
    
 
  <NavLink to="#" className="back-to-top"><i className="icofont-simple-up"></i></NavLink>


  <script src="assets/vendor/jquery/jquery.min.js"/>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"/>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>


  <script src="assets/js/main.js"></script>

        </div>
    );
}
export default Home;