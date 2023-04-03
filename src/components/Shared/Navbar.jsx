import {
  IconMenu2,
  IconMinus,
  IconShoppingBag,
  IconShoppingCart,
  IconUser,
  IconUserCircle,
  IconUserPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import Tooltip from "./Tooltip";
import { useRouter } from "next/router";

const Cart = dynamic(() => import("../Cart/Cart"), {
  ssr: false,
});

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex w-full flex-wrap bg-background py-2 text-sm sm:flex-nowrap sm:justify-start">
      <nav
        className="mx-auto w-full px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/natura-icon-black.png"
                alt="Natura Logo"
                height={70}
                width={70}
              />
            </Link>
          </div>

          {/* Mobile menu btns */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border border-body-200 p-2 align-middle text-sm font-medium text-body-400 shadow-sm transition-all"
              data-hs-collapse="#navbar-collapse-basic"
              aria-controls="navbar-collapse-basic"
              aria-label="Toggle navigation"
            >
              <IconMenu2 className="h-4 w-4 hs-collapse-open:hidden" />
              <IconMinus className="hidden h-4 w-4 hs-collapse-open:block" />
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-basic"
          className="hidden grow basis-full sm:block"
        >
          <div className="mt-5 flex flex-col gap-4 tracking-tight sm:mt-0 sm:flex-row sm:items-center sm:pl-5 md:text-sm">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                className={`rounded py-1.5 px-3 text-sm font-medium ${
                  router.pathname === "/"
                    ? "font-semibold text-body underline underline-offset-8"
                    : "text-body-500"
                } hover:bg-body-100`}
                href="/"
              >
                Home
              </Link>

              <Link
                className={`rounded py-1.5 px-3 text-sm font-medium ${
                  router.pathname === "/products"
                    ? "font-semibold text-body underline underline-offset-8"
                    : "text-body-500"
                } hover:bg-body-100`}
                href="/products"
              >
                Products
              </Link>

              <Link
                className={`rounded py-1.5 px-3 text-sm font-medium ${
                  router.pathname === "/about"
                    ? "font-semibold text-body underline underline-offset-8"
                    : "text-body-500"
                } hover:bg-body-100`}
                href="/about"
              >
                About
              </Link>
              <Link
                className={`rounded py-1.5 px-3 text-sm font-medium ${
                  router.pathname === "/blog"
                    ? "font-semibold text-body underline underline-offset-8"
                    : "text-body-500"
                } hover:bg-body-100`}
                href="/blog"
              >
                Blog
              </Link>
            </div>

            <div className="flex flex-col items-center gap-3 sm:ml-auto sm:flex-row">
              <Tooltip>
                <button className="flex items-center gap-x-1.5 rounded border-accent py-1.5 px-3 font-medium text-body-500 hover:bg-body-100 sm:border">
                  <IconUserPlus
                    size={20}
                    stroke={1.5}
                    className="hidden sm:block"
                  />
                  Refer Friends
                </button>
              </Tooltip>

              <Tooltip>
                <button className="flex items-center gap-x-1.5 rounded border-accent-300 py-1.5 px-3 font-medium text-body-500 hover:bg-body-100 sm:border sm:border-primary-300 sm:bg-primary sm:font-semibold sm:text-primary-800 sm:hover:bg-primary-300">
                  <IconUserCircle
                    size={20}
                    stroke={1.5}
                    className="hidden sm:block"
                  />
                  Account
                </button>
                {/*     <button className="inline-block w-full rounded border border-primary-300 bg-primary py-1.5 px-4 font-semibold text-primary-800 hover:bg-primary-300"> */}
              </Tooltip>

              <button
                className="rounded py-1.5 px-3 text-body-900 hover:bg-body-100"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <IconShoppingCart
                  stroke={1.5}
                  size={24}
                  className="hidden sm:block"
                />
                <span className="text-body-500 sm:hidden">Your Cart</span>
              </button>
              <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
