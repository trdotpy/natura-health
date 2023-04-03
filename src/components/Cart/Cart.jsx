import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  IconArrowRight,
  IconMinus,
  IconPlus,
  IconCreditCard,
} from "@tabler/icons-react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "@/store/cartSlice";
import Tooltip from "../Shared/Tooltip";

export default function ShoppingCart({ cartOpen, setCartOpen }) {
  const dispatch = useDispatch();
  const [cartQuantity, setCartQuantity] = useState(0);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    if (cartItems) {
      const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setCartQuantity(quantity);
    }
  }, [cartItems]);

  const subtotal = cartItems
    ?.reduce((acc, item) => acc + item.price.amount * item.quantity, 0)
    .toFixed(2);

  const handleUpdate = (variantId, quantity) => {
    dispatch(updateQuantity({ variantId, quantity }));
  };

  return (
    <>
      {cartQuantity > 0 && (
        <div className="absolute top-10 right-6 flex h-2 w-2 items-center justify-center rounded-full bg-primary-500 text-xs">
          {/* {cartQuantity} */}
        </div>
      )}
      <Transition.Root show={cartOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setCartOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-body bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-200"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-background shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between pb-3">
                          <Dialog.Title className="text-lg font-medium text-body">
                            Your cart ({cartQuantity})
                          </Dialog.Title>

                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 rounded p-2 text-body-500 hover:bg-body-100"
                              onClick={() => setCartOpen(!cartOpen)}
                            >
                              <span className="sr-only">Close panel</span>
                              <IconMinus
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-accent"
                            >
                              {cartItems &&
                                cartItems.map((item) => (
                                  <li
                                    key={`${item.id}-${item.variantId}`}
                                    className="flex border-t border-accent py-6"
                                  >
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-accent">
                                      <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                        height={100}
                                        width={100}
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-body">
                                          <h3>
                                            <a href={item.href}>{item.title}</a>
                                          </h3>
                                          <p className="ml-4">
                                            ${item.price.amount}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-body-500">
                                          {item.description}
                                        </p>
                                      </div>

                                      <div className="mt-4 flex flex-1 items-end justify-between text-sm">
                                        <p className="font-medium text-body-500">
                                          Quantity: {item.quantity}
                                        </p>

                                        <div className="space-x-2">
                                          <button
                                            type="button"
                                            className="rounded border border-accent bg-background p-1 transition-all duration-200 ease-in-out"
                                            onClick={() =>
                                              handleUpdate(
                                                item.variantId,
                                                item.quantity - 1
                                              )
                                            }
                                            disabled={item.quantity <= 1}
                                          >
                                            <IconMinus className="h-5 w-5 text-body" />
                                          </button>

                                          <button
                                            type="button"
                                            className="rounded border border-accent bg-background p-1 transition-all duration-200 ease-in-out"
                                            onClick={() =>
                                              handleUpdate(
                                                item.variantId,
                                                item.quantity + 1
                                              )
                                            }
                                            disabled={item.quantity >= 10}
                                          >
                                            <IconPlus className="h-5 w-5 text-body" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-accent py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-body">
                          <p>Subtotal</p>
                          <p>${subtotal}</p>
                        </div>

                        <Tooltip>
                          <div className="mt-6 flex justify-center">
                            <button
                              type="button"
                              className="flex w-full items-center justify-center rounded border bg-black px-6 py-2 text-base font-medium text-white shadow-sm"
                            >
                              Checkout
                              <IconCreditCard
                                stroke={2.0}
                                size={20}
                                className="ml-2"
                              />
                            </button>
                          </div>
                        </Tooltip>
                        <div className="mt-6 flex justify-center text-center text-sm font-medium text-secondary-400 underline-offset-4 hover:underline">
                          <p>
                            <button
                              type="button"
                              onClick={() => setCartOpen(!cartOpen)}
                              className="flex items-center gap-x-1"
                            >
                              Or Continue Shopping
                              <IconArrowRight className="h-4 w-4" />
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
