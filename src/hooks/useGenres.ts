import { useEffect, useState } from 'react'
import apiClient from '../api-client';


interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [ genres, setGenres] = useState<Genre[]>([]);
    const [ error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient
        .get<FetchGenresResponse>('/genres', { signal: controller.signal })
        .then(( res )=>{
            setGenres(res.data.results);
        })
        .catch((error) => setError(error.message));

        return () => controller.abort();
    },[]); 

    return { genres , error}
}

export default useGenres