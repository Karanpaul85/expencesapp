export default function CustomButton({
  buttonText,
  onclick,
  variant = "primary",
  isDisabled = false,
  userDefineClasses = "",
}) {
  const variantClasses = {
    primary: `transition hover:bg-primaryRedHover w-full bg-primaryRed text-center p-3 rounded-md text-primaryWhite ${
      isDisabled ? "pointer-events-none bg-opacity-60" : ""
    } ${userDefineClasses}`,
    outline: `transition w-full border border-primaryRed text-center p-3 rounded-md text-primaryRed focus:outline-none ${
      isDisabled ? "pointer-events-none opacity-50" : ""
    } ${userDefineClasses}`,
    withoutline: `transition w-full ${
      isDisabled ? "pointer-events-none opacity-50" : ""
    } ${userDefineClasses}`,
  };
  return (
    <div className="relative w-full mb-4">
      <button className={`${variantClasses[variant]}`} onClick={onclick}>
        {buttonText}
      </button>
      <div className="relative"></div>
    </div>
  );
}
