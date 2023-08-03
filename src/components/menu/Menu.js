import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";

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
        <Button
          onClick={() => {
            if (cookies.userInfo != 1) {
              navigator("/todo");
            } else {
              showModal();
            }
          }}
        >
          운동 시작
        </Button>
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
              showModal();
            }
          }}
        >
          프로필
        </Button>
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
