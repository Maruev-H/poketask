import { useEffect, useState } from "react";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useAbilities } from "../../components/list/hooks/useAbilities";

export const HomePage = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  const [count, setCount] = useState(0)
 
  const { data } = useAbilities({
    limit: itemsPerPage,
    offset: currentPage * itemsPerPage,
  });

  useEffect(() => {
    setCount(data?.count ?? 0)
  }, [data])

  return (
    <div>
      <List items={data?.results ?? []}/>
      <Pagination
        itemsPerPage={itemsPerPage}
        total={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
