import React from 'react';
import { Button, Popover, Box } from 'native-base';

const PopoverExample = () => {
        return <Box w="100%" alignItems="center">
            <Popover trigger={triggerProps => {
            return <Button {...triggerProps} colorScheme="amber">
                    Eliminar cliente
                  </Button>;
          }}>
              <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                <Popover.Arrow />
                <Popover.CloseButton />
                <Popover.Header>Eliminar cliente</Popover.Header>
                <Popover.Body>
                  Esto eliminará todos los datos relacionados con Alex. 
                  Esta acción no se puede revertir.
                  Los datos eliminados no se pueden recuperar.
                </Popover.Body>
                <Popover.Footer justifyContent="flex-end">
                  <Button.Group space={2}>
                    <Button colorScheme="coolGray" variant="ghost">
                      Cancelar
                    </Button>
                    <Button colorScheme="danger">Eliminar</Button>
                  </Button.Group>
                </Popover.Footer>
              </Popover.Content>
            </Popover>
          </Box>;
      
};

export default PopoverExample;
