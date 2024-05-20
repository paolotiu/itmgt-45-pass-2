import { Outlet, createFileRoute } from '@tanstack/react-router';
import Nav from '../components/Nav';
import { Box } from '@mantine/core';

export const Route = createFileRoute('/dashboard')({
  component: () => (
    <Box mih={'100vh'} w={'100%'}>
      <Outlet />
      <Nav />
    </Box>
  ),
});
