import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Consult from '../Components/Consult';
import Footer from '../Components/Footer';
import ipproducts from '../data/Ipdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '../Components/Navbar';
import ReactImageMagnify from 'react-image-magnify';

const IPProduct = () => {
    const { id } = useParams();
    const ipproduct = ipproducts.find(p => p.id === parseInt(id));
    const [isExpanded, setIsExpanded] = useState(false);

    if (!ipproduct) {
        return <p>Product not found</p>;
    }

    const handleToggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateText = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + '...';
    };

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg mt-20">
                <div className="flex">
                    <div className="w-1/2">
                    <ReactImageMagnify
              {...{
                smallImage: {
                  alt: ipproduct.imageAlt,
                  isFluidWidth: true,
                  src: ipproduct.imageSrc,
                },
                largeImage: {
                  src: ipproduct.imageSrc,
                  width: 900,
                  height: 500,
                },
                enlargedImageContainerStyle: { background: '#fff',objectFit: 'cover', zIndex: 9 },
                enlargedImageContainerDimensions: {
                  width: '150%',
                  height: '200%',
                },
              }}
            />
                    </div>
                    <div className="w-1/2 pl-6">
                        <h1 className="text-2xl font-semibold">{ipproduct.name}</h1>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 mr-1">★ ★ ★ ★ ☆</span>
                            <span className="text-gray-500">(512 reviews)</span>
                        </div>
                        <div className="text-xl font-bold mt-4">{ipproduct.price}</div>
                        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Get Quote
                        </button>
                        <div className="mt-6">
                            <p className="text-gray-700">
                                {isExpanded ? ipproduct.description : truncateText(ipproduct.description, 200)}
                            </p>
                            <button onClick={handleToggleReadMore} className="text-blue-600 mt-2">
                                {isExpanded ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-12">
                <div className="container">
                    <h2 className="text-xl font-bold text-gray-900 m-3">Related Products</h2>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                            {ipproducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <a href={product.href} className="group">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <img
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>

            <Consult />
            <Footer />
        </>
    );
};

export default IPProduct;
