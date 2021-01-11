import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import React,{useState} from 'react';
import Slider from 'react-animated-slider';

const Country=() =>{
    const [selectedTab, setSelectedTab] = useState('tab-1');
    const content = [
        {image: '/assets/img/Ukraine/u1.jpg'},
        {image:'/assets/img/Ukraine/u2.jpg'},
        {image: '/assets/img/Ukraine/u3.jpg'},
        {image: '/assets/img/Ukraine/u4.jpg'},
        {image: '/assets/img/Ukraine/u5.jpg'},
        {image: '/assets/img/Ukraine/u6.jpg'},
        {image: '/assets/img/Ukraine/u7.jpg'},
        {image: '/assets/img/Ukraine/u8.jpg'}



    
      ]

      const Russia =[
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
        {image: '/assets/img/Russsia/Slide-1.jpg'}



      ]
      const Armenia =[
        {image:'/assets/img/Armenia/ST..JPG'},
        {image:'/assets/img/Armenia/St.TEREZA MEDICAL UNIVERSITY, ARMENIA.JPG'},
        {image:'/assets/img/Armenia/st1.JPG'},
        {image:'/assets/img/Armenia/st2.JPG'},
        {image: '/assets/img/Armenia/ST3.JPG'},
        {image: '/assets/img/Armenia/sykkvkar sate University.JPG'},
        {image: '/assets/img/Armenia/Traditional Medicine.JPG'},
        {image: '/assets/img/Armenia/UMT1.JPG'},
        {image:'/assets/img/Armenia/UMT2.JPG'},
        {image: '/assets/img/Armenia/Ya1.JPG'},
        {image: '/assets/img/Armenia/ya2.JPG'},
        {image: '/assets/img/Armenia/ya4.JPG'}
      ]
      const Kazakhstan=[
        {image: '/assets/img/Kazakhstan/k1.jpg'},
        {image: '/assets/img/Kazakhstan/k2.jpg'},
        {image: '/assets/img/Kazakhstan/k3.jpg'},
        {image: '/assets/img/Kazakhstan/k4.jpg'},
        {image: '/assets/img/Kazakhstan/k5.jpg'}
      ]
const kyrgyzstan=[
  {image: '/assets/img/kyrgyzstan/ISM.JPG'},
  {image: '/assets/img/kyrgyzstan/KYRGYZ STATE MEDICAL ACADEMY.JPG'},
  {image: '/assets/img/kyrgyzstan/oh.JPG'},
  {image: '/assets/img/kyrgyzstan/osh sate.JPG'},
  {image: '/assets/img/kyrgyzstan/osh state.JPG'}
]
return(
<div>
<section id="departments" className="departments">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Select your Country</h2>
          <p>Choose the country we provide the best suggestion in the selection of universities don't worry one of our expert will call you shortly and do the counselling give the best suggestion in choosing the university don't wait click apply now</p>
        </div>
        <ThemeProvider>
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <TabList>
          <Tab item="tab-1">Ukraine</Tab>
          <Tab item="tab-2">Russia</Tab>
          <Tab item="tab-3">Armenia</Tab>
          <Tab item="tab-4"> Kazaksthan</Tab>
          <Tab item="tab-5"> kyrgyzstan</Tab>

        </TabList>
        <TabPanel item="tab-1"> 
        
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
 
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h4>About Ukraine </h4>
          <p className="text-left"> In much of Ukraine, the climate is continental, with freezing winters and warm summers, which become progressively warmer as you move towards the south. The southern area, which overlooks the Black Sea, has a slightly milder weather in winter, but we cannot speak of Mediterranean climate (the winter is cold anyway), except on the southern coast of the Crimean Peninsula (see Yalta).
</p>

          <h3> Ukraine Admission</h3>
          <p className="text-left"><strong>MBBS</strong></p>

          <p> The Bachelor of Medicine and Bachelor of Surgery (MBBS) also called Medical Degree (M.D.- Doctor of Medicine) degree program takes six years to complete, including preclinical and clinical throughout with patients and doctors. Degree in Medicine will train international students to become professional, compassionate doctors.
          
The program focuses on preparing students with extensive knowledge in medical sciences and clinical skills, to produce qualified and competent medical professionals who are equipped for the latest practices and developments in the industry. The curriculum places a strong emphasis on clinical training in medicine and surgery.</p> 

<p className="text-left"><strong>The Aircraft Maintenance
</strong></p>
<p>The Aircraft Maintenance Engineers Technology program offers the student the knowledge and skills required to enter a career as an Aircraft Maintenance Technician. Once employed in the aviation industry, students may work toward the Aircraft Maintenance Engineer. An Aircraft Maintenance Technician/Engineer is responsible for the servicing and repair of aircraft and aircraft components. The program covers all the aspects of aircraft maintenance including general aviation, corporate, charter, transport category aircraft, and helicopters.

</p>
<p>The Aircraft Maintenance Engineers Technology pStudents of these programs will learn about aircraft structures, aircraft electrical and engine systems and instrumentation. They will learn how to troubleshoot and repair problems within these systems as they prepare for careers as aviation technicians or mechanics. Courses in mathematics and physics will also be taken. Specializations focusing on certain systems or structures are offered in some programs, most often at the bachelor's level. Graduates are prepared to pursue certifications in the field.rogram offers the student the knowledge and skills required to enter a career as an Aircraft Maintenance Technician. Once employed in the aviation industry, students may work toward the Aircraft Maintenance Engineer. An Aircraft Maintenance Technician/Engineer is responsible for the servicing and repair of aircraft and aircraft components. The program covers all the aspects of aircraft maintenance including general aviation, corporate, charter, transport category aircraft, and helicopters.

</p>
<p className="text-left"><strong>Computer Engineering</strong>
</p>
<p>Computer engineering is a discipline that integrates several fields of electrical engineering and computer science required to develop computer hardware and software. Computer engineers usually have training in electronic engineering (or electrical engineering), software design, and hardware- software integration instead of only software engineering or electronic engineering. Computer engineers are involved in many hardware and software aspects of computing, from the design of individual microcontrollers, microprocessors, personal computers, and supercomputers, to circuit design. This field of engineering not only focuses on how computer systems themselves work, but also how they integrate into the larger picture.

</p>
<p>Usual tasks involving computer engineers include writing software and firmware for embedded microcontrollers, designing chips, analog sensors, mixed signal circuit boards, and operating systems. Computer engineers are also suited for robotics research, which relies heavily on using digital systems to control and monitor electrical systems like motors, communications, and sensors.

</p>
<p className="text-left"><strong>Avionics</strong></p>
<p>Avionics, or aviation electronics, is a general term for all electrical equipment used in missiles, aircraft and spacecraft. Avionics encompasses components the pilot directly uses, such as navigation, weather radar, and radio communication equipment. In addition, avionics also comprises other electronic systems not directly used by the pilot that control and monitor flight and engine performance.

</p>
<p>Course of Avionics aims to study aviation electronics together with navigation and instrumentation systems. Avionics degree programs prepare students for careers as avionics technicians, who install, maintain and repair an aircraft's electrical components.

</p>
<p>Students learn electrical theory, circuits, technical diagrams, industry regulations and electronic communications.Studies typically combine classroom instruction with simulated lab exercises wherein students receive hands-on training on aircraft instrumentation.

</p>
<p className ="text-left"><strong>Aircraft and Rocket Construction and Design</strong>
</p>
<p>Rocket scientists are aerospace engineers who specialize in the design and manufacture of spacecraft. They work with the principles of science and engineering to create vehicles that fly within or above the Earth's atmosphere. The job of a rocket scientist requires proficiency with physics, chemistry, aerodynamics, propulsion, communications and mathematics. A bachelor's degree in aerospace engineering or a related field is the minimum requirement for entry-level positions, while many candidates choose to pursue graduate degrees to enhance their career prospects.

</p>
<p className="text-left"><strong>Oil and Gass Engineering
</strong></p>
<p>This course aims to equip you with sector specific oil and gas engineering, technology and operational skills to succeed in this competitive environment.

</p>
<p>The oil and gas industry is continuously developing and is therefore both recognised and expected to remain as a major contributor to the economy of many developed and developing regions as it continues to be driven not only by new oil and gas discoveries, but by a constant demand to find newer, safer, more efficient and cost- effective ways of extracting resources. Whilst exploration continues to identify major oil and gas finds across the world, these are increasingly less accessible and require complex engineering solutions to deliver effective operations and supply. Additionally, the significant and rising operating costs of existing installations are driving the sector to seek suitably qualified engineers are able to support operations and initiate improvements within the four main strands of oil and gas facilities: offshore, onshore, sub-sea and pipelines.

</p>
<p className="text-left"><strong>Telecommunication Systems and Network
</strong></p>
<p>The Bachelor of Engineering Science (Network Systems and Telecommunications) focuses on developing mastery of theoretical knowledge and practical skills related to network design, management and service provision of private and public network systems, wireless and broadband technologies, and the security and protection of networked and computer systems.

</p>
<p>There is a particular focus on practical aspects of network design and deployment of develop a mastery of a range of networking technologies. The course is also strongly focused in aspects of network and computer security using both theoretical studies and practical examples. Aspects of the course cover the content of various professional certifications.

</p>
<p>This course provides graduates with knowledge and skills allowing them to undertake professional work at an advanced level in field of Information and Communication Technologies, and as a pathway for research and further learning.

</p>
<p className="text-left"><strong>Biomedical Engineering
</strong></p>
<p>Bioengineering or Biomedical Engineering (BME) is a discipline that advances knowledge in engineering, biology, and medicine - and improves human health through cross- disciplinary activities that integrate the engineering sciences with the biomedical sciences and clinical practice. Biomedical Engineering combines engineering expertise with medical needs for the enhancement of health care. It is a branch of engineering in which knowledge and skills are developed and applied to define and solve problems in biology and medicine. Those working within the bioengineering field are of service to people, work with living systems, and apply advanced technology to the complex problems of medical care.

</p>
<p className="text-left"><strong>Information security
</strong></p>
<p>This course focuses on the fundamentals of information security that are used in protecting both the information present in computer storage as well as information traveling over computer networks. Interest in information security has been spurred by the pervasive use of computer-based applications such as information systems, databases, and the Internet. Information security has also emerged as a national goal with national defense and homeland security implications. Information security is enabled through securing data, computers, and networks. In this course, we will look into such topics as fundamentals of information security, computer security technology and principles, access control mechanisms, cryptography algorithms, software security, physical security, and security management and risk assessment.

</p>

<p className="text-left"><strong>Nuclear Physics
</strong></p>
<p>Nuclear physics investigates the basic physical constituents of atomic nuclei. It attempts to understand the relationships between the particles that make up atoms, as well as their creation and decay. Nuclear physics not only continues to be a critical and vibrant branch of academic physical research, but has directly led to developments in medicine, national security and energy production. Nuclear physics knowledge is critical to applied science, as well, primarily in the field of nuclear engineering.

</p>


<div className="text-left">
<h5 className="text-center"> University</h5>
<h6><strong>Ivano-Frankivsk National Medical University , 
V.N. Karazin Kharkiv Medical University , 

Kharkiv International Medical University,   
Petro Mohyla Black sea State University , 
Bogomolets National Medical University ,
National University Taras Schevchenko ,
Vinnitsa National Medical University ,
Kharkiv National Medical University ,
Zaporozhe state Medical University ,
Odessa National Medical University ,

Poltava State Medical University ,

Ternopil State Medical University ,
Lviv National Medical University ,


Kyiv Medical University ,
Dnipro Medical Academy ,

Sumy State University</strong></h6>
</div>


          <a className="cta-btn scrollto" href="#appointment">Apply For Admission</a>
        </div>

      </div>
    </section>
</TabPanel>
        <TabPanel item="tab-2">    
        <Slider autoplay={3000}>
	{Russia.map((Russia, index) => (
		<div
			key={index}
			style={{ background: `url('${Russia.image}') no-repeat center center` }}
		>
			<div className="center">
				
			</div>
		</div>
	))}
</Slider>
  <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3> About Russia</h3>
<p>Tourism in Russia has seen rapid growth since the late Soviet times, first domestic tourism and then international tourism as well. Rich cultural heritage and great natural variety place Russia among the most popular tourist destinations in the world.
</p>          
<a className="cta-btn scrollto" href="/Apply">Apply For Admission</a>
        </div>
        <p className="text-left"><strong>STUDY MBBS IN RUSSIA
</strong></p>
<p>Russia is considered as the favorite country for perusing MBBS. The reasons are many but the number one and the reason in most of the cases is the fact that it is really affordable country to do MBBS from. Not just affordable but the country uses the up to date and top methods and techniques in the medical study which also makes it the desired choice for the students pursuing MBBS. If we talk about the numbers, the more than 10,000 students are currently pursuing their medical degree in Russia and around 2,000 Indian students complete their MBBS degree every year from Russia.The good part is that the Russian institutions of medical science which are listed under WHO are well recognized by the MCI which stands for the medical council of India. As said above, it is one of the affordable country to pursue MBBS from which makes the Indian student pursue their degree from Russia and above this, the good relations between India and Russia makes the Indian students feel more comfortable in the country as they generally do not face any racism in the country. Moreover, making friends there is easier as the citizen of Russia is always helpful. If a student completes his degree from Russia, he/she can be assured that they will be for sure become a successful doctor as the medical study of Russia is one of the best medical studies in the world. Even if we see the history, the doctors who already have completed their degree from Russia are doing really well. The students will be provided high-quality education and the cost of living and other expenses will also be quite affordable as compared to other countries. The semester system in Russia is the same as India and their academic year starts in September-October. The only thing to take care of choosing the right college as most of the universities is in Russian medium.

</p>
<p className="text-left"><strong>MBBS COURSE DURATION IN RUSSIA</strong>
</p>
<p>DURATION :5.8 years
</p>
<p>It takes almost 5.8 years to complete MBBS in Russia including the clinical part of the course. Once you successfully accomplish the degree, you can come down to India and apply for the immediate screening test. Also, some exams such as USMLE or PLAB can also be pursued!

</p>
<p className="text-left"><strong>ELIGIBILITY 12th, Neet Qualifying
</strong></p>
<h6>You don’t have to sit for any kind of entrance exam like IELTS/SAT etc.
</h6>
<h6>Applicants must be of 18 years old as on 31st December of the year on which the admission procedure is going on.
</h6>
<h6>The learner should complete 12th from any regular or equivalent board.
</h6>

<h6>MBBS in Russia can be offered if you score at least 50% in physics, biology, and chemistry. Also, you must have English as your compulsory subject during the 12th examination. This criterion is applicable to general category students.
</h6>
<h6>An aggregate of 40% in physics, biology, and chemistry is expected and English should be the compulsory subject in case of SC/ST/OBC students.
</h6>
<h6>You have to appear and clear NEET 2019 onwards for taking admission in any country abroad.
</h6>
<p className="text-left"><strong>INDIAN STUDENTS IN RUSSIA</strong>
</p>
<p>Russia has very good relations with India in terms of economic and cultural. The country welcomes Indian and there is no racism or any other sort of discrimination as well for Indians. Also, the country is very affordable for the MBBS degree and the living cost and other expenses are also bearable which makes it eligible for the study. Currently, there are around 10,000 students perusing their degree in medical science and almost 2000 students complete their MBBS degree every year from Russia.

</p>
<p className ="text-left"><strong>FREE CONSULTANCY</strong>
</p>
<p>Eurasia education link is a one-stop solution for you to get admission in the medicine course in Russia. Here, the professionals with years of experience are able to guide you throughout the admission procedure. Even if you have lost one more year in the hope of taking admission in MBBS course, then we are the only one who can lead your career towards the bright future. We know how to lit up the light for your long desired hope and meet your requirements in minutes. However, the experts may arrange a face to face interview round where they get to know more about your desires and know the name of the colleges that you prefer.

</p>
<p className="text-left"><strong>MBBS IN RUSSIA ADVANTAGES :
</strong></p>
<h6>The degree of MBBS from Russia is a globally recognized degree which is accepted by WHO and MCI, Medical Council of India as well.
</h6>
<h6>The medium of communication while pursuing the degree will be English so that the students will not feel discomfort while studying. Also, there will be Russian language classes as well so that the student can have a conversation with the local Russians too.
</h6>
<h6>The degree is very affordable which makes it the best choice for many students from all over the world.
</h6>
<h6>The practical practice will be the major concern for the Russian universities which is the topmost priority for a medical student.
</h6>
<h6>Self-cooking and Indian food choices will be given in most of the colleges.
</h6>
        </div>
    </section>
</TabPanel>
        <TabPanel item="tab-3">
        <Slider autoplay={3000}>
	{Armenia.map((Armenia, index) => (
		<div
			key={index}
			style={{ background: `url('${Armenia.image}') no-repeat center center` }}
		>
			<div className="center">
				
			</div>
		</div>
	))}
</Slider>
<section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3> About Armenia</h3>
<p>Tourism in Armenia has seen rapid growth since the late Soviet times, first domestic tourism and then international tourism as well. Rich cultural heritage and great natural variety place Armenia among the most popular tourist destinations in the world.
</p>          
<a className="cta-btn scrollto" href="/Apply">Apply For Admission</a>
        </div>
        <p className="text-left"><strong>STUDY MBBS IN Armenia
</strong></p>
<p>Armenia is considered as the favorite country for perusing MBBS. The reasons are many but the number one and the reason in most of the cases is the fact that it is really affordable country to do MBBS from. Not just affordable but the country uses the up to date and top methods and techniques in the medical study which also makes it the desired choice for the students pursuing MBBS. If we talk about the numbers, the more than 5,000 students are currently pursuing their medical degree in Russia and around 1,000 Indian students complete their MBBS degree every year from Armenia.The good part is that the Armenia institutions of medical science which are listed under WHO are well recognized by the MCI which stands for the medical council of India. As said above, it is one of the affordable country to pursue MBBS from which makes the Indian student pursue their degree from Armenia and above this, the good relations between India and Russia makes the Indian students feel more comfortable in the country as they generally do not face any racism in the country. Moreover, making friends there is easier as the citizen of Armenia is always helpful. If a student completes his degree from Armenia, he/she can be assured that they will be for sure become a successful doctor as the medical study of Armenia is one of the best medical studies in the world. Even if we see the history, the doctors who already have completed their degree from Armenia are doing really well. The students will be provided high-quality education and the cost of living and other expenses will also be quite affordable as compared to other countries. The semester system in Armenia is the same as India and their academic year starts in September-October. The only thing to take care of choosing the right college as most of the universities is in Armenian medium.

</p>
<p className="text-left"><strong>MBBS COURSE DURATION IN Armenia</strong>
</p>
<p>DURATION :5.8 years
</p>
<p>It takes almost 5.8 years to complete MBBS in Armenia including the clinical part of the course. Once you successfully accomplish the degree, you can come down to India and apply for the immediate screening test. Also, some exams such as USMLE or PLAB can also be pursued!

</p>
<p className="text-left"><strong>ELIGIBILITY 12th, Neet Qualifying
</strong></p>
<h6>You don’t have to sit for any kind of entrance exam like IELTS/SAT etc.
</h6>
<h6>Applicants must be of 18 years old as on 31st December of the year on which the admission procedure is going on.
</h6>
<h6>The learner should complete 12th from any regular or equivalent board.
</h6>

<h6>MBBS in Armenia can be offered if you score at least 50% in physics, biology, and chemistry. Also, you must have English as your compulsory subject during the 12th examination. This criterion is applicable to general category students.
</h6>
<h6>An aggregate of 40% in physics, biology, and chemistry is expected and English should be the compulsory subject in case of SC/ST/OBC students.
</h6>
<h6>You have to appear and clear NEET 2019 onwards for taking admission in any country abroad.
</h6>
<p className="text-left"><strong>INDIAN STUDENTS IN Armenia</strong>
</p>
<p>Armenia has very good relations with India in terms of economic and cultural. The country welcomes Indian and there is no racism or any other sort of discrimination as well for Indians. Also, the country is very affordable for the MBBS degree and the living cost and other expenses are also bearable which makes it eligible for the study. Currently, there are around 10,000 students perusing their degree in medical science and almost 2000 students complete their MBBS degree every year from Armenia.

</p>
<p className ="text-left"><strong>FREE CONSULTANCY</strong>
</p>
<p>Eurasia education link is a one-stop solution for you to get admission in the medicine course in Armenia. Here, the professionals with years of experience are able to guide you throughout the admission procedure. Even if you have lost one more year in the hope of taking admission in MBBS course, then we are the only one who can lead your career towards the bright future. We know how to lit up the light for your long desired hope and meet your requirements in minutes. However, the experts may arrange a face to face interview round where they get to know more about your desires and know the name of the colleges that you prefer.

</p>
<p className="text-left"><strong>MBBS IN Armenia ADVANTAGES :
</strong></p>
<h6>The degree of MBBS from Armenia is a globally recognized degree which is accepted by WHO and MCI, Medical Council of India as well.
</h6>
<h6>The medium of communication while pursuing the degree will be English so that the students will not feel discomfort while studying. Also, there will be Armenian language classes as well so that the student can have a conversation with the local Armenians too.
</h6>
<h6>The degree is very affordable which makes it the best choice for many students from all over the world.
</h6>
<h6>The practical practice will be the major concern for the Armenia universities which is the topmost priority for a medical student.
</h6>
<h6>Self-cooking and Indian food choices will be given in most of the colleges.
</h6>
        </div>
    </section>

        </TabPanel>
        <TabPanel item="tab-4">

        <Slider autoplay={3000}>
	{Kazakhstan.map((Kazakhstan, index) => (
		<div
			key={index}
			style={{ background: `url('${Kazakhstan.image}') no-repeat center center` }}
		>
			<div className="center">
				
			</div>
		</div>
	))}
</Slider>
<section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3> About Kazaksthan</h3>
<p>Tourism in Kazaksthan has seen rapid growth since the late Soviet times, first domestic tourism and then international tourism as well. Rich cultural heritage and great natural variety place Kazaksthan among the most popular tourist destinations in the world.
</p>          
<a className="cta-btn scrollto" href="/Apply">Apply For Admission</a>
        </div>
        <p className="text-left"><strong>STUDY MBBS IN Kazaksthan
</strong></p>
<p>Kazaksthan is considered as the favorite country for perusing MBBS. The reasons are many but the number one and the reason in most of the cases is the fact that it is really affordable country to do MBBS from. Not just affordable but the country uses the up to date and top methods and techniques in the medical study which also makes it the desired choice for the students pursuing MBBS. If we talk about the numbers, the more than 10,000 students are currently pursuing their medical degree in Kazaksthan and around 2,000 Indian students complete their MBBS degree every year from Kazaksthan.The good part is that the Kazaksthann institutions of medical science which are listed under WHO are well recognized by the MCI which stands for the medical council of India. As said above, it is one of the affordable country to pursue MBBS from which makes the Indian student pursue their degree from Kazaksthan and above this, the good relations between India and Kazaksthan makes the Indian students feel more comfortable in the country as they generally do not face any racism in the country. Moreover, making friends there is easier as the citizen of Kazaksthan is always helpful. If a student completes his degree from Kazaksthan, he/she can be assured that they will be for sure become a successful doctor as the medical study of Kazaksthan is one of the best medical studies in the world. Even if we see the history, the doctors who already have completed their degree from Kazaksthan are doing really well. The students will be provided high-quality education and the cost of living and other expenses will also be quite affordable as compared to other countries. The semester system in Kazaksthan is the same as India and their academic year starts in September-October. The only thing to take care of choosing the right college as most of the universities is in Kazaksthann medium.

</p>
<p className="text-left"><strong>MBBS COURSE DURATION IN Kazaksthan</strong>
</p>
<p>DURATION :5.8 years
</p>
<p>It takes almost 5.8 years to complete MBBS in Kazaksthan including the clinical part of the course. Once you successfully accomplish the degree, you can come down to India and apply for the immediate screening test. Also, some exams such as USMLE or PLAB can also be pursued!

</p>
<p className="text-left"><strong>ELIGIBILITY 12th, Neet Qualifying
</strong></p>
<h6>You don’t have to sit for any kind of entrance exam like IELTS/SAT etc.
</h6>
<h6>Applicants must be of 18 years old as on 31st December of the year on which the admission procedure is going on.
</h6>
<h6>The learner should complete 12th from any regular or equivalent board.
</h6>

<h6>MBBS in Kazaksthan can be offered if you score at least 50% in physics, biology, and chemistry. Also, you must have English as your compulsory subject during the 12th examination. This criterion is applicable to general category students.
</h6>
<h6>An aggregate of 40% in physics, biology, and chemistry is expected and English should be the compulsory subject in case of SC/ST/OBC students.
</h6>
<h6>You have to appear and clear NEET 2019 onwards for taking admission in any country abroad.
</h6>
<p className="text-left"><strong>INDIAN STUDENTS IN Kazaksthan</strong>
</p>
<p>Kazaksthan has very good relations with India in terms of economic and cultural. The country welcomes Indian and there is no racism or any other sort of discrimination as well for Indians. Also, the country is very affordable for the MBBS degree and the living cost and other expenses are also bearable which makes it eligible for the study. Currently, there are around 10,000 students perusing their degree in medical science and almost 2000 students complete their MBBS degree every year from Kazaksthan.

</p>
<p className ="text-left"><strong>FREE CONSULTANCY</strong>
</p>
<p>Eurasia education link is a one-stop solution for you to get admission in the medicine course in Kazaksthan. Here, the professionals with years of experience are able to guide you throughout the admission procedure. Even if you have lost one more year in the hope of taking admission in MBBS course, then we are the only one who can lead your career towards the bright future. We know how to lit up the light for your long desired hope and meet your requirements in minutes. However, the experts may arrange a face to face interview round where they get to know more about your desires and know the name of the colleges that you prefer.

</p>
<p className="text-left"><strong>MBBS IN Kazaksthan ADVANTAGES :
</strong></p>
<h6>The degree of MBBS from Kazaksthan is a globally recognized degree which is accepted by WHO and MCI, Medical Council of India as well.
</h6>
<h6>The medium of communication while pursuing the degree will be English so that the students will not feel discomfort while studying. Also, there will be Kazaksthan language classes as well so that the student can have a conversation with the local Kazaksthans too.
</h6>
<h6>The degree is very affordable which makes it the best choice for many students from all over the world.
</h6>
<h6>The practical practice will be the major concern for the Kazaksthan universities which is the topmost priority for a medical student.
</h6>
<h6>Self-cooking and Indian food choices will be given in most of the colleges.
</h6>
        </div>
    </section>
</TabPanel>
        <TabPanel item="tab-5">
        <Slider autoplay={3000}>
	{kyrgyzstan.map((kyrgyzstan, index) => (
		<div
			key={index}
			style={{ background: `url('${kyrgyzstan.image}') no-repeat center center` }}
		>
			<div className="center">
				
			</div>
		</div>
	))}
</Slider>
<section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3> About kyrgyzstan</h3>
<p>Tourism in kyrgyzstanhas seen rapid growth since the late Soviet times, first domestic tourism and then international tourism as well. Rich cultural heritage and great natural variety place kyrgyzstanamong the most popular tourist destinations in the world.
</p>          
<a className="cta-btn scrollto" href="/Apply">Apply For Admission</a>
        </div>
        <p className="text-left"><strong>STUDY MBBS IN kyrgyzstan</strong></p>
<p>kyrgyzstanis considered as the favorite country for perusing MBBS. The reasons are many but the number one and the reason in most of the cases is the fact that it is really affordable country to do MBBS from. Not just affordable but the country uses the up to date and top methods and techniques in the medical study which also makes it the desired choice for the students pursuing MBBS. If we talk about the numbers, the more than 10,000 students are currently pursuing their medical degree in kyrgyzstanand around 2,000 Indian students complete their MBBS degree every year from kyrgyzstanThe good part is that the kyrgyzstan institutions of medical science which are listed under WHO are well recognized by the MCI which stands for the medical council of India. As said above, it is one of the affordable country to pursue MBBS from which makes the Indian student pursue their degree from kyrgyzstanand above this, the good relations between India and kyrgyzstanmakes the Indian students feel more comfortable in the country as they generally do not face any racism in the country. Moreover, making friends there is easier as the citizen of kyrgyzstanis always helpful. If a student completes his degree from kyrgyzstan he/she can be assured that they will be for sure become a successful doctor as the medical study of kyrgyzstanis one of the best medical studies in the world. Even if we see the history, the doctors who already have completed their degree from kyrgyzstanare doing really well. The students will be provided high-quality education and the cost of living and other expenses will also be quite affordable as compared to other countries. The semester system in kyrgyzstanis the same as India and their academic year starts in September-October. The only thing to take care of choosing the right college as most of the universities is in kyrgyzstan medium.

</p>
<p className="text-left"><strong>MBBS COURSE DURATION IN kyrgyzstan</strong>
</p>
<p>DURATION :5.8 years
</p>
<p>It takes almost 5.8 years to complete MBBS in kyrgyzstanincluding the clinical part of the course. Once you successfully accomplish the degree, you can come down to India and apply for the immediate screening test. Also, some exams such as USMLE or PLAB can also be pursued!

</p>
<p className="text-left"><strong>ELIGIBILITY 12th, Neet Qualifying
</strong></p>
<h6>You don’t have to sit for any kind of entrance exam like IELTS/SAT etc.
</h6>
<h6>Applicants must be of 18 years old as on 31st December of the year on which the admission procedure is going on.
</h6>
<h6>The learner should complete 12th from any regular or equivalent board.
</h6>

<h6>MBBS in kyrgyzstancan be offered if you score at least 50% in physics, biology, and chemistry. Also, you must have English as your compulsory subject during the 12th examination. This criterion is applicable to general category students.
</h6>
<h6>An aggregate of 40% in physics, biology, and chemistry is expected and English should be the compulsory subject in case of SC/ST/OBC students.
</h6>
<h6>You have to appear and clear NEET 2019 onwards for taking admission in any country abroad.
</h6>
<p className="text-left"><strong>INDIAN STUDENTS IN kyrgyzstan</strong>
</p>
<p>kyrgyzstanhas very good relations with India in terms of economic and cultural. The country welcomes Indian and there is no racism or any other sort of discrimination as well for Indians. Also, the country is very affordable for the MBBS degree and the living cost and other expenses are also bearable which makes it eligible for the study. Currently, there are around 10,000 students perusing their degree in medical science and almost 2000 students complete their MBBS degree every year from kyrgyzstan

</p>
<p className ="text-left"><strong>FREE CONSULTANCY</strong>
</p>
<p>Eurasia education link is a one-stop solution for you to get admission in the medicine course in kyrgyzstan Here, the professionals with years of experience are able to guide you throughout the admission procedure. Even if you have lost one more year in the hope of taking admission in MBBS course, then we are the only one who can lead your career towards the bright future. We know how to lit up the light for your long desired hope and meet your requirements in minutes. However, the experts may arrange a face to face interview round where they get to know more about your desires and know the name of the colleges that you prefer.

</p>
<p className="text-left"><strong>MBBS IN kyrgyzstanADVANTAGES :
</strong></p>
<h6>The degree of MBBS from kyrgyzstanis a globally recognized degree which is accepted by WHO and MCI, Medical Council of India as well.
</h6>
<h6>The medium of communication while pursuing the degree will be English so that the students will not feel discomfort while studying. Also, there will be kyrgyzstan language classes as well so that the student can have a conversation with the local kyrgyzstans too.
</h6>
<h6>The degree is very affordable which makes it the best choice for many students from all over the world.
</h6>
<h6>The practical practice will be the major concern for the kyrgyzstan universities which is the topmost priority for a medical student.
</h6>
<h6>Self-cooking and Indian food choices will be given in most of the colleges.
</h6>
        </div>
    </section>
        </TabPanel>


      </Tabs>
    </ThemeProvider>
    </div>
    </section>
</div>
);

}
export default Country;