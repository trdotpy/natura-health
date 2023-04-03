import { IconMinus, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function Announcement() {
  const [isHidden, setIsHidden] = useState(false);

  const handleDismiss = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null;
  }

  return (
    <div
      className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-primary 
	 to-body-100 py-2.5 px-6 sm:px-3.5 sm:before:flex-1 "
    >
      <div className="ml-9 flex items-center gap-y-2 gap-x-4 sm:ml-0">
        <h1 className="text-sm leading-6 text-body">
          The{" "}
          <span className="font-extrabold text-body underline underline-offset-4">
            Luxe
          </span>{" "}
          Body Cream ✨
        </h1>
        <p className="hidden text-xs leading-6 text-body sm:block sm:text-sm">
          Get it now - while supplies last.
        </p>
        <Link
          href="/products/natura-luxe-body-cream"
          className="flex-none rounded bg-black py-1 px-3.5 text-xs font-medium text-white shadow-sm sm:text-sm"
        >
          Shop now <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <IconX className="h-5 w-5 text-body" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
