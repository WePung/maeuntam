import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const UpdateUserInfo = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigator = useNavigate();
  const [userName, setUserName] = useState(cookies.userInfo.userName);
  const [level, setLevel] = useState(cookies.userInfo.level);
  const [weight, setWeight] = useState(cookies.userInfo.weight);
  console.log(userName);
  const onFinish = (values) => {
    console.log(values);
    removeCookie("userInfo");
    setCookie("userInfo", values);
    navigator("/");
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name="userName">
          <Input placeholder={userName} value={userName} />
        </Form.Item>
        <Form.Item name="level">
          <Select
            placeholder={level}
            value={level}
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
        <Form.Item name="weight">
          <Input placeholder={weight} value={weight} />
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
