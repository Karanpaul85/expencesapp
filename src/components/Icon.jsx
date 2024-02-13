import Image from "next/image";
import PropTypes from "prop-types";

const Icon = ({ name, size, classes }) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      className={classes}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
Icon.defaultProps = {
  name: "user",
  size: "44",
  classes: "w-4 h-4",
};
export default Icon;
