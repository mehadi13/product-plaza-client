import {
  Card,
  CardContent
} from "@/components/ui/card"
import { API_URL } from "@/Constant";
import { Link, useLoaderData } from "react-router-dom";



const Sample = () => {
  const images = useLoaderData()
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Courses</h2>
        <p className="text-gray-600 mt-2">Explore our top courses designed to help you master your skills</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
      {images ? images.slice(0, 3).map((image, index) => (
                <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={image.img_url}
                    alt="Course 1"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            )) : <div>Loading....</div>}

<Link to={"dd"}>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    View Products
                  </button>
                </Link>


      </div>
    </section>
  );
}

export const imageLoader = async () => {
    const response = await fetch(`${API_URL}/images`);

    if (!response.ok) {
        throw Error("Could not fetch course images.")
    }

    return response.json();

}

export default Sample