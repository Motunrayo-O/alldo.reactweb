import { Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsInboxFill, BsPatchCheck } from "react-icons/bs";
import React from "react";

interface Props {
  items: string[];
  title: string;
  iconType: "Unfinished" | "Completed";
}

const ItemList = ({ items, title, iconType }: Props) => {
  return (
    <>
      <Heading as="h4" size="sm" m={2}>
        {title}
      </Heading>
      <List spacing={3}>
        {items.map((it) => (
          <ListItem>
            <ListIcon
              as={iconType == "Unfinished" ? BsInboxFill : BsPatchCheck}
              color={iconType == "Unfinished" ? "purple.500" : "green.500"}
            />
            {it}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ItemList;
