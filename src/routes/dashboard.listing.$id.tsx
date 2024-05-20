import { Link, createFileRoute, redirect } from '@tanstack/react-router';
import { Listings } from '../data';
import { Box, Button, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import { useState } from 'react';

export const Route = createFileRoute('/dashboard/listing/$id')({
  loader: ({ params }) => {
    const listing = Listings.find((l) => {
      return l.id === parseInt(params.id);
    });

    if (!listing) {
      throw redirect({
        to: '/dashboard/explore',
      });
    }

    return {
      listing,
    };
  },
  component: Listing,
});

function Listing() {
  const { listing } = Route.useLoaderData();

  const [tab, setTab] = useState('about');
  const [l, setL] = useState(listing);

  if (l.rented) {
    return <RentedListing l={l} />;
  }
  return (
    <Flex direction={'column'} mih={'100vh'}>
      <Box
        w="100%"
        h={'100vh'}
        pos={'absolute'}
        top={0}
        left={0}
        style={{
          backgroundImage: `url(${l?.image})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />
      <Stack
        mt={'auto'}
        py={'md'}
        px={'lg'}
        bg="white"
        mb={75}
        style={{
          borderRadius: '2rem 2rem 0 0',
        }}
      >
        <Box>
          <Title>{l.title}</Title>
          <Text>{l.description}</Text>
          <Flex align={'center'} gap={8}>
            <IconStarFilled size={20} />
            <Text fw={'bold'} fz="lg">
              {l.rating}
            </Text>
          </Flex>
        </Box>
        <Flex align={'center'} justify={'center'} gap={'md'} my={8}>
          <Button
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            size="md"
            variant={tab === 'about' ? '' : 'white'}
            onClick={() => {
              setTab('about');
            }}
          >
            About
          </Button>
          <Button
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            size="md"
            variant={tab === 'features' ? '' : 'white'}
            onClick={() => {
              setTab('features');
            }}
          >
            Features
          </Button>
          <Button
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            size="md"
            variant={tab === 'reviews' ? '' : 'white'}
            onClick={() => {
              setTab('reviews');
            }}
          >
            Reviews
          </Button>
        </Flex>
        <Box>
          <Title tt={'capitalize'} order={3}>
            {tab}
          </Title>
          <Text
            style={{
              whiteSpace: 'break-spaces',
            }}
            mt={4}
          >
            {l[tab as keyof typeof l]}
          </Text>
        </Box>
        <Flex gap={'md'} justify={'center'}>
          <Button size="md">Contact Landlord</Button>
          <Button
            size="md"
            onClick={() => {
              setL({
                ...l,
                rented: true,
              });
            }}
          >
            Rent +
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}

function RentedListing({ l }: { l: (typeof Listings)[number] }) {
  const [tab, setTab] = useState('contact');
  return (
    <Flex direction={'column'} mih={'100vh'}>
      <Box
        w="100%"
        h={'100vh'}
        pos={'absolute'}
        top={0}
        left={0}
        style={{
          backgroundImage: `url(${l?.image})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />
      <Stack
        mt={'auto'}
        py={'md'}
        px={'lg'}
        bg="white"
        mb={75}
        style={{
          borderRadius: '2rem 2rem 0 0',
        }}
      >
        <Box>
          <Title>{l.title}</Title>
          <Text>{l.description}</Text>
          <Flex align={'center'} gap={8}>
            <IconStarFilled size={20} />
            <Text fw={'bold'} fz="lg">
              {l.rating}
            </Text>
          </Flex>
        </Box>
        <Flex align={'center'} justify={'center'} gap={'md'} my={8}>
          <Button
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            size="md"
            variant={tab === 'contact' ? '' : 'white'}
            onClick={() => {
              setTab('contact');
            }}
          >
            Contact
          </Button>
          <Button
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            size="md"
            variant={tab === 'features' ? '' : 'white'}
            onClick={() => {
              setTab('features');
            }}
          >
            Features
          </Button>
          <Button
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            size="md"
            variant={tab === 'rules' ? '' : 'white'}
            onClick={() => {
              setTab('rules');
            }}
          >
            Rules
          </Button>
        </Flex>
        <Box>
          <Title tt={'capitalize'} order={3}>
            {tab}
          </Title>
          <Text
            style={{
              whiteSpace: 'break-spaces',
            }}
            mt={4}
          >
            {l[tab as keyof typeof l]}
          </Text>
        </Box>
        <Paper radius="md" shadow="md" p={'lg'}>
          <Flex justify={'space-between'}>
            <Stack gap={0}>
              <Text fz={'md'} fw={'bold'}>
                BILL: ₱{l.price}
              </Text>
              <Text fz={'xs'} c={'gray'}>
                Due 05/30/2024
              </Text>
            </Stack>
            <Button component={Link} to="/dashboard/bills" size="md">
              My Bills
            </Button>
          </Flex>
        </Paper>
      </Stack>
    </Flex>
  );
}
