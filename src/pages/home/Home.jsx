import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import CustomerReviews from "./CustomerReviews";
import { useLoaderData } from "react-router-dom";
import Sample from "./Sample";

const Home = () => {
  const categories = useLoaderData();
  return (
    <main>
      <Banner />
      {categories ? (
        categories.map((category, index) => (
          <Sample key={index} category={category.name} />
        ))
      ) : (
        <></>
      )}

      <CustomerReviews />
      <FAQs />

      <ContactUs />
    </main>
  );
};

export default Home;
