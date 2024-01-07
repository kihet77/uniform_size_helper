import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Admin = () => {
  const [adminId, setAdminId] = useState("2c0002");
  const [adminPw, setAdminPw] = useState("tmakxm3004");
  const navigate = useNavigate()

  function adminLogin(event) {
    event.preventDefault();
    const data = {
      adminId: adminId,
      adminPw: adminPw,
    };
    axios({
      method: "POST",
      url: "http://localhost:8000/admin/login",
      data: data,
    }).then((res) => {
      if(res.data.isSuccess) navigate("/admin/main")
    })
    .catch((error) => {
      console.log(data)
      console.error(error);
    });;
  }

  return (
    <>
      <form onSubmit={adminLogin}>
        <input
          type="text"
          value={adminId}
          placeholder="id"
          onChange={(e) => {
            setAdminId(e.target.value);
          }}
        />
        <input
          type="password"
          value={adminPw}
          placeholder="pw"
          onChange={(e) => {
            setAdminPw(e.target.value);
          }}
        />
        <button type="submit">
          어드민 로그인
        </button>
      </form>
    </>
  );
};

export default Admin;
