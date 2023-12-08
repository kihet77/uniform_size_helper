import commonStyled from "../common.module.css";
import styled from "./navigation.module.css";

const middleSchoolList = [
  { schoolName: "중앙여자중학교", schoolCode: "a" },
  { schoolName: "복대중학교", schoolCode: "b" },
  { schoolName: "운호중학교", schoolCode: "c" },
  { schoolName: "생명중학교", schoolCode: "d" },
  { schoolName: "가경중학교", schoolCode: "e" },
  { schoolName: "율량중학교", schoolCode: "f" },
  { schoolName: "세광중학교", schoolCode: "g" },
  { schoolName: "경덕중학교", schoolCode: "h" },
  { schoolName: "산남중학교", schoolCode: "i" },
  { schoolName: "용성중학교", schoolCode: "j" },
];
const hightSchoolList = [
  { schoolName: "세광고등학교", schoolCode: "k" },
  { schoolName: "청주고등학교", schoolCode: "l" },
];

export default function Navigation() {
  const middleSchool = middleSchoolList.map((school) => <li key={school.schoolCode}>{school.schoolName}</li>);
  const hightSchool = hightSchoolList.map((school) => <li key={school.schoolCode}>{school.schoolName}</li>);

  return (
    <div className={styled.nav__list}>
      <p className={`${commonStyled.font_subtitle01} ${styled.nav__category}`}>
        중학교
      </p>
      <ul>{middleSchool}</ul>
      <p className={`${commonStyled.font_subtitle01} ${styled.nav__category}`}>
        고등학교
      </p>
      <ul>{hightSchool}</ul>
    </div>
  );
}
