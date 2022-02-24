import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../Requests/Axios";
import { useDispatch } from "react-redux"; 
import SliderItem from "./SliderItem";

import { v4 as uuidv4 } from 'uuid';

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

            <Slider>
                {movies.map((movie: any) => (
                    <SliderItem key={uuidv4()} id={movie.id} mediaType={movie.media_type} src={movie.poster_path} title={movie?.title || movie?.original_title || movie?.name || movie?.original_name || ""}/>
                         
                ))}
            </Slider>
        </div>
    );
}

export const Image = styled.img`
max-height: 250px;

&:hover {
    transform: scale(1.09);
  } 
`
 

export const Slider = styled.div`
display: flex;
overflow-y: hidden;
overflow-x: scroll;
padding: 20px;
&::-webkit-scrollbar {
    display: none;
  }
`
 

export default RowShow;