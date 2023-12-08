import Navigation from "./Navigation";

import commonStyled from "../common.module.css";
import styled from "./side-bar.module.css";

export default function SideBar() {
  return (
    <nav>
      <h4>스마트학생복</h4>
      <div className={styled.profile}>
        <div className={styled.profile__img}>
          <img src="/img/smartprofile.png" alt="프로필 이미지" />
        </div>
        <div className={styled.profile__text}>
          <p
            className={`${commonStyled.font_subtitle01} ${styled.profile__test__first}`}
          >
            청주점
          </p>
          <p className={commonStyled.font_body01}>월명로 11길 파비뇽아울렛</p>
        </div>
      </div>
      <Navigation />

      <div className={`${commonStyled.font_subtitle02} ${styled.logout}`}>
        로그아웃
        <span class="material-symbols-outlined">move_item</span>
      </div>
      
    </nav>
  );
}
