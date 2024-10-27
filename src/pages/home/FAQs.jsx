import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is Product Plaza?",
      answer: "Product Plaza is an online platform that offers a wide range of high-quality products from various categories at competitive prices, backed by reliable customer service.",
    },
    {
      question: "How can I place an order?",
      answer: "To place an order, simply browse our product categories, add your desired items to the cart, and proceed to checkout. We offer multiple payment options for your convenience.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept major credit cards, PayPal, and other secure online payment methods to make shopping convenient and safe for you.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order is shipped, you'll receive a tracking number via email. You can use this to track your package on our website or the carrier’s website.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto p-4 my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="bg-white shadow-md rounded-lg">
            <CardHeader 
              className="cursor-pointer flex justify-between items-center p-4" 
              onClick={() => handleToggle(index)}
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {activeIndex === index ? <ChevronDown /> : <ChevronDown />}
            </CardHeader>
            {activeIndex === index && (
              <CardContent className="p-4 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
  };
  
  export default FAQs