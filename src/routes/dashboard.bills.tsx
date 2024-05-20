import { Box, Button, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import { Listings } from '../data';
import { IconChevronRight } from '@tabler/icons-react';

export const Route = createFileRoute('/dashboard/bills')({
  component: Bills,
});

const PriceFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
});
function Bills() {
  return (
    <Flex direction={'column'} mih={'100vh'}>
      <Box p={'lg'}>
        <Box
          w="100%"
          h={'100vh'}
          pos={'absolute'}
          top={0}
          left={0}
          style={{
            backgroundImage: `url(/listing-1.jpeg)`,
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        />
        <Title c={'#FFF'}> My Bills</Title>
      </Box>
      <Paper mt={'auto'} mb={'75px'} radius={'0'} bg={'#F9F9F9'} py={'lg'}>
        <Paper p={'lg'} radius={'md'} mt={'lg'}>
          <Flex justify={'space-between'} align={'center'}>
            <Stack gap={0}>
              <Text ta={'center'} c={'gray'} fz={'sm'} fw={'bold'}>
                TOTAL BALANCE
              </Text>
              <Title c={'red'}>{PriceFormatter.format(Listings[0].price)}</Title>
            </Stack>
            <Stack gap={0}>
              <Text ta={'center'} c={'gray'} fz={'sm'} fw={'bold'}>
                DUE DATE
              </Text>
              <Title fz={'h3'}> 05/30/2024</Title>
            </Stack>
          </Flex>
        </Paper>
        <Flex justify={'space-around'} pb={'4rem'} pt={'2rem'}>
          <Button size="lg">Pay Now</Button>
          <Button size="lg"> Remind Me</Button>
        </Flex>
        <Flex
          style={{
            borderBottom: '1px solid #E0E0E0',
          }}
          p={'sm'}
          bg={'white'}
          justify={'space-between'}
        >
          <Text>Current Bills Breakdown</Text>
          <IconChevronRight size={16} />
        </Flex>
        <Flex
          style={{
            borderBottom: '1px solid #E0E0E0',
          }}
          p={'sm'}
          bg={'white'}
          justify={'space-between'}
        >
          <Text>Bills Payment History</Text>
          <IconChevronRight size={16} />
        </Flex>
        <Flex p={'sm'} bg={'white'} justify={'space-between'}>
          <Text>Housing Contract</Text>
          <IconChevronRight size={16} />
        </Flex>
      </Paper>
    </Flex>
  );
}
