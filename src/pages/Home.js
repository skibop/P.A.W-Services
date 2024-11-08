import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Box, Trash2, Users, Phone, ChevronRight, MapPin } from 'lucide-react';

const HomePage = () => {
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
            <h1 className="text-4xl font-bold mb-4">Welcome to P.A.W Services</h1>
            <p className="text-xl mb-8">Professional, Affordable, and Wonderful Moving and Junk Removal Services</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-amber-500 hover:bg-gray-100 h-10 py-2 px-4">
              Get a Quote
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Moving Services", icon: Truck, description: "Efficient and careful relocation of your belongings" },
                { title: "Junk Removal", icon: Trash2, description: "Quick and eco-friendly disposal of unwanted items" },
                { title: "Storage Solutions", icon: Box, description: "Secure storage options for your short or long-term needs" },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center">
                  <service.icon className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-center text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">Why Choose P.A.W Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Local Expertise", description: "Deep knowledge of the tri-state area", icon: MapPin },
                { title: "Experienced Team", description: "Skilled movers from South Brunswick", icon: Users },
                { title: "Comprehensive Services", description: "From packing to unpacking, we do it all", icon: Truck },
                { title: "Customer-Centric Approach", description: "Your satisfaction is our top priority", icon: Phone },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8 text-amber-500">Ready for a Stress-Free Move?</h2>
            <p className="text-xl mb-8">Let us handle the heavy lifting. Contact P.A.W Services today!</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-amber-500 text-white hover:bg-amber-600 h-12 px-6">
              Get Started
            </Link>
          </div>
        </section>

        {/* Flyer Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8 text-amber-500">Check Out Our Flyer</h2>
            <img src="/flyer.jpg" alt="Flyer" className="max-w-full h-auto mx-auto" />
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

export default HomePage;
