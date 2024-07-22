import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchComponentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  left: 30px;
  top: 20px;
  transform: scale(1.8);
  color: rgb(113 113 122);
  transition: 0.5s;
  padding: 2px;

  &:hover {
    color: #fff;
  }
`;

export const SearchStyled = styled.div`
  text-align: left;
  position: relative;
  cursor: pointer;

  label {
    font-weight: 700;
  }

  input {
    padding: 1rem;
    --tw-border-opacity: 1;
    border-width: 1px;
    border-radius: 0.5rem;
    width: 100%;
    border: 1px solid rgb(156 163 175 / var(--tw-border-opacity));
  }

  .search-button {
    position: absolute;
    right: 0;
    padding: 9px;
    color: #000;

    svg {
      padding: 2px;
    }
  }

  .guide {
    --tw-text-opacity: 1;
    color: rgb(113 113 122 / var(--tw-text-opacity));
    padding-top: 5px;

    svg {
      margin: 0 5px;
    }
  }
`;
