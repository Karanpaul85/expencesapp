import Icon from "./Icon";
import CustomButton from "./cutomButton";

export default function FooterStickyButtons() {
  return (
    <div className="fixed bottom-0 left-0 flex justify-between w-full h-[44px] shadow-minus bg-primaryWhite">
      <div className="w-1/5 flex items-center justify-center flex-col p-1 border-r border-lightGrey">
        <Icon name="home" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          Home
        </span>
      </div>
      <div className="w-1/5 flex items-center justify-center flex-col p-1 border-r border-lightGrey">
        <Icon name="user" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          Profile
        </span>
      </div>
      <div className="w-1/5 flex items-center justify-center flex-col p-1 border-r border-lightGrey">
        <Icon name="wallet-money-icon" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          Add Money
        </span>
      </div>
      <div className="w-1/5 flex items-center justify-center flex-col p-1 border-r border-lightGrey">
        <Icon name="bill" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          New Expense
        </span>
      </div>
      <div className="w-1/5 flex items-center justify-center flex-col p-1 border-r border-lightGrey">
        <Icon name="filter" />
        <span className="text-12 leading-none truncate mt-1 w-full text-center">
          Filter
        </span>
      </div>
    </div>
  );
}
