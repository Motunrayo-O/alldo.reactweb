import { Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { BsInboxFill, BsPatchCheck } from "react-icons/bs";
import "./ItemList.css";
import { TodoTask } from "../entities/taskEntities";

interface Props {
  items: TodoTask[];
  title: string;
  iconType: "Unfinished" | "Completed";
}

const ItemList = ({ items, title, iconType }: Props) => {
  return (
    <>
      <Heading as="h4" size="sm" m={2}>
        {title}
      </Heading>
      <List spacing={3} className="list-group">
        {items.map((it) => (
          <ListItem key={it.id} h={6} className="item">
            <ListIcon
              as={iconType === "Unfinished" ? BsInboxFill : BsPatchCheck}
              color={iconType === "Unfinished" ? "purple.500" : "green.500"}
            />
            {it.title}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ItemList;
