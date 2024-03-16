import Image from "next/image";
import PropTypes from "prop-types";

const Icon = ({ name = "user", size = "44", classes = "w-4 h-4" }) => {
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
  name: PropTypes.string,
  size: PropTypes.string,
  classes: PropTypes.string,
};

export default Icon;
