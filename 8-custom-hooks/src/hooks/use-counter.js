import { useEffect, useState } from "react";

// should start with "use" and react will understand it is a hook
// Follow best practices of hooks
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        forwards ? prevCounter + 1 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // never changes but it is better to follow best practices

  return counter;
};

export default useCounter;
