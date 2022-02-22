import React, { useEffect, useState } from "react";
import axios from "../Requests/Axios";

interface RowProps {
    title: string;
    fetchUrl: string;
}

function RowShow({ title, fetchUrl }: RowProps) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchUrl]);

    return (
        <div>
            <h2>{title}</h2>

            <div>
                {movies.map((movie: any) => (
                    <img
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default RowShow;