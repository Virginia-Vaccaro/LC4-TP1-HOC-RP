import { useState } from "react";

const withTooltip = (Component, mens) => {
  const ComponentWithTooltip = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };

    const handleMouseLeave = () => {
      setShowTooltip(false);
    };

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Component {...props} />
        {showTooltip && <div>{mens}</div>}
      </div>
    );
  };

  return ComponentWithTooltip;
};

export default withTooltip;