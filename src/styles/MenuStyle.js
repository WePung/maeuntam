import { styled } from "styled-components";

export const MenuWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 50px;
  background: #282c34;
  position: sticky;
  bottom: 30px;
  z-index: 10;
`;
export const CurrentClick = styled.ul`
  list-style: none;
  float: left;
  transition: all ease 0.5s 0s;
  color: ${(props) => (!props.value ? "white" : "#6666FF")};
`;
