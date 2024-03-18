"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import CustomButton from "@/components/cutomButton";
import Drower from "@/components/drower";
import Layout from "@/components/layout";
import TextField from "@/components/textFiled";
import { useRouter } from "next/navigation";
import ProfilePhotoName from "@/components/profilePhotoName";

const Profile = () => {
  const router = useRouter();
  const [test, setTest] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [drowerType, setDrowerType] = useState("");

  const handleClick = (clickType) => {
    setDrowerType(clickType);
    setIsOpen(true);
    // router.push(`#${clickType}`, undefined, { shallow: true });
  };
  const handleChnage = () => {
    console.log("test");
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    router.back();
  };

  const renderPasswordDrower = () => {
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
  };

  const renderMarritalDrower = () => {
    return "marritalStatus";
  };

  const renderGenderDrower = () => {
    return "gender";
  };
  const renderDependendDrower = () => {
    return "Dependend";
  };
  const renderAreaDrower = () => {
    return "Area";
  };
  return (
    <Layout headerText="Profile" setIsOpen={setIsOpen}>
      <ProfilePhotoName />
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
      <Drower
        heading="Change Your Password"
        isOpenDrower={isOpen}
        handleClose={handleClose}
        isFullHeight={drowerType === "area" ? true : false}
      >
        {drowerType === "password" && renderPasswordDrower()}
        {drowerType === "marritalStatus" && renderMarritalDrower()}
        {drowerType === "gender" && renderGenderDrower()}
        {drowerType === "dependend" && renderDependendDrower()}
        {drowerType === "area" && renderAreaDrower()}
      </Drower>
    </Layout>
  );
};
export default Profile;
