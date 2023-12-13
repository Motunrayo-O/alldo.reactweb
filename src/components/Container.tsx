import { Grid, GridItem } from "@chakra-ui/react";
import ItemList from "./ItemList";
import BugForm from "./BugForm";
import useTasks from "../hooks/useTasks";

const Container = () => {
  const allTasks = useTasks();
  return (
    <Grid
      m={2}
      h="100vh"
      templateAreas={`"unfinished input"
                        "completed input"`}
      gap="2"
      gridTemplateColumns={"1fr 450px"}
    >
      <GridItem bg="orange.100" area={"unfinished"}>
        <ItemList
          items={allTasks.filter((t) => !t.isCompleted)}
          title="Unfinished Items"
          iconType="Unfinished"
        />
      </GridItem>
      <GridItem bg="pink.100" area={"completed"}>
        <ItemList
          items={allTasks.filter((t) => t.isCompleted)}
          title="Completed Items"
          iconType="Completed"
        />
      </GridItem>
      <GridItem bg="green.300" area={"input"}>
        <BugForm />
      </GridItem>
    </Grid>
  );
};

export default Container;
