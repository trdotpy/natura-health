import { useState } from "react";

export default function CollectionFilter({
  collections,
  selectedCollection,
  handleCollectionSelect,
  collectionColors,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCollections = collections.filter((collection) =>
    collection.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCollectionClick = (collection) => {
    if (selectedCollection === collection.title) {
      handleCollectionSelect(null);
    } else {
      handleCollectionSelect(collection.id);
    }
  };

  return (
    <>
      <div className="mt-8 border border-accent px-4 py-5">
        <div className="flex flex-col gap-x-8 gap-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-body">
              Sort by Collection
            </h2>
          </div>

          <input
            type="text"
            className="w-full rounded border border-accent bg-accent-50 px-3 text-sm text-body-500"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredCollections.map((collection) => (
            <ul className="flex items-center text-body-500" key={collection.id}>
              <li className="mr-2">
                <input
                  type="checkbox"
                  checked={selectedCollection === collection.title}
                  onChange={() => handleCollectionClick(collection)}
                  className="cursor-pointer"
                />
              </li>
              <li>
                <button
                  className={`${
                    selectedCollection === collection.title
                      ? collectionColors[collection.title]
                      : "text-body-500"
                  } text-xs underline-offset-4 hover:underline sm:text-sm`}
                  onClick={() => handleCollectionClick(collection)}
                >
                  {collection.title}
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
