
import axios from "axios";
import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Bar = styled.div`
  display: inline-block;
  width: 300px;
  height: 100vh;
  background-color: var(--blue-50);
`;

const SideBar = (props) => {
  const [schoolInfo, setSchoolInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/admin/sidebar",
    })
      .then((res) => {
        setSchoolInfo(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Bar>
        <h2>스마트학생복</h2>
        <div>
          <img src="" alt="브랜드 로고"></img>
          <p>청주점</p>
          <p>월명로 11길 파비뇽아울렛</p>
        </div>

        <div>
          <h3>고등학교</h3>
          {schoolInfo.map((school) => (
            <Link to={`/admin/:${school.school_code}`} key={school.school_code}>
              {school.school_name}
            </Link>
          ))}
        </div>
      </Bar>
      s
    </>
  );
};

export default SideBar;
