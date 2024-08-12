import React from 'react'
import logo from '../Images/logo.jpeg'


const Footer = () => {
  return (
    <>
      <div className='container my-10'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 mb-4'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.618849076942!2d72.84441951031953!3d19.124369882015475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce22f2c547b5%3A0x8cbc117b429754f9!2sChampion%20Security%20System%2C%20Hikvision%20Dahua%20Panasonic%20VDP%20%26%20CCTV%20Camera%20Installation%20and%20services%20in%20mumbai!5e0!3m2!1sen!2sin!4v1721537388556!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title='map'
              className='w-full border-0'
            ></iframe>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='text-slate-400 text-sm tracking-tighter mb-4'>
              In the dynamic and ever-growing city of Mumbai, the demand for reliable CCTV services is paramount. Champion Security System stands out as a leading provider of CCTV and IT services, renowned for our expertise and dedication. Whether for businesses or residential areas, we offer comprehensive security solutions tailored to your needs. Choose Champion Security System for dependable service and cutting-edge technology to secure your premises.
            </p>
            <hr className='my-4' />
            <p>
              <strong>Address:</strong> 6/338 Andheri subway, Swami Vivekananda Rd, Andheri West, <br /> Mumbai, Maharashtra 400058
            </p>
          </div>
        </div>

      </div>
        <div className="w-[100] p-5 flex justify-between bg-slate-600 text-white">
          <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="" className='w-20'/>
            <p>© 2024 Champion Security System, Inc. All rights reserved.</p>
          </div>
          <div className="flex space-x-16">
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul>
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/products" className="hover:underline">Products</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Connect with Us</h3>
              <ul>
                <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
                <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
                <li><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Company Info</h3>
              <ul>
                <li><a href="/about-us" className="hover:underline">About Us</a></li>
                <li><a href="/careers" className="hover:underline">Careers</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

    </>
  )
}

export default Footer