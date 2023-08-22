import { useEffect, useState } from "react";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useAbilities } from "../../components/list/hooks/useAbilities";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  const [count, setCount] = useState(0);

  const { data } = useAbilities({
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
  });

  useEffect(() => {
    setCount(data?.count ?? 0);
  }, [data]);

  return (
    <div>
      <Pagination
        itemsPerPage={itemsPerPage}
        total={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <List items={data?.results ?? []} />
    </div>
  );
};
