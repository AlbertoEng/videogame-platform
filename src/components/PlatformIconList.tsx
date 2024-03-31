import { Box, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { FaApple, FaPlaystation, FaWindows , FaXbox, FaLinux, FaAndroid   } from "react-icons/fa";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from 'react-icons/md';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconsParentPlatforms: { [key: string]: IconType } = {
        playstation: FaPlaystation,
        xbox: FaXbox,
        pc: FaWindows,
        mac: FaApple,
        nintendo: BsNintendoSwitch,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
    <Box>
        {
            platforms.map(( platform )=>(
                <span key={platform.id} >
                    <Icon marginRight={1} as={iconsParentPlatforms[platform.slug]} color={'gray.500'} />
                </span>
            ))
        }
    </Box>
        
    )
}

export default PlatformIconList