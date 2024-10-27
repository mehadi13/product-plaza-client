import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const location = useLocation();
  const { product: product } = location.state || {};

  if (!product) {
    return <div>Product Details not found</div>;
  }

  const { _id, name, description, image, category, price, rating } = product;

  const triggerAlert = (title, description) => {
    toast({
      title,
      description,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-6">
        <div className="flex justify-center">
          <img
            src={image}
            alt="Product Image"
            className="h-96 object-cover transition duration-500 group-hover:scale-105 sm:h-96"
          />
        </div>
        <div className="grid grid-cols-1 items-center">
          <div>
            <span className="text-lg font-medium text-gray-900 block">
              {name}
            </span>
            <span className="text-sm text-gray-700">Tk {price}</span>

            <div className="mt-3 text-sm text-gray-700">
              <span className="font-semibold">Category:</span>
              <span className="ml-1 px-3 bg-orange-200 font-bold text-gray-500">
                {category}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1">
                <div className="text-yellow-600">Details of this product</div>
                <div className="text-sm">{description}</div>
            </div>

            <div className="flex mt-6">
              <StarRatings
                rating={parseFloat(rating)}
                starRatedColor="#eab308"
                starDimension="20px"
              />
            </div>
          </div>

          <div className="mt-3 gap-4">
            <button
              className="block w-full rounded bg-yellow-400 hover:bg-yellow-600 p-4 text-sm font-medium transition hover:scale-105"
              onClick={() =>
                triggerAlert(
                  "Added to Cart",
                  `${name} - has been successfully added to the Cart.`
                )
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
