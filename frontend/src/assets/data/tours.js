import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";


const tours = [
  {
    id: "01",
    title: "Eiffel Tower, France",
    city: "France",
    distance: 7975,
    address:'Champ de Mars, 5 Av.Anatole France, 75007 Paris, France',
    price: 7900,
    maxGroupSize: 8,
    desc: "Eiffel Tower is a wrought-iron lattic tower, it is named after the engineer Gustave Eiffel.",
    reviews: [
      {
        name: "Raj",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Burj Khalifa",
    city: "Dubai",
    distance: 13.7,
    address:'Sheikh Mohammed bin Rashid Bivd-Downtown Dubai',
    price: 7000,
    maxGroupSize: 10,
    desc: "The Burj Khalifa is a skyscraper in Dubai, it is the world tallest structure with a total height of 829.8m.",
    reviews: [
      {
        name: "jhon",
        rating: 4.6,
      },
      {
        name: "doe",
        rating: 4.0,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 100,
    address:'Khiri Nakhon 8/1 Alley, Huai Kapi, chonburi20000 Thailand',
    price: 6500,
    maxGroupSize: 8,
    desc: "The Snowy Mountain is surrounded by white peaks which give the impression of snow-covered mountains.",
    reviews: [
      {
        name: "Sham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 95,
    address:'Sathorn Pier, Yan Nawa, Sathon Bangkok, Thailand',
    price: 8000,
    maxGroupSize: 8,
    desc: "Sunrise is a gift which nature adorns us with everyday, weather is quite pleasant and cool, timing of sunrise and sunset between 5:40AM to 6:08AM and 6:15PM to 6:45PM .",
    reviews: [
      {
        name: "Rani",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Maui, Hawaii, USA",
    city: "Hawaii, USA",
    distance: 75.6,
    address:'Maui, Hawaii, USA',
    price: 9000,
    maxGroupSize: 8,
    desc: "Maui is an island in the central Pacific, part of the Hawaiian archipelago and its a paradise known for its stunning natural beauty and rich culture. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 1322.5,
    address:'Kawasan Wisata Nusa Dua BTDC Bali, Indonesia',
    price: 9000,
    maxGroupSize: 8,
    desc: "Bali is the most popular Indonesian island known for its natural settings, scenic beaches, traditional culture, rich history, creativity.",
    reviews: [
      {
        name: "doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "07",
    title: "Taj Mahal",
    city: "India",
    distance: 5.6,
    address:'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh',
    price: 6000,
    maxGroupSize: 8,
    desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, it is the The jewel of Muslim art in India.",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Venice, Italy",
    city: "Italy",
    distance: 534.2,
    address:'Venice, Metropolitan City of Venice, Italy',
    price: 8500,
    maxGroupSize: 8,
    desc: "Venice is so popular for its romantic canals, the bridges, the Carnival celebrations, Venice is also called Serenissima, The city of Canals.",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
