import { Box, Card, Chip, Flex, Image, Text } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

type Props = {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  id: string | number;
};

const CurrencyFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
});

const ListingCard = (p: Props) => {
  return (
    <Card
      component={Link}
      to={'/dashboard/listing/' + p.id}
      p={'xs'}
      shadow="sm"
      withBorder
      h={220}
      radius={'md'}
    >
      <Image src={p.image} w={'100%'} h={100} flex={'none'} radius={'sm'} />
      <Chip
        pos={'absolute'}
        top={10}
        right={10}
        styles={{
          label: {
            padding: '0.5rem',
            background: 'rgba(0, 0, 0, .5)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            fontSize: 14,
          },
        }}
      >
        <Flex align={'center'} gap={'xs'}>
          <IconStarFilled size={8} />
          {p.rating}
        </Flex>
      </Chip>
      <Box mt={10}>
        <Text fw={'bold'} lh={1.1} size="sm">
          {p.title}
        </Text>
        <Text mt={0} size="xs">
          {p.description}
        </Text>
      </Box>
      <Box mt={24} fw={'bold'}>
        {CurrencyFormatter.format(p.price)}
      </Box>
    </Card>
  );
};

export default ListingCard;
