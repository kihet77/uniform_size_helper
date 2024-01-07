import React, { useEffect } from "react";
import axios from "axios";
import SideBar from "./sideBar/SideBar";

const Main = (props) => {
  const {schoolInfo} = props

  return (
    <>
      <SideBar
        schoolInfo={schoolInfo}
      />
    </>
  );
};

export default Main;
