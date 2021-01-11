import React from 'react';


const Contact=()=>{
    return (
    <div>
 <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>We are always ready to help the student if you have any equiries feel free to call and and also you can contact with mail if you have any suggestion kindly submit the form we always hear you .</p>
        </div>

      </div>

      <div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14502.156534384954!2d84.35402843241339!3d26.22821867183831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc011ec0d44f%3A0xc5dd3aced6b01c01!2sUnion%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1601611689619!5m2!1sen!2sin" width="100%" height="350" frameBorder="0" style={{border:'0;'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>India Address</h3>
                  <p>F 192 Asi Nagar, Siwan, Bihar 841226</p>
                  <h3>Ukraine Address</h3>
                  <p>A108 Nauki Ave 66a, Kharkiv, Ukraine 61000
 </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>easyconedu@gmail.com<br/>contactconeduc@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+91 88693952993<br/>+380 636634908</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </div>

    
    );
}
export default Contact;