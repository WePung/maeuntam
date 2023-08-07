import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { UserOutlined, HomeOutlined, FireOutlined } from "@ant-design/icons";
import { CurrentClick, MenuWrapper } from "../../styles/MenuStyle";

const Menu = () => {
  const [cookies] = useCookies();
  const navigator = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nowHome, setNowHome] = useState(false);
  const [nowTodo, setNowTodo] = useState(false);
  const [nowProfile, setNowProfile] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigator("/submit");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Outlet />
      <MenuWrapper>
        <Row>
          <Col md={15} xs={8}>
            <CurrentClick
              value={nowTodo}
              onClick={() => {
                setNowTodo(true);
                setNowHome(false);
                setNowProfile(false);
                if (cookies.userInfo != 1) {
                  navigator("/todo");
                } else {
                  showModal();
                }
              }}
            >
              <li>
                <FireOutlined />
              </li>
              <li>운동 시작</li>
            </CurrentClick>
          </Col>
          <Col md={15} xs={8}>
            <CurrentClick
              value={nowHome}
              onClick={() => {
                setNowTodo(false);
                setNowHome(true);
                setNowProfile(false);
                navigator("/");
              }}
            >
              <li>
                <HomeOutlined />
              </li>
              <li>홈</li>
            </CurrentClick>
          </Col>
          <Col md={15} xs={8}>
            <CurrentClick
              value={nowProfile}
              onClick={() => {
                setNowTodo(false);
                setNowHome(false);
                setNowProfile(true);
                if (cookies.userInfo != 1) {
                  navigator("/profile");
                } else {
                  showModal();
                }
              }}
            >
              <li>
                <UserOutlined />
              </li>
              <li>프로필</li>
            </CurrentClick>
          </Col>
        </Row>
      </MenuWrapper>
      <Modal
        title="프로필 기입 후 사용 가능합니다."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>프로필 기입 화면으로 이동하시겠습니까?</p>
      </Modal>
    </div>
  );
};

export default Menu;
