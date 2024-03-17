import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import aboutvideo from '../assets/images/tour-vid1 (2).mp4';
import Subtitle from '../shared/Subtitle';


const About = () => {
  return<>
  <section>
        <Row>
          <Col lg='6'>
            <div className='about__img-box'>
               <center> <video src={aboutvideo} alt="" controls/> </center>
              
            </div>
          </Col>
          <Col lg='20'>
          <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'GET TO KNOW US!'}/>
              </div>
              <div className="about__content">
            <p className="about__content">EXPLORIFY, born in the Web 2.0 era, has organically evolved into a hub for user-generated content, 
            focusing on travel, adventure, cultures, and sacred spaces. Remaining steadfastly non-commercial, it serves as a platform for sharing information and reflections,
             devoid of hidden agendas.
               <br></br>
               <br></br> 
               Adapting to technological advancements, it recently revamped its interface for enhanced user experience while maintaining its commitment to quality content. Beyond mere journeys.
               <br></br>
               <br></br>

               EXPLORIFY is not just about journeys and destinations –
               <br></br>
               EXPLORIFY embodies a lifestyle, conveying the spirit of India, promoting its culture and values, and celebrating the warmth and joy of its people.</p>
                <h3>WHO WE ARE?</h3>
                <p>As travelers and technologists, we thrive in diverse environments, crossing boundaries of time, culture, and language.
                   Our ethos is rooted in continual improvement, breaking down barriers to create better experiences. Despite the challenges, 
                   we believe in the transformative power of travel, committed to leveraging it for positive change. Our mission is clear: to develop outstanding products and foster meaningful connections between travelers and partners, all aimed at making the world a better place.</p>
              <h3>WHAT WE DO?</h3>
              <p>
              We harness our platform and technological prowess to connect people and facilitate seamless travel experiences, spanning local and global scales. 
              With an extensive portfolio of businesses and brands, we orchestrate the movement of travelers and deliver tailored journeys. Through meticulous curation and optimization, 
              we guide both travelers and partners to navigate millions of options,
               ensuring they reach the optimal outcome for their needs and aspirations.
              </p>
              <h3>HOW WE DO IT?</h3>
              <p>Leveraging over 70+ petabytes of data and two decades of tech innovation, 
                EXPLORIFY Group stands as a premier global travel platform. Our unparalleled industry expertise and advanced technology enable us to operate a dynamic two-sided marketplace. 
                With precision, we sift through millions of options to connect travelers and partners worldwide,
                 delivering unparalleled value.</p>
              </div>
              <div>
               <center><h3>LIVE LIFE WITH NO EXCUSES, TRAVEL WITH NO REGRET</h3></center>
              </div></Col>
        </Row>

    </section>
    </>
};

export default About;