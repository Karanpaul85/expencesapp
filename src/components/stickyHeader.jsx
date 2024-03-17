"use client";
import { useRouter } from "next/navigation";
import Icon from "./Icon";

export default function StickyHeader({ headerText, setIsOpen }) {
  const router = useRouter();
  const handleBackArrow = () => {
    setIsOpen(false);
    router.back();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[44px] flex items-center pl-5 pr-5 shadow-plus bg-primaryWhite cursor-pointer">
      <div
        className="w-[44px] h-full flex items-center"
        onClick={handleBackArrow}
      >
        <Icon name="arrow-left" classes="w-6 h-6" />
      </div>
      <span className="text-16 font-medium">{headerText}</span>
    </div>
  );
}
