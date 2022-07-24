import { ChakraProvider } from '@chakra-ui/react';
import { Main } from '../Main/Main';


export function Home() {
    return (
      <ChakraProvider>
      <div className="App">
        <Main />
      </div>
      </ChakraProvider>
    );
  }