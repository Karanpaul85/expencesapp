"use client";
import Icon from "@/components/Icon";
import CustomButton from "@/components/cutomButton";
import Drower from "@/components/drower";
import Layout from "@/components/layout";
import TextField from "@/components/textFiled";
import { useState } from "react";

const Profile = () => {
  const [test, setTest] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [drowerType, setDrowerType] = useState("");

  const handleClick = (clickType) => {
    setDrowerType(clickType);
    setIsOpen(true);
  };
  const handleChnage = () => {
    console.log("test");
  };
  const renderDrowerFields = () => {
    switch (drowerType) {
      case "marritalStatus":
        return "marritalStatus";
        break;
      case "gender":
        return "gender";
        break;
      case "dependend":
        return "dependend";
        break;
      case "area":
        return "area";
        break;
      case "password":
        return (
          <>
            <TextField
              id="currentPassword"
              variant="primary"
              inputValue={test}
              type="password"
              placeholder="Current Password"
              isAutoComplete={false}
              isRequired={false}
              onChange={handleChnage}
            />
            <TextField
              id="newPassword"
              variant="primary"
              inputValue={test}
              type="password"
              placeholder="New Password"
              isAutoComplete={false}
              isRequired={false}
              onChange={handleChnage}
            />
            <TextField
              id="confirmPassword"
              variant="primary"
              inputValue={test}
              type="password"
              placeholder="Confirm Password"
              isAutoComplete={false}
              isRequired={false}
              onChange={handleChnage}
            />
            <CustomButton
              buttonText="Update"
              variant="primary"
              isDisabled={true}
              userDefineClasses="uppercase font-medium text-16"
            />
          </>
        );
        break;
      default:
        return "KP";
        break;
    }
  };
  return (
    <Layout headerText="Profile">
      <div className="w-full flex items-center mb-5">
        <input type="file" id="userPhoto" className="hidden" />
        <label
          className="w-[60px] h-[60px] rounded-full bg-lightGrey flex items-center justify-center"
          htmlFor="userPhoto"
        >
          <Icon name="camera" classes="w-6 h-6" />
        </label>
        <div className="ml-5 font-medium text-28 text-darkBlack">
          Karan Paul
        </div>
      </div>
      <form>
        <TextField
          variant="primary"
          id="userId"
          inputValue="Karanpaul85"
          type="text"
          startAdornment={<Icon name="user" />}
          isAutoComplete={false}
          isRequired={false}
          disabled
          readOnly
        />
        <CustomButton
          type="button"
          id="marritalStatus"
          buttonText="Marrital Status"
          variant="basicBtn"
          startAdornment={<Icon name="marriage" />}
          endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          onclick={(e) => handleClick("marritalStatus")}
        />
        <CustomButton
          type="button"
          id="gender"
          buttonText="Gender"
          variant="basicBtn"
          startAdornment={<Icon name="gender" classes="w-6 h-6" />}
          endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          onclick={(e) => handleClick("gender")}
        />
        <CustomButton
          type="button"
          id="dependend"
          buttonText="Dependend on You"
          variant="basicBtn"
          startAdornment={<Icon name="family" classes="w-6 h-6" />}
          endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          onclick={(e) => handleClick("dependend")}
        />
        <CustomButton
          type="button"
          id="area"
          buttonText="Where you live"
          variant="basicBtn"
          startAdornment={<Icon name="map-pin" classes="w-6 h-6" />}
          endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          onclick={(e) => handleClick("area")}
        />
        <CustomButton
          type="button"
          id="password"
          buttonText="Change Password"
          variant="basicBtn"
          startAdornment={<Icon name="lock-closed" classes="w-6 h-6" />}
          onclick={(e) => handleClick("password")}
        />
        <CustomButton
          buttonText="Update Info"
          variant="primary"
          isDisabled={true}
          userDefineClasses="uppercase font-medium text-16"
        />
      </form>
      <Drower
        heading="Change Your Password"
        isOpenDrower={isOpen}
        handleClose={() => setIsOpen(!isOpen)}
        isFullHeight={false}
      >
        {renderDrowerFields()}
      </Drower>
    </Layout>
  );
};
export default Profile;
