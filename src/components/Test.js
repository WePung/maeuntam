import React from "react";
import { Calendar, Modal, theme } from "antd";
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const info = (item) => {
  const e = () => {
    if (item.title == "플랭크" || "런닝") {
      return (
        <div>
          {item.title} : {item.number}초
        </div>
      );
    } else {
      return (
        <div>
          {item.title} : {item.number}회
        </div>
      );
    }
  };
  Modal.info({
    title: "This is a notification message",
    content: e(),
    onOk() {},
  });
};
const Test = () => {
  const { token } = theme.useToken();
  const wrTesterStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div>
      <Calendar
        onClick={() => {
          info();
        }}
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};
export default Test;
