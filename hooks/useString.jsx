import { useState } from "react";

function useString(value) {
  const [state, setState] = useState(value);

  const changeValue = (newValue) => {
    setState(newValue);
  };
  return [state, changeValue];
}

export default useString;
