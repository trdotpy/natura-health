import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function ProductList({ displayedProducts }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const { id: variantId, title, images, description, variants } = product;
    const image = images[0]?.src;
    const price = variants[0].price;
    dispatch(
      addToCart({
        variantId,
        title,
        quantity: 1,
        image,
        description,
        price,
      })
    );
  };

  console.log(displayedProducts);

  return (
    <div className="mb-4 mt-8 grid grid-cols-1 gap-4 md:mb-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
      {displayedProducts.map((product) => (
        <div
          className="cursor-pointer rounded p-4"
          key={product.id || product.handle}
        >
          <div className="group relative flex h-60 items-end overflow-hidden rounded shadow-md hover:shadow-lg md:h-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-100 group-hover:scale-110"
              src={product.images[0].src}
              alt={product.images[0].altText}
              height={product.images[0].height}
              width={product.images[0].width}
              onClick={() => {
                router.push(`/products/${product.handle}`);
              }}
            />
          </div>

          <div className="mt-3 flex-col space-y-2 px-2">
            {" "}
            <div>
              <h1
                className="relative my-2 inline-block cursor-pointer rounded text-sm text-body underline-offset-4 hover:underline md:text-base"
                onClick={() => {
                  router.push(`/products/${product.handle}`);
                }}
              >
                {product.title}
              </h1>
              <p className="text-xs text-body-500">{product.description}</p>
            </div>
            <div className="mt-2 flex flex-col justify-between pb-6 lg:flex-row lg:items-center">
              <p className="mt-1 text-lg font-medium text-body">
                ${product.variants[0].price.amount}
              </p>
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded border border-primary-300 bg-primary py-1.5 px-3 text-sm font-medium text-primary-800 transition-all hover:bg-primary-300 sm:w-28"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
