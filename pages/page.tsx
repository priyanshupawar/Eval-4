import { Box, Heading, VStack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { fetchUsers} from 
import NextLink from 'next/link';
import {User} from 
interface PageProps {
  users: User[];
}

const Pages = ({ users }: PageProps) => {
  console.log(users)
  return (
    <Box>
      <Box bg="brand.500" py={4} mb={8}>
        <Heading textAlign="center" color="white">
          People
        </Heading>
      </Box>
      <VStack spacing={4} align="stretch">
        {users.length > 0 ? (
          users.map((user) => (
            <NextLink key={user.id} href={`/people/${user.id}`}>
              <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  bg: 'gray.100',
                }}
                cursor="pointer"
              >
                <Heading size="md">{user.name}</Heading>
                <Heading size="sm" color="gray.500">
                  {user.email}
                </Heading>
              </Box>
            </NextLink>
          ))
        ) : (
          <Box>No users found.</Box>
        )}
      </VStack>
    </Box>
  );
};

export default Pages;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const users = await fetchUsers();

  return {
    props: { users },
  };
};