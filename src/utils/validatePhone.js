export const validatePhone = (prevState, setInvalidNumber, input) => {
  if (input.length > 12 || input.length < 16) {
    if (input[0] === "8") {
      if (
        !prevState.find(
          (item) => item === "7" + input.slice(1).replace(/\s/g, "")
        )
      )
        return [...prevState, "7" + input.slice(1).replace(/\s/g, "")];
      else return prevState;
    } else if (input[0] === "+") {
      if (!prevState.find((item) => item === input.slice(1).replace(/\s/g, "")))
        return [...prevState, input.slice(1).replace(/\s/g, "")];
      else return prevState;
    } else if (input[0] === "7") {
      if (!prevState.find((item) => item === input.replace(/\s/g, "")))
        return [...prevState, input.replace(/\s/g, "")];
    } else {
      setInvalidNumber(true);
      return prevState;
    }
  } else {
    setInvalidNumber(true);
    return prevState;
  }
};
