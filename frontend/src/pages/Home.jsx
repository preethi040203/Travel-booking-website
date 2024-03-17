import React from 'react'
import '../styles/home.css'
import Subtitle from '../shared/Subtitle';

import { Container, Row , Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from './../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar';
import  ServiceList from '../services/ServiceList';
import FeaturedTourList from "../components/Featured-tours/FeaturedToursList";
import MansoryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';




const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt=" "/>
              </div>
              <h2>Travelling opens the door for creating</h2> <center><h1><span className="highlight">Memories*</span></h1></center>
              <p><h2>"Always say Yes to new Adventures"!</h2></p>

            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box ">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
           
           <SearchBar />


        </Row>
      </Container>
    </section>
    {/* ######################### hero section start##########################*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle"> What we serve</h5>
            <h5 className="services__title">We offer our best services</h5>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* #############featured tour section start#############*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">
              Our Featured Tours
            </h2>

          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    {/* #############featured tour section ends#############*/}

    {/* #############Experience section start#############*/}
      <section>
        <Row>
          <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'}/>
            <h2>With our all Experience <br /> we will serve you!</h2>
            <p>
              Travelling is a great opportunity to learn, grow and connect with different perspective and lifestyles.
               <br />
               "Remember that happiness is a way of travel-not a destination"          </p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trip</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years Experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
            <div className="experience_img">
              <img src ={experienceImg} alt=" "/>
            </div>
          </Col>
        </Row>
      </section>
    {/* #############Experience section end#############*/}

    {/* #############Gallery Section#############*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MansoryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ############Testimonial Section########## */}
    <section>
      <Container>
        <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className="testimonial__title">What Our Fans Say About Us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
        </Row>
      </Container>
    </section>

<Newsletter />

  </>
};

export default Home;