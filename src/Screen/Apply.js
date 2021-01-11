import React from 'react';
import AOS from 'aos';


const Apply=()=>{
  AOS.init()

    return (
<div>
<section id="appointment" className="appointment section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Apply For Admission</h2>
        <p>Kindly fill up the form one of our cousellor will touch with you shortly and guide the best way to choose the career option and best university their fee structure how we will process the Admission form don't worry our expert will touch with you.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div className="form-row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="City" className="form-control" name="city" id="city" placeholder="City" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="State" className="form-control" name="state" id="state" placeholder="State" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input type="City" className="form-control" name="city" id="city" placeholder="Country" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
          </div>
          
          
          <div className="form-row">
            <div className="col-md-4 form-group">
              <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="NEET SCORE(MBBS)" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <select name="department" id="department" className="form-control">
                <option value="">Courses</option>
                <option value="Department 1">MEDICAL</option>
                <option value="Department 2">ENGINEERING</option>
                <option value="Department 3">AVIATION</option>
                <option value="Department 4">Hotel Management</option>
                <option value="Department 5">BDS</option>
                <option value="Department 6">MS(M.tech)</option>
                <option value="Department 7">Pharmacy</option>

              </select>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <select name="doctor" id="doctor" className="form-control">
                <option value="">12th Pass Out Year</option>
                <option value="Doctor 1">2017</option>
                <option value="Doctor 2">2018</option>
                <option value="Doctor 3">2019</option>
                <option value="Doctor 4">2020</option>
              </select>
              <div className="validate"></div>
            </div>
          </div>

          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Submit</button></div>
        </form>

      </div>
    </section>


</div>
    );
}
export default Apply;