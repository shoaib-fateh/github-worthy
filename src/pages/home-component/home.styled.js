import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const TextColor = "#71717a";

export const HomeComponentStyled = styled.div`
  color: #fff;
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderStyled = styled.header`
  padding: 50px 0;
`;

export const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: dashed 3px ${TextColor};
  font-size: 20px;
  color: ${TextColor};
  background: transparent;
  margin: 0 10px;
  cursor: pointer;
`;

export const LinkStyled = styled(Link)`
  color: ${TextColor};
  text-decoration: none;
  padding: 5px;
  margin: 0 3px;
  font-size: 20px;
  &:hover {
    color: #c3c3c7;
  }
`;

export const BodyStyled = styled.div`
  display: flex;
  transition: 1s;
  padding: 0 0 30px;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  & .username {
    font-size: 8rem;
    cursor: default;
  }

  img {
    border-radius: 100%;
    width: 130px;
    height: 130px;
  }
`;

export const FootStyled = styled.div`
  max-width: 950px;
  text-align: center;
  margin: auto;

  & .description {
    color: ${TextColor};
    font-size: 18px;
  }

  & .activities {
    color: ${TextColor};
    font-size: 14px;
    padding: 20px;
  }
`;
