import { useState } from "react";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";

export const HomePage = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  return (
    <div>
      <List itemsPerPage={itemsPerPage} currentPage={currentPage}/>
      <Pagination
        itemsPerPage={itemsPerPage}
        total={358}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
