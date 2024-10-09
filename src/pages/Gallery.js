import React, { useEffect, useState } from 'react';

// Helper function to dynamically import all images from a folder
const importAll = (r) => r.keys().map(r);

// Dynamically import images from the gallery folder
const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to handle the clicked image

  useEffect(() => {
    // Trigger the visibility after a short delay to create the pop-up effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the time as necessary

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Handle image click to open in full-screen mode
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Handle closing the full-screen modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className={`text-3xl font-bold mb-8 text-[#006400] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        Gallery
      </h1>
      <p className={`text-lg mb-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        We're currently updating our gallery with new photos of coaching. 
        Please check back soon!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`} // More meaningful alt text without using "image"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={handleCloseModal}>
            &times;
          </button>
          <img src={selectedImage} alt="Selected Fullscreen" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
