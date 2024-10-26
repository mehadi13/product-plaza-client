const CustomerReviews = ({ reviews }) => {
    return (
      <section className="my-8 mx-auto max-w-screen-xl px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{review.customerName}</p>
                <p className="text-sm text-gray-600">{review.comment}</p>
                <p className="text-xs text-gray-500">Rating: {review.rating} / 5</p>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </section>
    );
  };

  export default CustomerReviews
  