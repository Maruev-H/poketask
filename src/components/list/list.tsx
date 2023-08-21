import React from "react";
import { Ability } from "./hooks/useAbilities";
import { CardList, Card } from "./styled";

interface IList {
  items: Ability[]
}

export const List: React.FC<IList> = ({ items }) => {


  return (
    <CardList>
      {items?.map((item: Ability) => (
        <Card key={item?.name}>{item?.name}</Card>
      ))}
    </CardList>
  );
};
