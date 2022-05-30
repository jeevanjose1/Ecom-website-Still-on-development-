export const isAuthenticated = () => {
  if (
    localStorage.getItem("UID") === undefined ||
    localStorage.getItem("UID") === null ||
    localStorage.getItem("UID") === "" ||
    localStorage.getItem("UID") === false ||
    !localStorage.getItem("UID")
  ) {
    return false;
  } else if (localStorage.getItem("UID")) {
    return { ID: localStorage.getItem("UID") };
  }
};
