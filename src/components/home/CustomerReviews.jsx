import React from 'react';

const ReviewNavigation = () => (
  <div className="flex justify-between">
    <button className="text-gray-400 hover:text-black transition">
      &larr;
    </button>
    <button className="text-gray-400 hover:text-black transition">
      &rarr;
    </button>
  </div>
);

const StarRating = ({ rating, reviewCount }) => (
  <div className="flex items-center mb-4">
    <div className="flex text-yellow-400 mr-2">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <span className="font-bold">{rating}</span>
    <span className="text-gray-500 ml-1">({reviewCount} reviews)</span>
  </div>
);

const CustomerReviews = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50 p-8 rounded-lg">
            <StarRating rating="4.8" reviewCount="1,242" />
            <p className="italic text-gray-700 mb-6">
              "These shoes transformed my daily runs. The comfort is unbelievable and they've held up perfectly after months of use."
            </p>
            <ReviewNavigation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;