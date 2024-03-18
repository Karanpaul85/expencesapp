import Icon from "./Icon";

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
        isFullHeight ? "h-full] top-0" : "h-full"
      } ${isOpenDrower ? "bg-opacity-90 top-0" : "bg-opacity-0 -top-full"}`}
      onClick={handleClose}
    >
      <div
        className={`fixed left-0 w-full bg-primaryWhite p-5 overflow-y-auto transition-all ${
          isFullHeight ? "h-full" : "h-fit rounded-t-lg"
        } ${isOpenDrower ? "bottom-0" : "-bottom-full"} `}
      >
        {!isFullHeight && heading && (
          <h4 className="font-medium text-16 mb-5">{heading}</h4>
        )}
        {isFullHeight && (
          <div className="absolute top-0 left-0 w-full h-[44px] flex items-center pl-5 pr-5 shadow-plus bg-primaryWhite cursor-pointer">
            <div
              className="w-[44px] h-full flex items-center"
              onClick={handleClose}
            >
              <Icon name="arrow-left" classes="w-6 h-6" />
            </div>
            <span className="text-16 font-medium">{heading}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
