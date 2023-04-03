import {
  IconBoxSeam,
  IconBuildingStore,
  IconMicroscope,
  IconPlant,
} from "@tabler/icons-react";

export default function Steps() {
  return (
    <section>
      <div className="mx-auto flex flex-col p-6">
        <h2 className="py-4 text-center text-3xl font-medium tracking-tight text-primary-400 md:text-4xl lg:text-5xl">
          At Natura Health, we are dedicated to nurturing strong relationships
          with our partners, customers, and communities. Our diverse team of
          experts is working to create products that truly make a difference.
        </h2>
        <p className="text-center text-sm text-body-500 sm:text-base">
          Here&apos;s how it all works.
        </p>
        <div className="divide-y divide-body-500">
          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconMicroscope className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 1
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Ideation & Market Research
              </h2>
              <p className="mt-4 text-body-500">
                We begin by identifying gaps and opportunities in the health and
                wellness market. Our team of experts conducts extensive market
                research and collaborates with industry leaders to generate
                innovative product ideas that align with our mission and values.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconBuildingStore className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 2
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Formulation & Testing
              </h2>
              <p className="mt-4 text-body-500">
                Our team of scientists and nutritionists meticulously develop
                formulations using the highest quality natural ingredients. We
                prioritize safety and efficacy by conducting rigorous testing
                and adhering to strict quality control standards, ensuring our
                products meet and exceed industry requirements.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconPlant className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 3
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Sustainable Production
              </h2>
              <p className="mt-4 text-body-500">
                We are committed to minimizing our environmental impact by
                employing eco-friendly production processes and sourcing
                sustainable packaging materials. Our supply chain partners share
                our values and are dedicated to reducing waste and conserving
                resources throughout the manufacturing process.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconBoxSeam className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 4
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Shipping & Delivery
              </h2>
              <p className="mt-4 text-body-500">
                Once our products are ready, we ship them to customers using
                environmentally responsible shipping practices. We continuously
                optimize our logistics network to reduce transit times and our
                carbon footprint. Our exceptional customer service team is
                always available to ensure a smooth and satisfying experience
                for our customers from order placement to delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
