import styled from "@emotion/styled";

export const Wrapper = styled.div``;


export const PageNumber = styled.span`
  display: inline-block;
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f2f2f2;
`;


export const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;

  li {
    cursor: pointer;
    padding: 0.1rem 0.5rem;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.1;
    }
  }

  button {
    background: none;
    border: none;
  }

  .arrow {
    margin: 0px 10px;
    background: none;
    border: none;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .page {
    width: 30px;
    height: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #d2d5da;
    background: transparent;
    border: none;
  }

  .active {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #4172f6;
    color: white;
  }
`;
