import {HStack, Image, Text } from "@chakra-ui/react"
import socketio  from '../assets/socketio.jpg'
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
        <HStack>
            <Image rounded={'lg'} src={socketio} alt="socket.io" boxSize={16}  />
            <Text>Plataforma de Juegos</Text>
        </HStack>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar