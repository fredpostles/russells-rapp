import React from "react";
import Contacts from "./Contacts";
import { useSelector } from "react-redux";
import Messaging from "./Messaging";
import Search from "./Search";
import Onboarding from "./Onboarding";

const Interface = () => {
  const screenMode = useSelector((state) => state.screenMode);

  return (
    <>
      {screenMode === 1 && <Onboarding />}
      {screenMode === 2 && <Contacts />}
      {screenMode === 3 && <Messaging />}
      {screenMode === 4 && <Search />}
    </>
  );
};

export default Interface;
