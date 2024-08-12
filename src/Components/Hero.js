import React from 'react'
import heroimg from '../Images/IMG-20240706-WA0032.jpg'

const Hero = () => {
    return (
        <>
            <div className="bg-[#ffffff] w-full overflow-hidden">
  <div className="flex flex-col lg:flex-row p-10">
    <div className="lg:w-7/12 w-full p-10">
      <h1 className="text-3xl lg:text-5xl font-bold mt-4 lg:mt-40">
        Secure your premises<br /> with Champion <br />Security System
      </h1>
      <p className="text-sm lg:text-md mt-6 lg:mt-10">
        Our innovative security system combines advanced AI and machine learning technology to provide an unparalleled level of security and convenience for your premises.
      </p>
      <div className="mt-4 flex gap-3">
        <button className="bg-slate-600 text-white px-3 py-2">
          Explore
        </button>
        <button className="border-2 border-zinc-500 px-3 py-2">
          Contact Us
        </button>
      </div>
    </div>
    <div className="lg:w-5/12 w-full mt-10 lg:mt-0">
      <img src={heroimg} className="w-[400px] border-2 border-zinc-700 p-3" alt="heroimg" />
    </div>
  </div>
</div>


        </>
    )
}

export default Hero