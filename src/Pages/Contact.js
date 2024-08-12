import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

 const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         address: '',
//         date: '',
//         time: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.id]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, phone, email, address, date, time } = formData;
//         const message = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AAddress: ${address}%0ADate: ${date}%0ATime: ${time}`;
//         const whatsappURL = `https://wa.me/8080808109?text=${message}`;
//         window.open(whatsappURL, '_blank');
//     };

    return (
        <>
        <Navbar />

        <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chat with us */}
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Chat with us</h3>
          <p className="text-gray-700 mb-6">
            Chat with us for product technical support, service center details, repair status, installation requests and more.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center">
            Click here
            <span className="ml-2">↗</span>
          </button>
        </div>
        {/* Request Callback Service */}
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Request Callback Service</h3>
          <p className="text-gray-700 mb-6">
            Connect with our technical expert
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center">
            Schedule Callback
          </button>
        </div>
      </div>
    </div>
            {/* <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
                <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Online Book Service</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">Your Name <span className="text-red-500">*</span></label>
                                <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                    type="text" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                                <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                    type="text" 
                                    id="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                                <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                    type="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="address">Address <span className="text-red-500">*</span></label>
                                <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                    type="text" 
                                    id="address" 
                                    value={formData.address}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="date">Date <span className="text-red-500">*</span></label>
                                <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                    type="date" 
                                    id="date" 
                                    value={formData.date}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="time">Time <span className="text-red-500">*</span></label>
                                <input 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                    type="time" 
                                    id="time" 
                                    value={formData.time}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button 
                                className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                type="submit">
                                BOOK NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
};

export default Contact;
