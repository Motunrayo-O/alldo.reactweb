import {
  HStack,
  Heading,
  Icon,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BsBugFill } from "react-icons/bs";

const BugForm = () => {
  let parentId = 5;
  return (
    <Box ml={3}>
      <HStack>
        <Icon as={BsBugFill} color="red.700" />
        <Heading as="h3" size="sm" mt={3} color="red.700">
          Bug
        </Heading>
      </HStack>

      <form>
        <FormControl mb={4}>
          <FormLabel mb={-0.4}>Title</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel mb={-0.4}>Description</FormLabel>
          <Textarea />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel mb={-0.4}>Affected version</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel mb={-0.4}>Affected users</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel mb={-0.4}>Severity</FormLabel>
          <Select placeholder="Select option"></Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel mb={-0.4}>Attach to parent</FormLabel>
          <Select>
            <option value="dna">Do not attach</option>
            <option value={parentId}>Select parent...</option>
          </Select>
        </FormControl>

        <Checkbox mb={10}>Completed</Checkbox>

        <Stack>
          <Button colorScheme="blue" variant="outline">
            Attach Screenshot(s)
          </Button>
          <Button colorScheme="blue">Save</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default BugForm;
