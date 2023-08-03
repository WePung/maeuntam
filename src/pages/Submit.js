import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  levelValidate,
  validateNickname,
  validateWeight,
} from "../utils/SubmitValidator";
import { MehOutlined } from "@ant-design/icons";

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
  return (
    <Row justify="center">
      <Col>
        <Form onFinish={onFinish}>
          <label style={{ color: "white" }}>이름</label>
          <Form.Item name="userName" rules={[{ validator: validateNickname }]}>
            <Input
              onChange={() => {
                setIsUserName(true);
              }}
              placeholder="닉네임을 기입해주세요"
            />
          </Form.Item>
          <label style={{ color: "white" }}>운동 등급</label>
          <Form.Item name="level" rules={[{ validator: levelValidate }]}>
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
          <label style={{ color: "white" }}>몸무게</label>
          <Form.Item name="weight" rules={[{ validator: validateWeight }]}>
            <Input
              onChange={() => {
                setIsUserName(true);
              }}
              placeholder="몸무게를 기입해주세요"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              등록
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Submit;
