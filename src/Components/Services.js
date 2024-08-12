import React from 'react'
import img1 from '../Images/install1.jpeg'
import img2 from '../Images/vd1.jpeg'
import img3 from '../Images/access1.jpeg'
import { Link } from 'react-router-dom';


const ServiceCard = ({ title, image,link }) => (
  <div className="relative card group overflow-hidden">
    <img
      className="card-img-top w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      src={image}
      alt={title}
    />
    <div className="absolute inset-0 bg-zinc-600 bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 ">
      
      <h5 className="card-title text-white text-xl font-bold transform transition-transform duration-300 mb-4">
      <Link to={link}>{title}</Link>
      </h5>
      
      <button className="hidden-button bg-white text-black py-2 px-4 ">
        Read More
      </button>
    </div>
  </div>

);

const Products = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard title="CCTV CAMERA" image={img1} link="/ipcamera" />
        <ServiceCard title="Video Door Phone" image={img2} link="/videodoor"/>
        <ServiceCard title="Access Control" image={img3} link="/access"/>
      </div>
    </div>
  );
};


export default Products