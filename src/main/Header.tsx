import React from "react";
import logo from "./AlldoLogo.jpg";
import { Flex, Image, Heading, Text, Spacer, HStack } from "@chakra-ui/react";
import { User } from "../entities/taskEntities";

interface Props {
  currentUser: User;
}

const Header = ({ currentUser }: Props) => {
  return (
    <Flex>
      <Image src={logo} alt="Alldo Logo" boxSize="100px" borderRadius="full" />
      <Spacer />
      <HStack>
        <Heading className="core-text mt-5">AllDo Productivity</Heading>
      </HStack>
      <Spacer />
      <HStack>
        <Text decoration="underline" className="core-text mx-2 mt-10">
          {currentUser.name}
        </Text>
      </HStack>
    </Flex>
  );
};

export default Header;
