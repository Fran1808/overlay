import React from 'react';
import { NativeBaseProvider, Box, Text, Button, HStack, StatusBar, Center } from 'native-base';
import AlertExample from './src/AlertDialog';
import MenuExample from './src/Menu';
import ModalExample from './src/Modal';
import PopoverExample from './src/Popover';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} safeArea>

            {/*---------------------Encabezado-------------------------*/}
            <Box bg="white" py={4} alignItems="center">
            <Text fontSize="5xl" color="black" fontWeight="bold">Overlay</Text>
            </Box>

        <HStack flex={1}>
          {/*---------------------Primer espacio con AlertDialog-------------------------*/}
          <Box flex={1} bg="rgba(255, 99, 99, 0.5)" justifyContent="flex-start" alignItems="center" p={4}>
            <Text fontSize="xl" mt={5}>AlertDialog</Text>
            <Center flex={1}><AlertExample /></Center>  
          </Box>

          {/*---------------------Segundo espacio con Menu------------------------------*/}
          <Box flex={1} bg="rgba(99, 255, 99, 0.5)" justifyContent="flex-start" alignItems="center" p={4}>
            <Text fontSize="xl" mt={5}>Menu</Text>
            <Center flex={1}><MenuExample /></Center>    
          </Box>

          {/*---------------------Tercer espacio con Modal------------------------------*/}
          <Box flex={1} bg="rgba(127, 255, 212, 0.5)" justifyContent="flex-start" alignItems="center" p={4}>
            <Text fontSize="xl" mt={5}>Modal</Text>
            <Center flex={1}><ModalExample /></Center>
          </Box>

          {/*---------------------Cuarto espacio con Popover------------------------------*/}
          <Box flex={1} bg="rgba(255, 255, 99, 0.5)" justifyContent="flex-start" alignItems="center" p={4}>
            <Text fontSize="xl" mt={5}>Popover</Text>
             <Center flex={1}><PopoverExample /></Center>
          </Box>

        </HStack>
        <StatusBar barStyle="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
