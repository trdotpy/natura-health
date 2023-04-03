import Layout from "@/layouts/Layout";
import { parseShopifyResponse, shopifyClient } from "lib/shopify/shopifyClient";
import CollectionFilter from "@/components/Product/CollectionFilter";
import Head from "next/head";
import ProductSearch from "@/components/Product/ProductSearch";
import ProductFilter from "@/components/Product/ProductFilter";
import ProductList from "@/components/Product/ProductList";
import { useState } from "react";

const collectionColors = {
  Everything: "text-[#6BA088] ",
  "Bath Essentials": "text-[#ed9949] ",
  Oils: "text-[#f299aa] ",
  Scents: "text-[#8A84E2]",
  "Skin Care": "text-[#5398cc] ",
  Supplements: "text-[#2a65ba] ",
  Accessories: "text-[#bf769e] ",
};

export async function getStaticProps() {
  const products = await shopifyClient.product.fetchAll();
  const collections = await shopifyClient.collection.fetchAllWithProducts();

  const collectionIds = collections.map((collection) => collection.id);

  const filteredProducts = collectionIds.reduce((acc, collectionId) => {
    const collection = collections.find((c) => c.id === collectionId);
    if (collection) {
      const products = collection.products;
      return acc.concat(products);
    }
    return acc;
  }, []);

  return {
    props: {
      products: parseShopifyResponse(products),
      filteredProducts: parseShopifyResponse(filteredProducts),
      collections: parseShopifyResponse(collections),
    },
  };
}

export default function ProductsPage({
  products,
  filteredProducts,
  collections,
}) {
  const [filter, setFilter] = useState(products);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedCollectionDescription, setSelectedCollectionDescription] =
    useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const handleCollectionSelect = (collectionId) => {
    const collection = collections.find((c) => c.id === collectionId);
    if (collection) {
      const products = collection.products;
      setFilter(products);
      setSelectedCollection(collection.title);
      setSelectedCollectionDescription(collection.description);
    } else {
      setFilter([]);
      setSelectedCollection("");
      setSelectedCollectionDescription("");
    }
  };

  const displayedProducts =
    filter.length > 0
      ? filter.filter((product) =>
          product.handle.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : filteredProducts.filter((product) =>
          product.handle.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <Layout>
      <Head>
        <title>Natura Health Co </title>
      </Head>

      <div className="min-h-screen overflow-auto py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-4 text-left text-2xl font-medium text-body lg:text-3xl">
                Shop{" "}
                <span
                  className={`${
                    selectedCollection
                      ? collectionColors[selectedCollection]
                      : "text-[#6BA088]"
                  }`}
                >
                  {selectedCollection ? selectedCollection : "Everything"}
                </span>
              </h1>
              <p className="max-w-screen-sm text-sm text-body-500 lg:text-base">
                {selectedCollectionDescription
                  ? selectedCollectionDescription
                  : "Our extensive collection of all-natural products includes personal care items, supplements, scents, skincare, CBD, accessories, and more. All of our products are made with all-natural ingredients, carefully selected for their effectiveness and purity."}
              </p>{" "}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end py-4">
            <ProductSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <ProductFilter
              collections={collections}
              handleCollectionSelect={handleCollectionSelect}
            />
          </div>

          <div className="grid grid-cols-6 border-t border-accent">
            <div className="col-span-1 hidden w-48 lg:block">
              <CollectionFilter
                collections={collections}
                selectedCollection={selectedCollection}
                handleCollectionSelect={handleCollectionSelect}
                collectionColors={collectionColors}
              />
            </div>

            <div className="col-span-6 w-full px-8 lg:col-span-5">
              <ProductList
                displayedProducts={displayedProducts}
                collectionColors={collectionColors}
                products={products}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
