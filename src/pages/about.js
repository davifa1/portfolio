import { Box, HStack, Text, Button, Avatar, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

export function About() {
  return (
    <HStack w='100%' h='100%' bg={'var(--body-bg-color)'} pt={4} alignItems='center' justifyContent='space-around'>
       <Box alignItems='center' justifyContent='center' w='30vw' display='flex' flexDirection='column' p={1}>
        <NavLink to='/'>
        <Text fontSize='50px' fontWeight='bold' mb={-15} color={'var(--text-color)'}>Davi Henrique</Text>
        </NavLink>
        <Text fontSize='20px' fontWeight='bold' mb={35} color={'var(--text-color)'} opacity={0.5}>Dev Frontend - Mobile & Web</Text>
        <Button color={'var(--text-color)'} bg={'var(--v-max-b600)'} w='17rem' h={50} borderRadius='5px'>
            CONHEÇA MEU TRABALHO
        </Button>
        
        <HStack mt={200}>
        <Image src='https://xesque.rocketseat.dev/platform/tech/javascript.svg' alt='Js' _hover={{ mt: -15, boxSize: 61 }}/>
        <Image src='https://xesque.rocketseat.dev/platform/tech/react-native.svg' alt='react-native' _hover={{ mt: -15, boxSize: 61 }}/>
        <Image src='https://xesque.rocketseat.dev/platform/tech/reactjs.svg' alt='reactjs' _hover={{ mt: -15, boxSize: 61 }}/>
        </HStack>
       </Box>

       <Avatar name='Christian Nwamba' src='https://avatars.githubusercontent.com/u/63513686?v=4'
        borderRadius={300} w={300} pt={160} pb={161}/>

    </HStack>
  );
}