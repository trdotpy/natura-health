export default function Mission() {
  return (
    <div className="relative mt-12 overflow-hidden">
      <div className=" px-4 pt-12 pb-10 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-x-2 rounded border border-accent-200 bg-accent-100 p-1.5 px-3 text-sm tracking-wide text-accent-500 transition">
            Our Story
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-4xl text-center">
          <h1 className="block text-4xl font-medium text-primary-400 md:text-5xl lg:text-6xl">
            Our mission is to revolutionize the health and wellness industry by
            offering innovative, eco-friendly, and premium quality products.
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-base text-body-500 sm:text-lg">
            Our commitment to using only the finest natural ingredients,
            combined with cutting-edge research and eco-conscious practices,
            sets us apart in the health and wellness industry. We pride
            ourselves on our transparent and ethical supply chain, ensuring that
            our products are not only good for our customers, but also for the
            planet.
          </p>
        </div>
      </div>
    </div>
  );
}
