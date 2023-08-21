import React from "react";
import { Ability, useAbilities } from "./hooks/useAbilities";
import { CardList, Card } from "./styled";

interface IList {
  itemsPerPage: number;
  currentPage: number;
}

export const List: React.FC<IList> = ({ itemsPerPage, currentPage }) => {
  const { data } = useAbilities({
    limit: itemsPerPage,
    offset: currentPage * itemsPerPage,
  });

  return (
    <CardList>
      {data?.results?.map((item: Ability) => (
        <Card key={item?.name}>{item?.name}</Card>
      ))}
    </CardList>
  );
};
