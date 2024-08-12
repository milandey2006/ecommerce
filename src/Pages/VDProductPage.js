import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';
import Consult from '../Components/Consult';
import Footer from '../Components/Footer';
import vdproducts from '../data/vddata';
import Navbar from '../Components/Navbar';
import ReactImageMagnify from 'react-image-magnify';

const VDProductPage = () => {
    const { id } = useParams();
    const vdproduct = vdproducts.find(p => p.id === parseInt(id));
    const [isExpanded, setIsExpanded] = useState(false);

    if (!vdproduct) {
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
                {/* Product details for Video Door Phone */}
                <div className="flex">
                    <div className="w-1/2">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: vdproduct.imageAlt,
                                    isFluidWidth: true,
                                    src: vdproduct.imageSrc,
                                },
                                largeImage: {
                                    src: vdproduct.imageSrc,
                                    width: 900,
                                    height: 500,
                                },
                                enlargedImageContainerStyle: { background: '#fff', zIndex: 9 },
                                enlargedImageContainerDimensions: {
                                    width: '150%',
                                    height: '200%',
                                },
                            }}
                        />
                    </div>
                    <div className="w-1/2 pl-6">
                        <h1 className="text-2xl font-semibold">{vdproduct.name}</h1>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 mr-1">★ ★ ★ ★ ☆</span>
                            <span className="text-gray-500">(512 reviews)</span>
                        </div>
                        <div className="text-xl font-bold mt-4">{vdproduct.price}</div>
                        {/* <div className="mt-4">
                            <span className="text-gray-700">Color:</span>
                            <div className="flex mt-2">
                                <button className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-300 focus:border-gray-900 mr-2"></button>
                                <button className="w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-300 focus:border-gray-900"></button>
                            </div>
                        </div> */}
                        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Get Quote
                        </button>
                        <div className="mt-6">
                            <p
                                className="text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: isExpanded ? vdproduct.description : truncateText(vdproduct.description, 200),
                                }}
                            />
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
                    {/* Add logic to filter and display related products */}
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000, // Adjust the delay as needed
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {vdproducts.map((product) => (
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
                    </Swiper>
                </div>
            </div>

            <Consult />
            <Footer />
        </>
    );
};

export default VDProductPage;
