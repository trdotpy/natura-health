import { IconFilter } from "@tabler/icons-react";

export default function ProductFilter({ collections, handleCollectionSelect }) {
  const handleCollectionClick = (collectionId) => {
    handleCollectionSelect(collectionId);
  };

  collections.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-with-icons"
        type="button"
        className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent-50 p-2 align-middle text-xs shadow-sm transition-all hover:bg-accent"
      >
        <IconFilter
          className="h-5 w-5 text-body-500 hs-dropdown-open:rotate-180"
          stroke={1.5}
        />
      </button>

      <div
        className="hs-dropdown-menu duration z-50 mt-2 hidden min-w-[10rem] divide-y divide-accent rounded bg-background p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
        aria-labelledby="hs-dropdown-with-icons"
      >
        {collections.map((collection) => (
          <div className="py-2 first:pt-0 last:pb-0" key={collection.id}>
            <p
              className="flex cursor-pointer items-center gap-x-3.5 rounded py-2 px-3 text-sm text-body-500 hover:bg-accent"
              onClick={() => handleCollectionClick(collection.id)}
            >
              {collection.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
