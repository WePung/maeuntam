import { Button, Col, Row } from "antd";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigator = useNavigate();
  const rank = (value) => {
    if (value == 1) {
      return "초급";
    } else if (value == 2) {
      return "중급";
    } else if (value == 3) {
      return "상급";
    }
  };
  return (
    <div>
      <Button
        onClick={() => {
          navigator("/");
        }}
      >
        홈
      </Button>
      <Row justify="center">
        <Col>
          <ul style={{ listStyle: "none" }}>
            <li>{cookies.userInfo.userName}</li>
            <li>{rank(cookies.userInfo.level)}</li>
          </ul>
        </Col>
      </Row>
      <Button
        onClick={() => {
          navigator("/update");
        }}
      >
        수정하기
      </Button>
      <Button
        onClick={() => {
          removeCookie("userInfo");
          setCookie("userInfo", 1);
          navigator("/");
        }}
      >
        사용자 정보 삭제
      </Button>
      <Button
        onClick={() => {
          removeCookie("exsercise");
          setCookie("exsercise", { id: 0, isVaild: true });
        }}
      >
        운동기록 삭제
      </Button>
    </div>
  );
};

export default MyPage;
