import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/ktennis.jpg'; // Adjust the path as per your project structure
import aryan from '../assets/aryan.jpg'; // Image 1 of the owner
import aryan2 from '../assets/aryan2.jpg'; // Image 2 of the owner

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility after a short delay to create the pop-up effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the time as necessary

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className={`text-4xl font-extrabold text-[#006400] mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        About the Owner
      </h1>
      <div className={`flex flex-col items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Image 1 */}
          <img
            src={aryan}
            alt="Aryan Bhardwaj"
            className="rounded-full w-48 h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Image 2 */}
          <img
            src={aryan2}
            alt="Aryan Bhardwaj"
            className="rounded-full w-48 h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className={`text-lg leading-relaxed text-center mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Hey, my name is Aryan Bhardwaj, and I have been playing tennis since I was 6 years old.
        </p>
        <p className={`text-lg leading-relaxed text-center mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Over the years, I have evolved into an experienced player, participating on the South Brunswick High School Junior Varsity team for 3 years and the Varsity team for 1 year.
        </p>
        <p className={`text-lg leading-relaxed text-center mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          For over a year, I have also been coaching kids and teens at KTennis, sharing my passion for the game.
        </p>
      </div>

      {/* Mission Statement */}
      <div className={`mt-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-semibold text-[#006400] mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          At KTennis Club, our mission is to foster a love for tennis in our community by providing quality coaching, a supportive environment, and opportunities for players of all ages to develop their skills and enjoy the game.
        </p>
      </div>

      {/* Circular Logo Section */}
      <div className={`flex justify-center mt-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative hover:scale-105 transition-transform duration-300" style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
