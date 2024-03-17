import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Icon from "./Icon";

export default function FooterStickyButtons() {
  const router = useRouter();
  const pathName = usePathname();
  const handleClick = (clickType) => {
    router.push(`#${clickType}`, undefined, { shallow: true });
  };
  return (
    <div className="fixed bottom-0 left-0 flex justify-between w-full h-[44px] shadow-minus bg-primaryWhite">
      <Link
        href="/details"
        className={`${
          pathName === "/details" ? "w-1/5" : "w-1/4"
        } flex items-center justify-center flex-col p-1 border-r border-lightGrey`}
      >
        <Icon name="home" />
        <span
          className={`text-12 leading-none truncate mt-1 w-full text-center ${
            pathName === "/details" ? "text-primaryRed" : ""
          }`}
        >
          Home
        </span>
      </Link>
      <Link
        href="/profile"
        className={`${
          pathName === "/details" ? "w-1/5" : "w-1/4"
        } flex items-center justify-center flex-col p-1 border-r border-lightGrey
        `}
      >
        <Icon name="user" />
        <span
          className={`text-12 leading-none truncate mt-1 w-full text-center ${
            pathName === "/profile" ? "text-primaryRed" : ""
          }`}
        >
          Profile
        </span>
      </Link>
      <Link
        href="/addMoney"
        className={`${
          pathName === "/details" ? "w-1/5" : "w-1/4"
        } flex items-center justify-center flex-col p-1 border-r border-lightGrey`}
      >
        <Icon name="wallet-money-icon" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          Add Money
        </span>
      </Link>
      <Link
        href="/addExpense"
        className={`${
          pathName === "/details" ? "w-1/5" : "w-1/4"
        } flex items-center justify-center flex-col p-1 border-r border-lightGrey`}
      >
        <Icon name="bill" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          New Expense
        </span>
      </Link>
      {pathName === "/details" && (
        <div
          className="w-1/5 flex items-center justify-center flex-col p-1 border-r border-lightGrey cursor-pointer"
          onClick={() => handleClick("filter")}
        >
          <Icon name="filter" />
          <span className="text-12 leading-none truncate mt-1 w-full text-center">
            Filter
          </span>
        </div>
      )}
    </div>
  );
}
