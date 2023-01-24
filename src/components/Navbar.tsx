import {
  Navbar as MantineNavbar,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";

export const Navbar = () => {
  return (
    <MantineNavbar width={{ base: 300 }}>
      <MantineNavbar.Section>
        <Title>Photos App</Title>
      </MantineNavbar.Section>

      <MantineNavbar.Section
        grow
        mt="md"
        component={ScrollArea}
        mx="-xs"
        px="xs"
      >
        <Stack>
          {[1, 2, 3, 4, 5].map((number) => (
            <span>Album {number}</span>
          ))}
        </Stack>
      </MantineNavbar.Section>

      <MantineNavbar.Section>
        <div>Navigation Footer</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
