import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const [showReviews, setShowReviews] = useState(false);

  const reviews = [
    {
      name: "Ashley Klien",
      rating: 5,
      comment: "KTennis Club is amazing! Aryan is top-notch and is patient with me."
    },
    {
      name: "Anthony Gillespie",
      rating: 4,
      comment: "Great community overall, I've improved my game significantly since joining."
    },
    {
      name: "Robert Jacobs",
      rating: 5,
      comment: "Aryan's skills help teach my son to play tennis incredibly well, extremely satisified!"
    },
      {
        "name": "Jairam Patel",
        "rating": 4,
        "comment": "As a beginner, I felt overwhelmed learning tennis, but Aryan's guidance helped me build confidence on the court. Now, I’m competing in local matches and loving it!"
      },
      {
        "name": "Megha Koduganti",
        "rating": 5,
        "comment": "Aryan transformed my tennis game! His focus on proper form and technique has made playing tennis with my friends so much more enjoyable."
      },
      {
        "name": "Aarit Kumar",
        "rating": 5,
        "comment": "Aryan’s personalized coaching has been a game-changer for me. My skills have improved tremendously, and now I feel more confident than ever on the court."
      } 
  ];

  useEffect(() => {
    // Set a timeout to show reviews after the component mounts
    const timer = setTimeout(() => {
      setShowReviews(true);
    }, 180); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#006400]">Member Reviews</h1>
      <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700 ${showReviews ? 'opacity-100' : 'opacity-0'}`}>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-2 italic">"{review.comment}"</p>
            <p className="font-semibold">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
