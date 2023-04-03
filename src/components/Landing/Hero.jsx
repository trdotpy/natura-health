import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer, textVariant } from "utils/Motion";
import { IconChevronRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <motion.div
      className="min-h-screen bg-background py-4 pb-6 sm:mt-8 sm:pb-8 lg:pb-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="mx-auto px-4 md:px-8">
        <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left xl:w-5/12">
            <motion.h1
              className="mb-8 text-4xl text-primary-500 sm:text-5xl md:text-6xl"
              variants={textVariant(0.1)}
            >
              Embrace Nature&apos;s Wisdom for a Healthier, Happier Life
            </motion.h1>

            <motion.p
              className="mb-6 text-body-500 md:text-lg lg:mb-8 lg:max-w-xl"
              variants={textVariant(0.2)}
            >
              Shop high quality, all-natural personal care items, supplements,
              scents, skincare, CBD oils, and more.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"
              variants={textVariant(0.2)}
            >
              <Link href="/products">
                <button className="inline-block w-full rounded border border-primary-300 bg-primary py-1.5 px-4 font-semibold text-primary-800 hover:bg-primary-300">
                  Shop Now
                </button>
              </Link>

              <Link href="/blog">
                <button className="inline-block w-full rounded border border-accent py-1.5 px-4 font-medium text-body hover:bg-secondary-300">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="mb-12 -ml-5 flex w-full md:mb-16 lg:w-2/3">
            <motion.div
              className="relative top-12 left-12 z-10  overflow-hidden rounded-lg shadow-lg md:top-16 md:left-16 lg:ml-0"
              variants={fadeIn("left", "tween", 0.2, 0.5)}
            >
              <Image
                src="/assets/hero-cream.jpg"
                alt="mockup"
                height={1200}
                width={1200}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              variants={fadeIn("left", "tween", 0.2, 0.5)}
            >
              <Image
                src="/assets/hero-bath.jpg"
                alt="mockup"
                height={500}
                width={500}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
