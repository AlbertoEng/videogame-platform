import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {

    const { toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        {colorMode === 'dark' && <Text>Dark Mode</Text>}
        {colorMode === 'light' && <Text>light Mode</Text>}
    </HStack>
  )
}

export default ColorModeSwitch