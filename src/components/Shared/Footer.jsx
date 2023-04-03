import { IconBrandGithub, IconChevronUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="mx-auto w-full max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-4">
          <div className="col-span-full mt-7 hidden lg:col-span-1 lg:block">
            <Link className="flex-shrink-0" href="/" aria-label="Brand">
              <Image
                src="/assets/natura-icon-black.png"
                alt="Natura Logo"
                height={70}
                width={70}
              />
            </Link>
          </div>

          <div>
            <h4 className="mt-7 text-sm font-semibold uppercase text-body">
              Products
            </h4>

            <div className="mt-2 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/products"
                >
                  Supplements
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/products"
                >
                  Scents
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/products"
                >
                  Skin Care
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/products"
                >
                  Bath Essentials
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="mt-7 text-sm font-semibold uppercase text-body">
              Company
            </h4>

            <div className="mt-2 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/about"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/about"
                >
                  Our Mission
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/blog"
                >
                  Blog
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="/blog"
                >
                  Learn
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="mt-7 text-sm font-semibold uppercase text-body">
              Contact
            </h4>

            <div className="mt-2 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="mailto:support@naturahealthco.com"
                >
                  Email Us
                </Link>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-body-500 underline-offset-4 hover:text-body hover:underline"
                  href="mailto:pharmacist@naturahealthco.com"
                >
                  Email Our Pharmacist
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-gray-400 mt-5 border-t pt-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-x-3">
              <div className="hs-dropdown relative inline-flex [--placement:top-left]">
                <button
                  id="footer-language-dropdown"
                  type="button"
                  className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border border-accent bg-background py-2 px-3 align-middle text-sm text-body transition-all hover:bg-body-100 focus:ring-secondary"
                >
                  English (US)
                  <IconChevronUp className="h-4 w-4 text-body-500 hs-dropdown-open:rotate-180" />
                </button>

                <div
                  className="hs-dropdown-menu duration z-10 hidden w-40 rounded-lg bg-background p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
                  aria-labelledby="footer-language-dropdown"
                >
                  <a
                    className="flex items-center gap-x-2 rounded-md py-2 px-3 text-sm text-body hover:bg-body-100 focus:ring-2 focus:ring-secondary"
                    href="#"
                  >
                    English (US)
                  </a>
                </div>
              </div>

              <div className="ml-4 space-x-4 text-sm">
                <Link className="inline-flex gap-x-2 text-body-500" href="#">
                  Terms
                </Link>
                <a className="inline-flex gap-x-2 text-body-500" href="#">
                  Privacy
                </a>
                <Link className="inline-flex gap-x-2 text-body-500" href="#">
                  Status
                </Link>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between sm:mt-0">
              <div className="sm:hidden">
                <Link
                  className="flex-none text-xl font-semibold "
                  href="/"
                  aria-label="Brand"
                >
                  <Image
                    src="/assets/natura-icon-black.png"
                    alt="Natura Logo"
                    height={70}
                    width={70}
                  />
                </Link>
              </div>

              <div className="space-x-4">
                <Link
                  className="inline-block text-body hover:text-accent"
                  href="https://github.com/trdotpy"
                >
                  <IconBrandGithub className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
