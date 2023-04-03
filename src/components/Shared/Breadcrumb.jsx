import Link from "next/link";

export default function Breadcrumb({ children, page }) {
  return (
    <nav className="flex pb-6">
      <ol role="list" className="flex items-center">
        <li className="text-left">
          <div className="-m-1">
            <Link
              href="/"
              className="rounded-md p-1 text-xs text-gray-800 underline-offset-8 hover:underline md:text-sm"
            >
              {" "}
              Home{" "}
            </Link>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-800">/</span>
            <div className="-m-1">
              <Link
                href={`/${page}`}
                className="rounded-md p-1 text-xs text-gray-800 underline-offset-8 hover:underline md:text-sm"
              >
                {" "}
                {page}{" "}
              </Link>
            </div>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-800">/</span>
            <div className="-m-1">
              <p className="mt-0.5 p-1 text-xs text-gray-800 sm:mt-0 md:text-sm">
                {children}
              </p>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
}
