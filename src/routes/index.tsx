import { Box, Button, Flex, Stack, Text, Title } from '@mantine/core';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <Flex mih={'100vh'}>
      <Box
        pos={'fixed'}
        top={0}
        left={0}
        w={'100%'}
        h={'100%'}
        style={{
          background: `url(/home-bg.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Box mt={'auto'} bg="rgba(166, 164, 162, 0.9)" p={'xl'} w="100%">
        <Stack gap={'xl'}>
          <Stack ta={'center'} gap={'md'}>
            <Text fw={'bold'}>safety. convenience. budget.</Text>
            <Title>MetroHunt</Title>
            <Text size="sm">Uncover the comfort that leads to student achievement.</Text>
          </Stack>
          <Link
            to="/login"
            style={{
              display: 'block',
              width: '100%',
            }}
          >
            <Button color="black" size="lg" w={'100%'}>
              Get Started
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  ),
});
