import { IconSearch } from "@tabler/icons-react";

export default function ProductSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative mr-2 flex w-full justify-end rounded">
      <input
        type="text"
        placeholder="Search"
			value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded border border-accent bg-accent-50 p-2 text-sm text-body-500 sm:w-64"
      />
      <IconSearch
        className="text-gray-900 absolute right-0 top-0 bottom-0 m-auto pr-2"
        size={24}
      />
    </div>
  );
}
