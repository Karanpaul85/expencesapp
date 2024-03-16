import PropTypes from "prop-types";
// import CustomImage from "../customImage";

/**
 * Text field component with various customization options.
 * @param {object} props - The props for the component.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {boolean} props.isRequired - Whether the input field is required or not.
 * @param {string} props.variant - The variant of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {JSX.Element} props.endAdornment - The end adornment element for the input field.
 * @param {JSX.Element} props.startAdornment - The start adornment element for the input field.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.inputValue - The value of the input field.
 * @param {boolean} props.isError - Whether the input field has an error or not.
 * @param {boolean} props.isSuccess - Whether the input field is successful or not.
 * @param {string} props.message - The message to display below the input field.
 * @param {boolean} props.isAutoComplete - Whether autocomplete is enabled for the input field.
 * @returns {JSX.Element} The TextField component.
 */
export default function TextField({
  type,
  placeholder = "",
  isRequired,
  variant = "primary",
  id,
  endAdornment = null,
  startAdornment = null,
  label = "",
  inputValue = "",
  isError = false,
  isSuccess = false,
  message = "",
  startDivider = false,
  endDivider = false,
  isAutoComplete = false,
  classes = "",
  ...restParams
}) {
  const checkInputType = () => {
    const nonTextTypes = ["radio", "checkbox", "button", "submit"];
    return nonTextTypes.includes(type) ? "text" : type;
  };

  const variantClasses = {
    primary:
      "rounded-md border border-lightGrey text-gray-900 text-sm block w-full p-2.5 focus:outline-none",
    withComponent:
      "rounded-md border border-lightGrey text-gray-900 text-sm block w-full p-2.5 focus:outline-none",
    "outline-none":
      "rounded-md text-gray-900 text-sm w-full p-2.5 placeholder-gray-500 focus:outline-none",
  };

  const labelPositionClass = startAdornment ? "left-10" : "left-3";
  return (
    <div className="relative w-full mb-4">
      <div className="relative">
        {startAdornment && (
          <div
            className={`flex absolute inset-y-0 left-0 items-center pl-3 pr-3 ${
              startAdornment.props.onClick
                ? "cursor-pointer"
                : "pointer-events-none"
            }`}
            {...startAdornment.props}
          >
            {startDivider && (
              <div
                data-testid="start_divider"
                className={`absolute right-1 ${
                  variant === "withComponent" ? "top-0" : "top-2"
                } ${
                  variant === "withComponent" ? "bottom-0" : "bottom-2"
                } w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25 dark:opacity-100 lg:block`}
              ></div>
            )}
            {startAdornment}
          </div>
        )}
        <input
          data-testid="input_field"
          type={checkInputType(type)}
          className={`${variantClasses[variant]} ${
            endAdornment ? "pr-11" : ""
          } ${startAdornment ? "pl-11" : ""} ${
            variant === "withComponent" ? "pl-[6rem]" : ""
          } ${isError ? "border-red-100" : ""} ${
            label ? "peer" : ""
          } ${classes}`}
          placeholder={label ? "" : placeholder}
          required={isRequired}
          id={id}
          autoComplete={isAutoComplete ? "on" : "off"}
          value={inputValue}
          {...(inputValue && label
            ? { "data-te-input-state-active": true }
            : {})}
          {...restParams}
        />
        {label && (
          <label
            data-testid="text_field_label"
            htmlFor={id}
            className={`pointer-events-none absolute top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.6rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] text-sm ${
              isError ? "text-red-100" : "text-gray-400"
            } transition-all duration-200 ease-out peer-focus:scale-[0.7] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.7] motion-reduce:transition-none peer-data-[te-input-state-active]:bg-white peer-focus:bg-white ${labelPositionClass} ${
              startAdornment
                ? "peer-focus:-translate-x-[0.9rem] peer-data-[te-input-state-active]:-translate-x-[0.9rem]"
                : ""
            }`}
          >
            {label}
          </label>
        )}
        {endAdornment && (
          <div
            className={`flex absolute inset-y-0 right-0 items-center pl-3 pr-3 ${
              endAdornment.props.onClick
                ? "cursor-pointer"
                : "pointer-events-none"
            }`}
            {...endAdornment.props}
          >
            {endDivider && (
              <div
                data-testid="end_divider"
                className="absolute left-0 top-2 bottom-2 w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25 dark:opacity-100 lg:block"
              ></div>
            )}
            {endAdornment}
          </div>
        )}
      </div>
      {/* {message && (
        <span
          data-testid="input_releated_message"
          className={`flex items-center font-normal tracking-wide text-xs mt-1 p-1 rounded-4 ${
            isError ? "bg-red-100 bg-opacity-5" : ""
          } ${
            isSuccess ? "bg-fnp-200 bg-opacity-5 text-fnp-500 font-600" : ""
          }`}
        >
          {isError && (
            <div>
              <CustomImage
                src="./icons/warning.svg"
                width={24}
                height={24}
                alt=""
                sizes="10vw"
                isPriority={false}
              />
            </div>
          )}
          <p className="ml-1">{message}</p>
        </span>
      )} */}
    </div>
  );
}
TextField.propTypes = {
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(["primary", "withComponent", "outline-none"])
    .isRequired,
  id: PropTypes.string.isRequired,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.node,
  label: PropTypes.string,
  inputValue: PropTypes.string,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  message: PropTypes.string,
  startDivider: PropTypes.bool,
  endDivider: PropTypes.bool,
  isAutoComplete: PropTypes.bool,
  placeholder: PropTypes.string,
};
