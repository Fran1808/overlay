import React from 'react';
import { Menu, Pressable, HamburgerIcon, Divider } from 'native-base';

const MenuExample = () => {
  return (
    
      <Menu w="190" trigger={triggerProps => {
            return (<Pressable accessibilityLabel="More options menu" {...triggerProps}
                bg="green.500"  p={3} borderRadius="4">
                <HamburgerIcon color="white" /> </Pressable>); }}>
            
            {/*---------PRIMER MENÚ--------------*/}
            {/* */}
            <Menu.Item>Opcion 1</Menu.Item>
            <Menu.Item>Opcion 2</Menu.Item>
            <Menu.Item>Opcion 3</Menu.Item>
            <Menu.Item isDisabled>Opcion 4</Menu.Item> 
        
            {/*---------SEGUNDO MENÚ--------------*/}
            {/*  
                <Menu.Group title="Grupo 1">
                    <Menu.Item>Opcion 1</Menu.Item>
                    <Menu.Item>Opcion 2</Menu.Item>
                </Menu.Group>
                    <Divider mt="3" w="100%" />
                <Menu.Group title="Grupo 2">
                    <Menu.Item>Opcion 1</Menu.Item>
                    <Menu.Item>Opcion 2</Menu.Item>
                </Menu.Group>  
            */}

            {/*---------TERCER MENÚ--------------*/}
            {/* 
                <Menu.OptionGroup defaultValue="Op1" title="Grupo 1" type="radio">
                    <Menu.ItemOption value="Op1">Opcion 1</Menu.ItemOption>
                    <Menu.ItemOption value="Op2">Opcion 2</Menu.ItemOption>
                </Menu.OptionGroup>
                    <Divider mt="3" w="100%" />
                <Menu.OptionGroup title="Grupo 2" type="checkbox">
                    <Menu.ItemOption value="Op1">Opcion 1</Menu.ItemOption>
                    <Menu.ItemOption value="Op2">Opcion 2</Menu.ItemOption>
                </Menu.OptionGroup>
            */}
      </Menu>
    
  );
};

export default MenuExample;
