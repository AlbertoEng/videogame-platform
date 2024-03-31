import {  Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticalValue from './CriticalValue';
import getCropImages from '../lib/getCropImages';



interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {

    

    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={getCropImages(game.background_image)} alt="Segun Adebayo" />
            <CardBody >
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack gap={1} marginTop={5} justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map((p )=> p.platform)} />
                    <CriticalValue value={game.metacritic} />
                </HStack>   
            </CardBody>
        </Card>
    )
}

export default GameCard