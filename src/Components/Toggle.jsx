import { useState } from "react";

const Toggle = ({children}) => {

    const [show, setShow] = useState(false);

    const showToggle = () => {
        setShow(!show);
    };

  return (
    <div onClick={showToggle}>
      {children(show)}
    </div>
  )
}

export default Toggle
