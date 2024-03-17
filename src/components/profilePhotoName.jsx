"use client";
import { useState } from "react";
import Icon from "./Icon";
import CustomButton from "./cutomButton";

export default function ProfilePhotoName() {
  const [showMonth, setShowMonth] = useState(false);
  return (
    <div className="w-full flex items-center justify-between mb-5">
      <div className="flex items-center">
        <input type="file" id="userPhoto" className="hidden" />
        <label
          className="w-[60px] h-[60px] rounded-full bg-lightGrey flex items-center justify-center"
          htmlFor="userPhoto"
        >
          <Icon name="camera" classes="w-6 h-6" />
        </label>
        <div className="ml-5 font-medium text-24 text-darkBlack">
          Karan Paul
        </div>
      </div>
      {showMonth && (
        <div>
          <CustomButton
            type="button"
            id="month"
            buttonText="Current Month"
            variant="withoutline"
            userDefineClasses="text-14 m-0"
            endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
            isNoMargin={true}
            onclick={(e) => handleClick("area")}
          />
        </div>
      )}
    </div>
  );
}
