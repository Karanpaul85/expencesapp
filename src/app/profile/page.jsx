import Icon from "@/components/Icon";
import CustomButton from "@/components/cutomButton";
import Layout from "@/components/layout";
import TextField from "@/components/textFiled";

const Profile = () => {
  return (
    <>
      <Layout headerText="Profile">
        <div className="w-full flex items-center mb-5">
          <div className="w-[60px] h-[60px] rounded-full bg-lightGrey flex items-center justify-center">
            <Icon name="camera" classes="w-6 h-6" />
          </div>
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
          <TextField
            variant="primary"
            id="marritalStatus"
            placeholder="Marrital Status"
            type="text"
            startAdornment={<Icon name="marriage" />}
            isRequired={true}
            endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          />
          <TextField
            variant="primary"
            id="gender"
            placeholder="Gender"
            type="text"
            startAdornment={<Icon name="gender" classes="w-6 h-6" />}
            isRequired={true}
            endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          />
          <TextField
            variant="primary"
            id="dependend"
            placeholder="Dependend on You"
            type="text"
            startAdornment={<Icon name="family" classes="w-6 h-6" />}
            isRequired={true}
            endAdornment={<Icon name="chevron-down" classes="w-6 h-6" />}
          />
          <TextField
            variant="primary"
            id="area"
            placeholder="Where you live"
            type="text"
            startAdornment={<Icon name="map-pin" classes="w-6 h-6" />}
            isRequired={true}
          />
          <TextField
            variant="primary"
            id="password"
            placeholder="Change Password"
            type="password"
            startAdornment={<Icon name="lock-closed" classes="w-6 h-6" />}
            isRequired={true}
          />
          <CustomButton
            buttonText="Update Info"
            variant="primary"
            isDisabled={true}
            userDefineClasses="uppercase font-medium text-16"
          />
        </form>
      </Layout>
    </>
  );
};
export default Profile;
