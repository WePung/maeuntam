import { styled } from "styled-components";

export const MenuWrapper = styled.div``;
export const CurrentClick = styled.ul`
  list-style: none;
  float: left;
  transition: all ease 0.5s 0s;
  color: ${(props) => (!props.value ? "black" : "#6666FF")};
`;
