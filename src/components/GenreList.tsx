import { Box, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {

    const { genres } = useGenres();

    return (
        <Box marginTop={2} minW={'200px'} padding={2} >
            <Text fontSize={'2xl'} fontWeight={'semi-bold'}>Genres List</Text>
            <List marginTop={2}>
                {
                    genres.map(( genre )=>(
                        <ListItem key={genre.id}>{genre.name}</ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default GenreList