import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jpg'

const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                    breakpoint:576,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll:1,
                    },   
            },
        ],
    };
  return( 
  <Slider {...settings}>
    <div classname="testimonial py-4 px-3">
        <p>Tourists laud Dubai for its stunning skyline, opulent malls, and lavish accommodations, 
          blending modernity with tradition. They appreciate iconic landmarks like the Burj Khalifa and vibrant souks. Safety, cleanliness, efficient transport.
        Dubai's dynamic energy.</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">RUHENA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>The travel website exceeded my expectations. User-friendly interface, seamless booking process, 
          The detailed information and reviews provided were invaluable.
           A go-to platform for hassle-free travel arrangements, highly recommended!</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">PREETHI</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Smooth booking process, comprehensive destination options, 
          and helpful customer support made my travel experience exceptional. 
          Highly recommend this website for hassle-free trip planning.
</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava06} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">SWATHY</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Paris is enchanting, with iconic landmarks, romantic ambiance, and exquisite cuisine. 
          Its vibrant culture, charming streets, 
          and timeless beauty create an unforgettable experience. And I can say EXPLORIFY website is amazing </p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">RASHEKA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Explorify's intuitive interface, vast travel options, and responsive customer service made trip planning a breeze. 
          The platform's efficiency and reliability enhanced my overall travel experience. 
          Highly recommended for seamless journey coordination.</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">AKIFA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Explorify simplifies travel planning with intuitive navigation, vast destination options, 
          and seamless booking. However, occasional glitches in the interface could be improved. Overall, 
          a reliable platform for memorable adventures.
</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">ARTHY</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        </Slider>
        );
};

export default Testimonials;