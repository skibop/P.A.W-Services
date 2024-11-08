import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Truck, Calendar, Archive, Home, MoreHorizontal, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { title: "Junk Removal", description: "Efficient removal of unwanted items from your property", icon: Trash2 },
    { title: "Furniture & Appliance Moving", description: "Safe and careful relocation of your valuable belongings", icon: Truck },
    { title: "Event Setup", description: "Professional arrangement for your special occasions", icon: Calendar },
    { title: "Storage Units", description: "Secure storage solutions for your short or long-term needs", icon: Archive },
    { title: "Garage & Basement Redesign", description: "Transform your space for better functionality and appeal", icon: Home },
    { title: "Additional Services", description: "Custom solutions tailored to your specific needs", icon: MoreHorizontal },
  ];

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
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl mb-8">Professional, Affordable, and Wonderful solutions for all your needs</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <service.icon className="w-16 h-16 text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/contact" className="inline-flex items-center justify-center text-sm font-medium text-amber-500 hover:text-amber-600 transition-colors">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-amber-500">Ready to Get Started?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your service needs and get a free quote!</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-amber-500 text-white hover:bg-amber-600 h-12 px-6">
              Request a Quote
            </Link>
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

export default ServicesPage;