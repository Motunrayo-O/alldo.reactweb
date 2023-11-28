import React from "react";
import logo from "./AlldoLogo.jpg";
import { HStack, Image, Heading, Text } from "@chakra-ui/react";

interface Props {
  currentUser: string;
}

const Header = ({ currentUser }: Props) => {
  return (
    <HStack spacing={4}>
      <Image src={logo} alt="Alldo Logo" boxSize="100px" borderRadius="full" />
      <Heading>AllDo Productivity</Heading>
      <Text>{currentUser}</Text>
    </HStack>
  );
};

export default Header;
