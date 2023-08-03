// 닉네임 유효성 검사
// 길이 2~20, 영어, 한국어, 숫자
export const validateNickname = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("닉네임은 필수 항목입니다."));
  }
  if (/\s/.test(value)) {
    return Promise.reject(new Error("닉네임은 공백을 포함 할 수 없습니다"));
  }
  const nicknameLength = value.length;
  if (nicknameLength < 2 || nicknameLength >= 20) {
    return Promise.reject(new Error("닉네임은 필수 항목입니다."));
  }
  return Promise.resolve();
};
//역할 선택
export const levelValidate = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("등급를 선택해주세요"));
  }
  return Promise.resolve();
};
//몸무게 유효성 검사
export const validateWeight = (_, value) => {
  const regExp = /^[0-9]+$/;
  if (!value) {
    return Promise.reject(new Error("몸무게는 필수 항목입니다."));
  }
  if (!value.match(regExp)) {
    return Promise.reject(new Error("숫자로만 이루어진 나이 형식이 아닙니다."));
  }
  return Promise.resolve();
};
