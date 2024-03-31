import { Badge } from '@chakra-ui/react'

interface Props {
    value: number
}

const CriticalValue = ({ value }: Props) => {

    if ( value < 90 ) {
        return (
            <Badge variant='outline' colorScheme='red'>
                {value}
            </Badge>
        )
    } 

    return (
        <Badge variant='outline' colorScheme='green'>
            {value}
        </Badge>
    )
}

export default CriticalValue