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
  justify-content: center;
  gap: 2rem;
  justify-content: center;
`;


interface PageButtonProps {
  isActive?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem 1rem;
  border-radius: 5px;

  background-color: ${({ isActive }) => (isActive ? "#4172f6" : "#f2f2f2")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.9)};

  &:hover {
    opacity: 1;
  }
`;
