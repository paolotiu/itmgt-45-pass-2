import { Box, Flex, Stack, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { IconSearch, IconUsers, IconHome, IconHeart, IconUserCircle } from '@tabler/icons-react';

const Nav = () => {
  return (
    <Box pos={'fixed'} bottom={0} left={0} p={'md'} bg={'rgba(166, 164, 162)'} w={'100%'}>
      <Flex justify={'space-between'}>
        <Link
          to="/dashboard/explore"
          style={{
            all: 'unset',
          }}
        >
          <Stack c="black" gap={2} ta={'center'} td={'none'} align="center">
            <IconSearch />
            <Text size="xs">Explore</Text>
          </Stack>
        </Link>
        <Link
          to="/dashboard/explore"
          style={{
            all: 'unset',
          }}
        >
          <Stack c="black" gap={2} ta={'center'} td={'none'} align="center">
            <IconUsers />
            <Text size="xs">Roomates</Text>
          </Stack>
        </Link>
        <Link
          to="/dashboard/explore"
          style={{
            all: 'unset',
          }}
        >
          <Stack c="black" gap={2} ta={'center'} td={'none'} align="center">
            <IconHome />
            <Text size="xs">Home</Text>
          </Stack>
        </Link>
        <Link
          to="/dashboard/explore"
          style={{
            all: 'unset',
          }}
        >
          <Stack c="black" gap={2} ta={'center'} td={'none'} align="center">
            <IconHeart />
            <Text size="xs">Favorites</Text>
          </Stack>
        </Link>
        <Link
          to="/dashboard/explore"
          style={{
            all: 'unset',
          }}
        >
          <Stack c="black" gap={2} ta={'center'} td={'none'} align="center">
            <IconUserCircle />
            <Text size="xs">Profile</Text>
          </Stack>
        </Link>
      </Flex>
    </Box>
  );
};

export default Nav;
