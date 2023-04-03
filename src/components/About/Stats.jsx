import {
  IconLeaf,
  IconRecycle,
  IconSeeding,
  IconWorld,
  IconWorldDownload,
  IconWorldLatitude,
} from "@tabler/icons-react";

export default function Stats() {
  return (
    <div className="px-4 py-8 sm:max-w-2xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="row-gap-8 grid grid-cols-3 gap-10">
        <div className="rounded">
          <div className="flex items-center justify-center">
            <IconWorldLatitude
              className="mt-1 text-primary-500"
              size={40}
              stroke={1.5}
            />
          </div>
          <div className="flex justify-center py-4">
            <h6 className="text-2xl font-bold text-primary-400 md:text-3xl lg:text-4xl">
              200,000+{" "}
            </h6>
          </div>
          <div className="flex justify-center">
            <p className="mb-2 text-center text-base font-medium text-body-500 md:text-lg">
              Satisfied Customers Worldwide
            </p>
          </div>
        </div>
        <div>
          <div className="bg-teal-accent-400 flex items-center justify-center rounded-full">
            <IconLeaf
              className="mt-1 text-primary-500"
              size={40}
              stroke={1.5}
					/>
          </div>
          <div className="flex justify-center py-4">
            <h6 className="text-2xl font-bold text-primary-400 md:text-3xl lg:text-4xl">
              40%
            </h6>
          </div>
          <div className="flex justify-center">
            <p className="mb-2 text-center text-base font-medium text-body-500 md:text-lg">
              Reduction in Carbon Footprint
            </p>
          </div>
        </div>
        <div>
          <div className="bg-teal-accent-400 flex items-center justify-center rounded-full">
            <IconSeeding
              className="mt-1 text-primary-500"
              size={40}
              stroke={1.5}
            />
          </div>
          <div className="flex justify-center py-4">
            <h6 className="text-2xl font-bold text-primary-400 md:text-3xl lg:text-4xl">
              10,000
            </h6>
          </div>
          <div className="flex justify-center">
            <p className="mb-2 text-center text-base font-medium text-body-500 md:text-lg">
              Trees Planted Per Year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
