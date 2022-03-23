import React, { useCallback, useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import axios from "../Requests/Axios";

import { makeStyles } from '@mui/styles';
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
    maxWidth: "90%",
    minWidth: "70%",
    width: 'max-content',
    height: "80%",
    overflow: 'auto',
    bgcolor: 'background.paper',
    backgroundColor: "black",
    border: '2px solid #000',
    boxShadow: 24,
};


const useStyles = makeStyles({
    input: {
        color: "white",
        borderColor: 'white !important'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
    },

    cssLabel: {
        color: 'white'
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `white !important`,
        }
    },

    cssFocused: {},
});





function SliderItem({ id, mediaType, src, title }: Movierops) {


    const classes = useStyles();


    const API_KEY = process.env.REACT_APP_API_KEY;
    const language = "fr-FR";




    const [open, setOpen] = useState(false);
    const [movieModal, setMovieModal]: any = useState([]);

    const [season, setSeason]: any = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const loadData = useCallback(async () => {


        let request: any;

        let requestTv: any;

        console.log(id);
        if (mediaType === "movie")
            request = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=${language}`,);
        else {

            request = await axios.get(`/tv/${id}?api_key=${API_KEY}&language=${language}`,);

            requestTv = await axios.get(`/tv/${id}/season/1?api_key=${API_KEY}&language=${language}`,);

            setSeason(requestTv.data);
        }

        console.log(request.data)

        setMovieModal(request.data);

        return request;

    }, [])


    const loadSeason = useCallback(async (seasonNumber: any) => {


        let requestTv: any;

        requestTv = await axios.get(`/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}&language=${language}`,);
        setSeason(requestTv.data);

        return requestTv;

    }, [])


    const handleChange = (event: any) => {
        loadSeason(event.target.value);
    };


    return (

        <div key={id}>
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

                    <header
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: movieModal.backdrop_path ? `linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 80% ,rgba(0,0,0,.8) 100%), url(https://image.tmdb.org/t/p/original${movieModal.backdrop_path})` : "",
                            backgroundPosition: "center top",
                            height :'20%',
                            padding: "30px 50px",
                        }}
                    >

                        <div>
                            <PlayButton onClick={() => true}>Play</PlayButton>

                            <ActionButton onClick={() => true}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                                    <path d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                            </ActionButton>

                            <ActionButton onClick={() => true}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                                    <path d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor">
                                    </path>
                                </svg>
                            </ActionButton>

                            <ActionButton onClick={() => true}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  ><path d="M13.304 15.2268C13.1053 15.5447 13 15.912 13 16.2868V20H12.1623C11.2848 20 10.5715 19.4471 10.3927 18.6887C10.1767 17.7724 10 16.7728 10 16C10 15.4152 10.1024 14.8081 10.2464 14.2496L10.5685 13H9.27807H6.5C5.67157 13 5 12.3284 5 11.5C5 11.4071 5.00833 11.3169 5.02404 11.2301L5.10454 10.7851L4.82357 10.4308C4.6206 10.1748 4.5 9.85286 4.5 9.5C4.5 9.14714 4.6206 8.82521 4.82357 8.56924L5.10454 8.2149L5.02405 7.76991C5.00833 7.68305 5 7.59293 5 7.5C5 7.0099 5.23399 6.57474 5.60058 6.29938L5.99996 5.99939L6 5.49989C6.00006 4.67151 6.67161 4 7.5 4H10H11H11.3772C12.3446 4 13.3056 4.15595 14.2233 4.46185L15.7163 4.95954C16.7754 5.31257 17.8838 5.49494 19 5.4999V10.2457L16.9644 10.8273C16.2507 11.0312 15.638 11.4924 15.2446 12.1219L13.304 15.2268ZM13.5 22C14.3284 22 15 21.3284 15 20.5V16.2868L16.9406 13.1819C17.0717 12.9721 17.276 12.8183 17.5139 12.7503L19.5494 12.1687C20.408 11.9234 21 11.1387 21 10.2457V5.45319C21 4.37447 20.1255 3.5 19.0468 3.5C18.1298 3.5 17.2188 3.35216 16.3488 3.06217L14.8557 2.56448C13.7341 2.19061 12.5595 2 11.3772 2H11H10H7.5C5.73076 2 4.26812 3.31275 4.03301 5.01735C3.39612 5.65042 3 6.52905 3 7.5C3 7.56309 3.00168 7.62585 3.005 7.68825C2.6847 8.21698 2.5 8.83782 2.5 9.5C2.5 10.1622 2.6847 10.783 3.005 11.3117C3.00168 11.3742 3 11.4369 3 11.5C3 13.433 4.567 15 6.5 15H8.06624C8.02476 15.3245 8 15.6603 8 16C8 17.0114 8.22123 18.1939 8.44607 19.1476C8.85988 20.903 10.4572 22 12.1623 22H13.5Z" fill="currentColor">
                                </path>
                                </svg>
                            </ActionButton>
                        </div>

                    </header>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Regarder {movieModal?.title || movieModal?.original_title || movieModal?.name || movieModal?.original_name} maintenant
                    </Typography>


                    <div>


                        {
                            mediaType !== 'movie'
                                ?
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Saison</InputLabel>
                                    <Select
                                        inputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                input: classes.input,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}

                                        className={
                                            classes.input
                                        }


                                        labelId="demo-simple-select-label"
                                        label="season"
                                        onChange={handleChange}
                                    >
                                        {
                                            movieModal?.seasons?.map((season: any) =>
                                                <MenuItem key={season.season_number} value={season.season_number}>{season.season_number}</MenuItem>
                                            )
                                        }

                                    </Select>
                                </FormControl>

                                :
                                <div></div>
                        }

                        {
                            mediaType !== 'movie' ?
                                season?.episodes?.map((episode: any) =>
                                    <div key={episode.name}>
                                        <a href="#"> {episode.name} </a>
                                        <p>{episode.overview}</p>
                                    </div>
                                )
                                :
                                ""
                        }


                    </div>


                    <div>
                        <div>
                            <div>
                                <h3 id="" data-uia="">À propos de <strong>{movieModal.title}</strong></h3>
                            </div>
                            <div >
                                <div>
                                    <Typography component={'span'} variant={'body2'}>Distribution&nbsp;:</Typography>


                                    {
                                        movieModal?.production_companies?.map((companie: any) =>
                                            <Typography key={companie.name} component={'span'} variant={'body2'}>
                                                <a href="#"> {companie.name} </a>
                                            </Typography>
                                        )
                                    }


                                </div>
                                <div  >
                                    <Typography component={'span'} variant={'body2'}>Genres&nbsp;:</Typography>
                                    {
                                        movieModal?.genres?.map((genre: any) =>
                                            <Typography key={genre.name} component={'span'} variant={'body2'}>
                                                <a href="#"> {genre.name} </a>
                                            </Typography>
                                        )
                                    }
                                </div>
                                <div ><Typography component={'span'} variant={'body2'}>Catégorie d'âge&nbsp;:</Typography>

                                    <Typography component={'span'} variant={'body2'}>
                                        <a href="#" >
                                            {
                                                movieModal.adult === true ?
                                                    'Attention pour adulte'
                                                    : 'Tout public'
                                            }
                                        </a>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
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


export const BrowserHeader = styled.div` 
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 50px;
  @media (max-width: 550px) {
    padding: 15px 20px;
  }
`

export const Item = styled.div`
object-fit: contain;
width: 100%;
max-height: 100px;
margin-right: 10px;
transition: transform 450ms;
`


export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700; 
  @media (max-width: 550px) {
    font-size: 30px;
  }
`


export const SubTitle = styled.h2`
  max-width: 640px;
  font-size: 22px;
  font-weight: 500;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  @media (max-width: 550px) {
    font-size: 18px;
  }
`

export const ActionButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  border-width: 0; 
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px; 
  cursor: pointer;
  text-align: center;
  color: #000;
  transition: 0.4s ease; 
  outline: 0;
  &:hover {
    background: #ff1e1e;
    color: white;
  }
`



export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  border-width: 0;
  padding: 10px 35px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px; 
  cursor: pointer;
  text-align: center;
  color: #000;
  transition: 0.4s ease; 
  outline: 0;
  &:hover {
    background: #ff1e1e;
    color: white;
  }
`


export default SliderItem;