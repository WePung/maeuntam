import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Calender from "../components/Calender";
import Menu from "../components/menu/Menu";
import StartBtn from "../components/StartBtn";

const Home = () => {
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    if (cookies.userInfo === undefined) {
      setCookie("userInfo", "1");
    } else {
    }
  }, []);

  useEffect(() => {
    if (cookies.exsercise === undefined) {
      setCookie("exsercise", [{ id: 0, isVaild: true }]);
    }
  }, []);

  return (
    <>
      {cookies.userInfo == 1 ? (
        <></>
      ) : (
        <h1>{cookies?.userInfo?.userName}님, 안녕하세요</h1>
      )}
      <Row justify={"center"}>
        <Col xs={16} md={7}>
          <StartBtn />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={23} md={19}>
          <Calender />
        </Col>
      </Row>
    </>
  );
};

export default Home;
