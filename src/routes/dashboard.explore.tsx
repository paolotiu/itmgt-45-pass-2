import { createFileRoute } from '@tanstack/react-router';
import ListingCard from '../components/ListingCard';
import { Box, SimpleGrid, TextInput } from '@mantine/core';
import { IconMapPinFilled } from '@tabler/icons-react';
import { Listings } from '../data';

export const Route = createFileRoute('/dashboard/explore')({
  component: () => (
    <Box p={'lg'}>
      <Box
        w={'100%'}
        h={'100vh'}
        bg={'rgba(154, 154, 154, 0.5)'}
        pos={'fixed'}
        top={0}
        left={0}
        style={{
          zIndex: -1,
        }}
      />
      <Box mb={24}>
        <TextInput
          leftSection={<IconMapPinFilled size={14} />}
          placeholder="Ateneo de Manila University"
        />
      </Box>
      <SimpleGrid cols={2}>
        {Listings.map((listing) => (
          <ListingCard
            id={listing.id}
            key={listing.id}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            rating={listing.rating}
            image={listing.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  ),
});
