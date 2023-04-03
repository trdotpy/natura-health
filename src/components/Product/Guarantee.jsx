import {
  IconBuildingBank,
  IconCreditCard,
  IconWorld,
} from "@tabler/icons-react";

export default function Guarantee() {
  return (
    <div>
      <ul className="mt-4 space-y-6">
        <li className="flex items-center text-left text-xs text-gray-900">
          <IconWorld
            stroke={1.5}
            className="mr-2 block h-5 w-5 align-middle text-gray-900"
          />
          Free shipping over $45
        </li>

        <li className="flex items-center text-left text-xs text-gray-900">
          <IconBuildingBank
            stroke={1.5}
            className="mr-2 block h-5 w-5 align-middle text-gray-900"
          />
          30 day money-back guarantee
        </li>

        <li className="flex items-center text-left text-xs text-gray-900">
          <IconCreditCard
            stroke={1.5}
            className="mr-2 block h-5 w-5 align-middle text-gray-900"
          />
          Cancel Anytime
        </li>
      </ul>
    </div>
  );
}
