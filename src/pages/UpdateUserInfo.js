import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const UpdateUserInfo = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigator = useNavigate();
  const [isUserName, setIsUserName] = useState(false);
  const [isRank, setIsRank] = useState(false);
  const onFinish = (values) => {
    if (!isUserName || values.userName === "") {
      alert("이름을 적어주세요");
    } else if (!isRank) {
      alert("등급을 정해주세요");
    } else {
      removeCookie("userInfo");
      setCookie("userInfo", values);
      navigator("/");
    }
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name="userName">
          <Input
            placeholder="이름을 재설정해주세요"
            onChange={() => {
              setIsUserName(true);
            }}
          />
        </Form.Item>
        <Form.Item name="level">
          <Select
            onChange={() => {
              setIsRank(true);
            }}
            defaultValue="등급을 재설정해주세요"
            style={{
              width: 200,
            }}
            options={[
              {
                label: "초급",
                value: 1,
              },
              {
                label: "중급",
                value: 2,
              },
              {
                label: "상급",
                value: 3,
              },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            수정
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateUserInfo;
