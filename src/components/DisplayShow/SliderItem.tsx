import React, { useCallback, useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import axios from "../Requests/Axios";
import { useDispatch } from "react-redux";

interface Movierops {
    id: string;
    mediaType: string;
    src: string;
    title: any;
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    backgroundColor: "black",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function SliderItem({ id, mediaType, src, title }: Movierops) {
 
    const [movie, setMovie] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const language = "fr-FR";



    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const loadData = useCallback(async () => {


        let request: any;
  
        console.log(id); 
        if (mediaType === "movie")
            request = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=${language}`,);
        else
            request = await axios.get(`/tv/${id}?api_key=${API_KEY}&language=${language}`,);


        console.log(request.data);


        console.log(request);

        return request;

    }, [])
 



    return (

        <div>

            <Item onClick={() => { handleOpen(); loadData() }}>
                <Image

                    key={id}
                    src={`https://image.tmdb.org/t/p/w500${src}`}
                    alt={title}
                />
            </Item>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {title}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export const Image = styled.img`
max-height: 250px;

&:hover {
    transform: scale(1.09);
  } 
`



export const Item = styled.div`
object-fit: contain;
width: 100%;
max-height: 100px;
margin-right: 10px;
transition: transform 450ms;
`

export default SliderItem;