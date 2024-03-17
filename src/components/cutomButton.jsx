export default function CustomButton({
  type = "button",
  id,
  buttonText,
  onclick,
  variant = "primary",
  isDisabled = false,
  userDefineClasses = "",
  startAdornment = null,
  endAdornment = null,
  isNoMargin = false,
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
    basicBtn:
      "transition w-full bg-primaryWhite border border-lightGrey text-darkBlack text-left p-3 rounded-md",
  };
  return (
    <div className={`relative w-full ${isNoMargin ? "" : "mb-4"}`}>
      {startAdornment && (
        <div
          className={`flex absolute inset-y-0 left-0 items-center pl-3 pr-3 ${
            startAdornment.props.onClick
              ? "cursor-pointer"
              : "pointer-events-none"
          }`}
          {...startAdornment.props}
        >
          {startAdornment}
        </div>
      )}
      <button
        type={type}
        id={id}
        className={`${variantClasses[variant]} ${endAdornment ? "pr-11" : ""} ${
          startAdornment ? "pl-11" : ""
        }`}
        onClick={onclick}
      >
        {buttonText}
      </button>
      {endAdornment && (
        <div
          className={`flex absolute inset-y-0 right-0 items-center pl-3 pr-3 ${
            endAdornment.props.onClick
              ? "cursor-pointer"
              : "pointer-events-none"
          }`}
          {...endAdornment.props}
        >
          {endAdornment}
        </div>
      )}
    </div>
  );
}
