import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Masood Siddiqui",
      rating: 5,
      comment: "P.A.W Services did an outstanding job cleaning my gutters. Their attention to detail and thoroughness were impressive. I couldn't be happier with the results!"
    },
    {
      name: "Jaelyn Mitchell",
      rating: 5,
      comment: "I'm amazed at how efficiently P.A.W Services cleared out all the junk and scraps from my backyard, front yard, and garage. They did an exceptional job and left everything spotless!"
    },
    {
      name: "Faheem Ahmed",
      rating: 5,
      comment: "P.A.W Services made my move to a new house so much easier. They carefully collected all my furniture from the old home, transported it safely, and delivered everything to my new place. Their service was top-notch!"
    }
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
            <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
            <p className="text-xl mb-8">See what our satisfied customers have to say about P.A.W Services</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-600">"{review.comment}"</p>
                  <p className="font-semibold text-amber-500">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-amber-500">Ready to Experience Our Services?</h2>
            <p className="text-lg mb-8">Join our satisfied customers and let us help you with your next project!</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-amber-500 text-white hover:bg-amber-600 h-12 px-6">
              Get a Quote
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

export default ReviewsPage;