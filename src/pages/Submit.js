import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  console.log(cookies);
  const navigator = useNavigate();
  const [isUserName, setIsUserName] = useState(false);
  const [isRank, setIsRank] = useState(false);
  const onFinish = (values) => {
    if (!isUserName || values.userName === "") {
      alert("이름을 적어주세요");
    } else if (!isRank) {
      alert("등급을 정해주세요");
    } else {
      console.log(values);
      removeCookie("userInfo");
      setCookie("userInfo", values);
      console.log(cookies);
      navigator("/");
    }
  };
  // const addItem = () => {
  //   const newItem = `item${items.length + 1}`;
  //   setItems((prevItems) => [...prevItems, newItem]);
  // };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name="userName">
          <Input
            onChange={() => {
              setIsUserName(true);
            }}
            placeholder="닉네임을 기입해주세요"
          />
        </Form.Item>
        <Form.Item name="level">
          <Select
            onChange={() => {
              setIsRank(true);
            }}
            placeholder="운동 등급을 정해주세요"
            style={{
              width: 200,
            }}
            options={[
              {
                label: "초급",
                value: "1",
              },
              {
                label: "중급",
                value: "2",
              },
              {
                label: "상급",
                value: "3",
              },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Submit;
