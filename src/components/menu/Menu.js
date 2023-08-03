import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { UserOutlined, HomeOutlined, FireOutlined } from "@ant-design/icons";

const Menu = () => {
  const [cookies] = useCookies();
  const navigator = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div>
        <ul
          style={{ listStyle: "none", float: "left" }}
          onClick={() => {
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
        </ul>
        <ul
          style={{ listStyle: "none", float: "left" }}
          onClick={() => {
            navigator("/");
          }}
        >
          <li>
            <HomeOutlined />
          </li>
          <li>홈</li>
        </ul>
        <ul
          style={{ listStyle: "none", float: "left" }}
          onClick={() => {
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
        </ul>
      </div>
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
