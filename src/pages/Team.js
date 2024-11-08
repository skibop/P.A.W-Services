import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const TeamPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const teamMembers = [
    {
      name: "Derek Harrison",
      title: "Founder & Owner",
      description: "Derek is the driving force behind P.A.W. Services, quite literally. He personally operates our service van, visiting homeowners and construction sites across the area. With his hands-on approach, Derek ensures that any unwanted junk is efficiently and responsibly removed, leaving our clients with clean, clutter-free spaces. His dedication to customer satisfaction and environmental responsibility sets the standard for our entire team.",
      imageUrl: "/dj.jpg",
    },
    {
      name: "Havish Kolavennu",
      title: "Director of Marketing",
      description: "Havish is the face of P.A.W. Services in our community. His dynamic approach to marketing includes door-to-door sales and direct outreach to construction sites and auto shops. Havish expertly explains our range of services, from furniture removal to junk clearance, and schedules appointments that fit our clients' needs. His innovative partnerships, including collaborations with real estate agents like Rich Abrams, have expanded our services to include assisting clients with moving furniture to new homes and preparing houses for open house events. Havish's efforts have significantly broadened our client base and service offerings.",
      imageUrl: "/havish.jpg"
    },
    {
      name: "Aaron Dsouza",
      title: "Director of Finance",
      description: "Aaron is the financial backbone of P.A.W. Services. His strategic investments in essential equipment like electric saws and his management of U-Haul truck rentals have enabled us to offer a wider range of services. Aaron's role extends beyond just managing finances; he's instrumental in providing clients with accurate, transparent quotes. By personally visiting customer locations, Aaron assesses the scope of work, explains our pricing structure, and ensures that clients understand the value of our services. His meticulous tracking of revenue from each client has been crucial in maintaining our financial health and planning for future growth.",
      imageUrl: "/aaron.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-green-700 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="P.A.W. Services Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold">P.A.W. Services</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/reviews" className="hover:underline">Reviews</Link>
            <Link to="/team" className="hover:underline">Team</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/" className="block py-2 hover:bg-green-600">Home</Link>
            <Link to="/about" className="block py-2 hover:bg-green-600">About</Link>
            <Link to="/services" className="block py-2 hover:bg-green-600">Services</Link>
            <Link to="/reviews" className="block py-2 hover:bg-green-600">Reviews</Link>
            <Link to="/team" className="block py-2 hover:bg-green-600">Team</Link>
            <Link to="/contact" className="block py-2 hover:bg-green-600">Contact</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-amber-500 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-xl mb-8">The dedicated professionals behind P.A.W. Services</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="mb-16 lg:mb-24">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                  <div className="w-32 h-32 rounded-full bg-amber-100 flex items-center justify-center mb-6 lg:mb-0 lg:mr-8">
                    <img 
                      src={member.imageUrl} 
                      alt={`${member.name}`} 
                      className="w-full h-full object-cover rounded-full" 
                      style={{ objectPosition: member.imagePosition || 'center -3%' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-amber-500 mb-2">{member.name}</h2>
                    <h3 className="text-xl text-gray-600 mb-4">{member.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-amber-500">Join Our Growing Team</h2>
            <p className="text-lg mb-8">We're always looking for talented individuals to help us serve our community better. If you're passionate about customer service and making a difference, we'd love to hear from you!</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-amber-500 text-white hover:bg-amber-600 h-12 px-6">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-amber-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 P.A.W. Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;