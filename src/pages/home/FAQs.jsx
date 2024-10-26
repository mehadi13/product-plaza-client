const FAQs = ({ faqs }) => {
    return (
      <section className="my-8 mx-auto max-w-screen-xl px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-bold">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))
          ) : (
            <p>No FAQs available.</p>
          )}
        </div>
      </section>
    );
  };
  
  export default FAQs