import { useEffect, useState } from 'react'
import apiClient from '../api-client';


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [ games, setGames] = useState<Game[]>([]);
    const [ error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient
        .get<FetchGamesResponse>('games', { signal: controller.signal })
        .then(( res )=>{
            setGames(res.data.results);
        })
        .catch((error) => setError(error.message));

        return () => controller.abort();
    },[]); 

    return {games, error}
  
}

export default useGames