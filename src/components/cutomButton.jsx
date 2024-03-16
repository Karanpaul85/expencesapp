export default function CustomButton({
  buttonText,
  onclick,
  variant,
  isDisabled,
}) {
  const variantClasses = {
    primary: `transition hover:bg-primaryRedHover w-full bg-primaryRed text-center p-3 rounded-md text-primaryWhite ${
      isDisabled ? "pointer-events-none bg-opacity-60" : ""
    }`,
    outline: `transition w-full border border-primaryRed text-center p-3 rounded-md text-primaryRed focus:outline-none ${
      isDisabled ? "pointer-events-none opacity-50" : ""
    }`,
    withoutline: `transition w-full ${
      isDisabled ? "pointer-events-none opacity-50" : ""
    }`,
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
