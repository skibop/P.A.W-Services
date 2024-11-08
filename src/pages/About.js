import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Users, MapPin, Phone, Clock, Shield, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
       <header className="bg-green-700 text-white p-4">
  <nav className="container mx-auto flex justify-between items-center">
    <Link to="/" className="flex items-center">
      <img src="/logo.png" alt="P.A.W Services Logo" className="h-10 mr-2" />
      <span className="text-2xl font-bold">P.A.W Services</span>
    </Link>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/services" className="hover:underline">Services</Link>
      <Link to="/reviews" className="hover:underline">Reviews</Link>
      <Link to="/team" className="hover:underline">Team</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </div>
  </nav>
</header>
      <main className="flex-grow">
        <section className="bg-amber-500 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">About P.A.W Services</h1>
            <p className="text-xl mb-8">Your Trusted Moving Partner in the Tri-State Area</p>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <p className="text-lg mb-6">
                  P.A.W Services was founded by a group of dedicated individuals from South Brunswick, New Jersey. Our passion for helping people and our commitment to excellence led us to establish a moving service that caters to the diverse needs of the tri-state area.
                </p>
                <p className="text-lg mb-6">
                  With years of experience and a deep understanding of the local communities, we've grown from a small team to a trusted name in moving services. Our roots in South Brunswick have given us a strong foundation, and we've expanded our reach to serve customers throughout New Jersey, New York, and Connecticut.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-500">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-6 h-6 text-amber-500 mr-2" />
                    <span>Professional and reliable service</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 text-amber-500 mr-2" />
                    <span>Local expertise in the tri-state area</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-6 h-6 text-amber-500 mr-2" />
                    <span>Experienced and friendly team</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-6 h-6 text-amber-500 mr-2" />
                    <span>Timely and efficient moves</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-amber-500">Our Mission</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <p className="text-lg mb-6">
                Our mission at P.A.W Services is to provide exceptional moving experiences for residents and businesses in the tri-state area. We strive to combine our local knowledge, professional expertise, and personalized care to ensure every move is smooth, efficient, and stress-free.
              </p>
              <p className="text-lg mb-8">
                At P.A.W Services, we believe that moving should be an exciting new chapter in your life, not a stressful experience. That's why we're committed to providing Professional, Affordable, and Wonderful moving services that make your transition as smooth as possible.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-amber-500 text-white hover:bg-amber-600 h-12 px-6">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">Our Coverage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Truck, title: "Local Moves", description: "Efficient moves within your city or town" },
                { icon: MapPin, title: "Tri-State Area", description: "Serving NJ, NY, and CT with expert knowledge" },
                { icon: Phone, title: "Friendly Support", description: "Dedicated customer service for your peace of mind" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <item.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amber-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 P.A.W Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;