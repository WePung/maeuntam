import React from "react";
import { Calendar, Modal } from "antd";
import { useCookies } from "react-cookie";

export const getListData = (item) => {
  const listData = [item];
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
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
    const listData = getListData(cookies.exsercise);
    return (
      <ul className="events">
        {listData.map((item) => {
          const test = item?.map((v) => {
            if (v.year == value.$y) {
              if (v.month - 1 == value.$M) {
                if (v.day == value.$D) {
                  return (
                    <>
                      <li
                        key={v}
                        onClick={() => {
                          console.log(v);
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
          return <>{test}</>;
        })}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} fullscreen={false} />;
};
export default Calender;
