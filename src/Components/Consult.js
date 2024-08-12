import React from 'react'
import { FaInfoCircle, FaPhone, FaQuestionCircle } from 'react-icons/fa';

const Consult = () => {
  return (
    <>

<div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <FaInfoCircle className="text-5xl text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">About Us</h2>
            <p className="text-gray-600">
              Champion Security System is a trusted name in the industry, providing innovative security solutions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPhone className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-gray-600">
              At Champion Security System, we are dedicated to designing and delivering cutting-edge security products and services.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaQuestionCircle className="text-5xl text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">FAQs</h2>
            <p className="text-gray-600">
              Whether you're a homeowner looking to enhance your property's security or a business owner in need of advanced security solutions, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className='bg-slate-600 text-white w-full h-26 p-10'>
        <div className='flex justify-between items-cenetr'>
        <p className='text-3xl font-semibold'>Need a Consultation? Contact Us</p>
        <button className='bg-white text-slate-600 px-4 py-2 font-semibold rounded'>Get in Touch</button>
        </div>

      </div>
    </>
  )
}

export default Consult