import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import Store from "./Store";
import Student from "./Student";

const SchoolMain = () => {
  const Params = useParams();
  const [tab, setTab] = useState("학생");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/admin/${Params}`,
      params: Params,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tab]);

  // *** console.log("s",props) 콘솔 2개 찍힘
  return (
    <>
      <div>{Params.school_code}</div>
      <button
        onClick={() => {
          setTab("학생");
        }}
      >
        학생
      </button>
      <button
        onClick={() => {
          setTab("주문현황");
        }}
      >
        주문현황
      </button>
      <div>{tab === "학생" ? <Student /> : <Store Params={Params} />}</div>
    </>
  );
};

export default SchoolMain;
