import { Button } from "antd";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [cookies] = useCookies();
  const navigator = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigator("/");
        }}
      >
        홈
      </Button>
      <Button
        onClick={() => {
          if (cookies.userInfo != 1) {
            navigator("/profile");
          } else {
            alert("정보기입 후 사용 가능합니다.");
            navigator("/submit");
          }
        }}
      >
        프로필
      </Button>
    </div>
  );
};

export default Menu;
