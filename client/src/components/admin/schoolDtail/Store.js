import axios from "axios";
import React, { useEffect } from "react";
import StoreItem from "../list/StoreItem";

const Store = (props) => {
  const {Params} = props
  console.log(Params)
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/admin/${Params}/store`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <button>동복</button>
      <button>하복</button>
      <StoreItem />
    </>
  );
};

export default Store;
