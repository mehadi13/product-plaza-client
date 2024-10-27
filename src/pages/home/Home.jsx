import Banner from "./Banner"
// import Sample from "./Sample"
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import FAQs from "./FAQs"
import CustomerReviews from "./CustomerReviews"

const Home = () => {
  const reviewData = [
    { customerName: "Alice", comment: "Great product! Highly recommend.", rating: 5 },
    { customerName: "Bob", comment: "Good value for money.", rating: 4 },
    // Add more reviews as needed
  ];

  const faqData = [
    { question: "What is your return policy?", answer: "You can return any item within 30 days for a full refund." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." },
    // Add more FAQs as needed
  ];
  return (
    <main>
      <Banner/>
      
      {/* <Sample/>
      <Sample/>
      <Sample/> */}

<CustomerReviews reviews={reviewData}/>
      <FAQs faqs={faqData}/>

      <ContactUs/>
      <AboutUs/>
    </main>
  )
}

export default Home