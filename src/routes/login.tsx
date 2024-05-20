import { Box, Button, Center, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import { Link, createFileRoute } from '@tanstack/react-router';
import { IconUser, IconLock, IconArrowRight } from '@tabler/icons-react';

export const Route = createFileRoute('/login')({
  component: () => (
    <Box mih={'100vh'}>
      <Box
        pos={'fixed'}
        top={0}
        left={0}
        w={'100%'}
        h={'100%'}
        style={{
          background: `url(/login-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      <Box w={'100%'} h={'100vh'} bg={'rgba(166, 164, 162, 0.9)'} px={'xl'} py={'xl'}>
        <Center mt={'10rem'}>
          <Title size={'3rem'}>MetroHunt</Title>
        </Center>
        <Stack align="center" mt={'2rem'} gap={'1rem'}>
          <Text>Sign in to your account</Text>
          <TextInput placeholder="Enter your username" leftSection={<IconUser />} w="100%" />
          <PasswordInput placeholder="Enter your password" leftSection={<IconLock />} w="100%" />
        </Stack>
        <Center mt={'lg'}>
          <Link to="/dashboard/explore">
            <Button rightSection={<IconArrowRight />}>Sign In</Button>
          </Link>
        </Center>
      </Box>
    </Box>
  ),
});
