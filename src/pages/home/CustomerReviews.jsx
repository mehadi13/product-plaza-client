import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";



const CustomerReviews = () => {

  const testimonials = [
    {
      name: "John Doe",
      image: "https://i.imghippo.com/files/JlZ3917tbc.jpg",
      rating: 5,
      text: "Product Plaza exceeded my expectations! Quality products and fast delivery.",
    },
    {
      name: "Jane Smith",
      image: "No",
      rating: 4,
      text: "Great selection and reliable service. I always find what I need here.",
    },
    {
      name: "Carlos Ramos",
      image: "https://i.imghippo.com/files/tKaS8508TSQ.jpg",
      rating: 5,
      text: "Amazing experience! Customer support was helpful, and products were top-notch.",
    },
  ];

  
  
  return (
    <section className="container mx-auto p-4 my-8">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg p-6 bg-white rounded-lg">
            <CardHeader className="flex items-center gap-4 mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="h-20 w-20 rounded-full" />
              <div>
                <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                <div className="flex items-center text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700 italic">{testimonial.text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
  };

  export default CustomerReviews
  