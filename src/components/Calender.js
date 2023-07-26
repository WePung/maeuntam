import React from "react";
import { Calendar, Modal } from "antd";
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
          return (
            <>
              <li
                key={item}
                onClick={() => {
                  info(item);
                }}
              >
                1
              </li>
            </>
          );
        })}
        {/* {listData.map((item) => {
          item.map((v) => {
            if (v?.year == value.$y) {
              if (v.month == value.$M) {
                console.log(v.month);
                console.log(v.day);
                console.log(value.$M);
                console.log(value.$D);
                if (v.day == value.$D + 18) {
                  console.log(v);
                  return (
                    <>
                      <li
                        key={v.day}
                        onClick={() => {
                          info(v);
                        }}
                      >
                        {v.title} : {v.number}회
                      </li>
                    </>
                  );
                }
              }
            }
          });
        })} */}
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
