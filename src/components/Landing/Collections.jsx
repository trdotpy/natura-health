import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "utils/Motion";

export default function Collections() {
  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-center gap-8 text-center sm:mb-8 sm:justify-between sm:text-left md:mb-12">
          <div className="flex-col items-center gap-12">
            <motion.h2
              className="flex flex-col text-3xl tracking-tight text-primary-500 sm:text-4xl md:text-5xl"
              variants={fadeIn("up", "tween", 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              Shop our wide variety of Natura&apos;s finest{" "}
              <span>products today</span>
            </motion.h2>

            <motion.p
              className="mt-4 max-w-xl text-base text-body-500 sm:text-lg"
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              {" "}
              We believe that a healthier, happier life starts with the power of
              natural, eco-friendly wellness solutions.
            </motion.p>
          </div>
        </div>

        <div>
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-3"
            variants={fadeIn("up", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src="/assets/skin-care.jpg"
                height={300}
                width={400}
                alt="Skin Care"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 "
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
                Skin Care
              </p>
            </Link>
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:h-80"
            >
              <Image
                src="/assets/scent.jpg"
                height={1024}
                width={1024}
                alt="Scents"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
                Scents
              </p>
            </Link>

            <Link
              href="/products"
              className="group relative flex h-48 items-end justify-end overflow-hidden rounded px-4 shadow-lg md:h-80"
            >
              <Image
                src="/assets/collection-3.jpg"
                height={1024}
                width={1024}
                alt="Supplements"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
                Supplements
              </p>
            </Link>
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:h-80"
            >
              <Image
                src="/assets/bath.jpg"
                height={1024}
                width={1024}
                alt="Bath Essentials"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
                Bath Essentials
              </p>
            </Link>
            <Link
              href="/products"
              className="group relative flex h-48 items-end overflow-hidden rounded shadow-lg md:h-80"
            >
              <Image
                src="/assets/oils.jpg"
                height={1024}
                width={1024}
                alt="Oils"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="via-transparent to-transparent pointer-events-none absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
              <p className="relative ml-4 mb-3 inline-block text-sm font-medium text-white md:ml-5 md:text-lg">
                Oils
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
