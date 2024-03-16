export default function Drower({
  heading = "",
  isOpenDrower,
  handleClose,
  isFullHeight = false,
  children,
}) {
  return (
    <div
      className={`fixed w-full left-0 bg-darkBlack z-10 overflow-y-auto transition-all ${
        isFullHeight ? "h-[calc(100vh-50px)] top-[50px]" : "h-full"
      } ${isOpenDrower ? "bg-opacity-90 top-0" : "bg-opacity-0 -top-full"}`}
      onClick={handleClose}
    >
      <div
        className={`fixed left-0 w-full bg-primaryWhite p-5 overflow-y-auto transition-all ${
          isFullHeight ? "h-[calc(100vh-50px)]" : "h-fit rounded-t-lg"
        } ${isOpenDrower ? "bottom-0" : "-bottom-full"} `}
      >
        {!isFullHeight && heading &&(
          <h4 className="font-medium text-16 mb-5">{heading}</h4>
        )}
        {children}
      </div>
    </div>
  );
}
