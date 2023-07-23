import { Button } from "antd";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const StartBtn = () => {
  const [cookies] = useCookies();
  const naviator = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          if (cookies.userInfo != 1) {
            naviator("/todo");
          } else {
            alert("정보기입 후 사용 가능합니다.");
            naviator("/submit");
          }
        }}
      >
        운동 시작
      </Button>
    </div>
  );
};

export default StartBtn;
