import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import ItemList from "./ItemList";

const Container = () => {
  let unfinishedItems = [
    "Buy milk",
    "Add margin",
    "Cook Peanuts",
    "Collect Child",
  ];

  let completedItems = [
    "Phone president",
    "Call Tyrone",
    "Pick up your feelings",
  ];
  return (
    <Grid
      m={2}
      h="100vh"
      templateAreas={`"unfinished input"
                        "completed input"`}
      gap="2"
    >
      <GridItem bg="orange.100" area={"unfinished"}>
        <ItemList
          items={unfinishedItems}
          title="Unfinished Items"
          iconType="Unfinished"
        />
      </GridItem>
      <GridItem bg="pink.100" area={"completed"}>
        <ItemList
          items={completedItems}
          title="Completed Items"
          iconType="Completed"
        />
      </GridItem>
      <GridItem bg="green.300" area={"input"}>
        input
      </GridItem>
    </Grid>
  );
};

export default Container;
