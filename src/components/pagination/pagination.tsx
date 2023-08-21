import React from "react";
import styled from "@emotion/styled";
import { PaginationContainer } from "./styled";

interface PaginationProps<T> {
  total: number;
  itemsPerPage?: number;
  maxPageItems?: number;
  currentPage: number;
  setCurrentPage: (arg: number) => void;
}

export const Pagination = <T extends object>({
  total,
  itemsPerPage = 10,
  maxPageItems = 3,
  currentPage,
  setCurrentPage,
}: PaginationProps<T>) => {
  const totalPages = Math.floor(total / itemsPerPage);
  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages > maxPageItems) {
      const leftOffset = Math.floor(maxPageItems / 2);
      const rightOffset = Math.floor(maxPageItems / 2);
      let start = currentPage - leftOffset;
      let end = currentPage + rightOffset;

      if (start < 1) {
        end += Math.abs(start) + 1;
        start = 1;
      }

      if (end > totalPages) {
        start -= end - totalPages;
        end = totalPages;
      }

      if (start > 1) {
        pageNumbers.push(
          <li key="1">
            <button onClick={() => handlePageChange(1)}>1</button>
          </li>
        );
        if (start > 2) {
          pageNumbers.push(<li key="dots1">...</li>);
        }
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? "active" : undefined}>
            <button onClick={() => handlePageChange(i)}>{i}</button>
          </li>
        );
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pageNumbers.push(<li key="dots2">...</li>);
        }
        pageNumbers.push(
          <li key={totalPages}>
            <button onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </button>
          </li>
        );
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? "active" : undefined}>
            <button onClick={() => handlePageChange(i)}>{i}</button>
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <>
      <PaginationContainer>{renderPageNumbers()}</PaginationContainer>
    </>
  );
};
