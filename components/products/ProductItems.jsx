import CartContext from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import StarRatings from "react-star-ratings";

const ProductItems = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const AddToCartItem = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.stock,
      seller: product.seller,
    });
    
  };
  return (
    <div className="relative border border-gray-200 overflow-hidden bg-white shadow-md rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <Link href={`/product/${product._id}`}>
            <Image
              src={
                product?.images[0]
                  ? product?.images[0].url
                  : "/images/default_product.png"
              }
              alt={product.name}
              height="240"
              width="240"
              layout="responsive"
              className="hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </Link>
        </div>
        <div className="md:w-2/3 p-5 flex flex-col justify-between">
          <div>
            <Link href={`/product/${product._id}`}>
              <p className="text-2xl font-semibold text-gray-900 hover:text-blue-600">
                {product.name}
              </p>
            </Link>
            <div className="flex items-center mt-2">
              <StarRatings
                rating={product?.ratings}
                starRatedColor="#ffb829"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
              <span className="text-sm ml-2 text-gray-500">
                {product?.ratings} ({product?.reviews.length} reviews)
              </span>
            </div>
            <p className="text-gray-500 mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap md:whitespace-normal md:h-auto md:max-h-none">
              {product?.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-black">
              ${product?.price}
            </span>
            <button
              onClick={AddToCartItem}
              className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
