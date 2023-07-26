import { Button, Form, Input, Select, Steps } from "antd";
import React, { useEffect, useState } from "react";
import Menu from "../components/menu/Menu";
import Stopwatch from "../components/Stopwatch";
import { typeOfExsercise } from "../utils/Exsercise/typeOfExsercise";
import { useNavigate } from "react-router-dom";
import { Chest } from "../utils/Exsercise/Chest";
import { Aerobic } from "../utils/Exsercise/Aerobic";
import { Arm } from "../utils/Exsercise/Arm";
import { Under } from "../utils/Exsercise/Under";
import { Stomach } from "../utils/Exsercise/Stomach";
import { useCookies } from "react-cookie";
import moment from "moment";

const TodoExcersise = () => {
  const [id, setId] = useState(1);
  const navigator = useNavigate();
  const [isType, setIsType] = useState(false);
  const [isExsercise, setIsExsercise] = useState(false);
  const [role, setRole] = useState(null);
  const [time, setTime] = useState(0);
  const [timeToNum, setTimeToNum] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [input, setInput] = useState(cookies.exsercise);
  const [info, setInfo] = useState();

  useEffect(() => {
    setTime(0);
  }, [role]);

  const onFinish = (values) => {
    if (!isType) {
      alert("종류를 정해주세요");
    } else if (!isExsercise) {
      alert("운동을 정해주세요");
    } else if (time === 0) {
      alert("운동을 시작해주세요");
    } else {
      // const body = [
      //   {
      //     id: id,
      //     info: {
      //       id: id,
      //       year: moment().format("YYYY"),
      //       month: moment().format("M"),
      //       day: moment().format("D"),
      //       titme: values.exsercise,
      //       number: time,
      //     },
      //   },
      // ];
      const body = [
        {
          id: id,
          year: moment().format("YYYY"),
          month: moment().format("M"),
          day: moment().format("D"),
          titme: values.exsercise,
          number: time,
        },
      ];
      setInput([cookies.exsercise]);
      removeCookie("exsercise");
      setCookie("exsercise", input.concat(body));
    }
  };

  const exsercise = (role) => {
    if (role === "유산소") {
      return Aerobic.filter((t) => {
        if (t.level <= cookies.userInfo.level) {
          return t;
        }
      });
    } else if (role === "가슴") {
      return Chest.filter((t) => {
        if (t.level <= cookies.userInfo.level) {
          return t;
        }
      });
    } else if (role === "팔") {
      return Arm.filter((t) => {
        if (t.level <= cookies.userInfo.level) {
          return t;
        }
      });
    } else if (role === "하체") {
      return Under.filter((t) => {
        if (t.level <= cookies.userInfo.level) {
          return t;
        }
      });
    } else if (role === "복부") {
      return Stomach.filter((t) => {
        if (t.level <= cookies.userInfo.level) {
          return t;
        }
      });
    }
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Menu />
        <label>종류</label>
        <Form.Item name="typeOfExsercise">
          <Select
            defaultValue="운동 종류를 선택해주세요"
            onChange={(e) => {
              setIsType(true);
              setRole(e);
            }}
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={typeOfExsercise}
          />
        </Form.Item>
        {!role ? (
          <></>
        ) : (
          <Form.Item name="exsercise">
            <Select
              defaultValue="운동 종류를 선택해주세요"
              onChange={(e) => {
                setIsExsercise(true);
                const id = exsercise(role).map((i) => {
                  if (i.label == e) {
                    setInfo(i.id);
                  }
                });
                if (e == "플랭크" || e == "러닝") {
                  setTimeToNum(false);
                } else {
                  setTimeToNum(true);
                }
              }}
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={exsercise(role)}
            />
          </Form.Item>
        )}
        {isExsercise ? (
          <>
            <div>
              <h1>{exsercise(role)[info]?.label}</h1>
              <p>{exsercise(role)[info]?.info}</p>
              <iframe
                src={exsercise(role)[info]?.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <Steps direction="vertical" items={exsercise(role)[info].step} />
            </div>
            {!timeToNum ? (
              <Stopwatch time={time} setTime={setTime} />
            ) : (
              <>
                <Form.Item name="number">
                  <Input
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    placeholder="횟수를 입력하세요"
                  />
                </Form.Item>
              </>
            )}
          </>
        ) : (
          <></>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TodoExcersise;
