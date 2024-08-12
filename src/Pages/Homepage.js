import React from 'react'
import Hero from '../Components/Hero'
import Products from '../Components/Services';
// import Contact from './Contact';
import Consult from '../Components/Consult';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <Consult />
            <Footer />
        </>

    )
}

export default Homepage