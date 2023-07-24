import React, { useEffect } from "react";
import { Calendar, Empty, Modal } from "antd";
// import { getListData } from "../utils/DummyExDate";
import { useCookies } from "react-cookie";

export const getListData = (value, item) => {
  const listData = [item];
  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const info = (item) => {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        {item.content} : {item.number}
      </div>
    ),
    onOk() {},
  });
};
const Calender = () => {
  const [cookies, setCookie] = useCookies();

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value, cookies.exsercise);
    return (
      <ul className="events">
        {listData.map((item) => {
          if (item?.year == value.$y) {
            if (item.month == value.$M) {
              if (item.day == value.$D) {
                console.log(item);
                return (
                  <>
                    <li
                      key={item.day}
                      onClick={() => {
                        info(item);
                      }}
                    >
                      {item.title} : {item.number}회
                    </li>
                  </>
                );
              }
            }
          }
        })}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default Calender;
