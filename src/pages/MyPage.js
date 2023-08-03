import { Button, Col, Row, Modal, Avatar } from "antd";
import { EditOutlined, MehOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigator = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    removeCookie("exsercise");
    setCookie("exsercise", [{ id: 0, isVaild: true }]);
    setIsModalOpen(false);
    navigator("/");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <Row justify="center">
        <Col
          xs={9}
          md={2}
          style={{
            marginTop: "2rem",
          }}
        >
          <MehOutlined style={{ color: "red" }} />
          <ul style={{ listStyle: "none", color: "white" }}>
            <li>{cookies.userInfo.userName}</li>
            <li>운동 등급 : {rank(cookies.userInfo.level)}</li>
            <li>몸무게 : {cookies.userInfo.weight}kg</li>
          </ul>
        </Col>
      </Row>
      <Button
        onClick={() => {
          navigator("/update");
        }}
      >
        <EditOutlined />
        수정하기
      </Button>
      <Button danger onClick={showModal}>
        운동기록 삭제
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>정말 정보를 삭제 하시겠습니까?</p>
      </Modal>
    </div>
  );
};

export default MyPage;
