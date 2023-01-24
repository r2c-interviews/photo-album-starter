import React from "react";
import { Group, Header as MantineHeader, Burger, Title } from "@mantine/core";

export const Header = () => {
  return (
    <MantineHeader
      height={{ base: 50, md: 0 }}
      display={{ base: "flex", md: "none" }}
      sx={{ alignItems: "center" }}
    >
      <Group w="100%" position="apart" px="xs" align="center">
        <Title>Photos App</Title>
        <Burger opened={false} />
      </Group>
    </MantineHeader>
  );
};
