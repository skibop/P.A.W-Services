import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, ChevronRight, Coins } from 'lucide-react';
import backgroundImage from '../Ktennis/assets/background.jpg'; // Adjust the path as per your project structure

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay here if needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div>
      {/* Hero Section with Background Image, Blur, and Transparency */}
      <section
        className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Overlay with Blur and Transparency */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content inside the hero section */}
        <div className="relative container px-4 md:px-6 z-10">
          <div className={`flex flex-col items-center space-y-4 text-center ${isVisible ? 'fade-in' : ''}`}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Welcome to KTennis Coaching
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                Experience the excitement of tennis with personalized coaching in your local community. Join the growing number of passionate players and take your game to the next level today.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-[#006400] hover:bg-zinc-200 h-10 py-2 px-4"
            >
              Book Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006400] mb-8 ${isVisible ? 'fade-in' : ''}`}>
            What We Offer
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Coins,
                title: 'Affordability',
                description: 'Tailored lesson plans designed to fit your budget without compromising on quality, ensuring noticeable progress.',
              },
              {
                icon: Users,
                title: 'Credibility',
                description: 'A well-regarded tennis coach, trusted by the South Brunswick community, with proven results in player development.',
              },
              {
                icon: Calendar,
                title: 'Training Programs',
                description: 'Comprehensive, personalized coaching for all ages and skill levels, with programs that help every player reach their full potential.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f0f0f0]`}
              >
                <item.icon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-700 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
