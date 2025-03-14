import { useState, useEffect } from 'react';





const images = [
    'https://picsum.photos/seed/picsum/600/600?random=1',
    'https://picsum.photos/seed/picsum/600/600?random=3',
    'https://picsum.photos/seed/picsum/600/600?random=2',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Go to a specific image
 const goToSlide = (index: number) => {
    setCurrentIndex(index);
};

    return (
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
            {/* Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-3000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-primary p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
                &#10094;
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-primary p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
                &#10095;
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-gray-300 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;