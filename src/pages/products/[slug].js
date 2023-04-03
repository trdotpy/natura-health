import Layout from "@/layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import { shopifyClient, parseShopifyResponse } from "lib/shopify/shopifyClient";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import { relatedImages } from "utils/useRelatedImages";
import dynamic from "next/dynamic";
import Guarantee from "@/components/Product/Guarantee";
import Reviews from "@/components/Product/Reviews";
import Breadcrumb from "@/components/Shared/Breadcrumb";

export async function getStaticPaths() {
  const products = await shopifyClient.product.fetchAll();
  const paths = products.map((product) => ({
    params: { slug: product.handle },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await shopifyClient.product.fetchByHandle(params.slug);
  return {
    props: { product: parseShopifyResponse(product) },
    revalidate: 60,
  };
}

export default function ProductPage({ product }) {
  const dispatch = useDispatch();

  const FAQ = dynamic(() => import("@/components/Product/FAQ"), {
    ssr: false,
  });

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

  return (
    <Layout>
      <section className="min-h-screen py-12 sm:py-16">
        <div className="mx-auto px-4">
          <Breadcrumb page="Products">{product.title}</Breadcrumb>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-3xl overflow-hidden rounded-lg">
                    <Image
                      className="h-full w-full border-2 border-accent object-contain"
                      src={product.images[0].src}
                      alt={product.title}
                      // height={product.images[0].height}
                      // width={product.images[0].width}
                      height={900}
                      width={650}
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start justify-center gap-x-4 lg:flex-col">
                    <div className="flex-0 mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-accent text-center">
                      <Image
                        className="h-full w-full object-cover"
                        src={product.images[0].src}
                        alt={product.title}
                        // height={product.images[0].height}
                        // width={product.images[0].width}
                        height={200}
                        width={200}
                      />
                    </div>

                    {/* Related images */}
                    <div className="flex-0 mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-accent text-center">
                      <Image
                        className="h-full w-full object-cover"
                        src={product.images[1]?.src}
                        alt={product.title}
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="flex-0 mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-accent text-center">
                      <Image
                        className="h-full w-full object-cover"
                        src={product.images[2]?.src}
                        alt={product.title}
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="text-gray-900 pb-2 text-2xl font-medium sm:text-3xl">
                {product.title}
              </h1>
              <Reviews />
              <div className="mt-4 flex select-none flex-wrap items-center gap-1">
                <h2 className="text-sm font-medium text-body">Description</h2>
                <p className="text-sm text-body-500">{product.description}</p>
              </div>

              <div className="mt-4 flex flex-row items-center justify-between space-y-4 py-4 sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-gray-900 text-3xl font-medium">
                    {" "}
                    ${product.variants[0].price.amount}
                  </h1>
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded border border-primary-300 bg-primary py-1.5 px-3 text-sm font-medium text-primary-800 transition-all hover:bg-primary-300"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>

              <Guarantee />
            </div>
          </div>

          <div className="mt-12 ">
            <FAQ />
          </div>
        </div>
      </section>
    </Layout>
  );
}
