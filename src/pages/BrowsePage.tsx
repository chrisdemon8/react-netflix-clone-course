import React, { useEffect, useState } from 'react';
import FooterComponent from '../components/Footer/FooterComponent';
import Logo from '../components/Header/Logo';
import styled from 'styled-components';
import axios from "../components/Requests/Axios";
import Requests from '../components/Requests/Requests';
import RowShow from '../components/DisplayShow/RowShow';

const BrowsePage = () => {

  const [movie, setMovie]: any = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(Requests.netflixOriginals);


      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]);
 

      return request;
    }

    fetchData();

  }, []);



  


//${movie.backdrop_path? url(https://image.tmdb.org/t/p/original${movie.backdrop_path})}`,
  return (
    <>
      <BrowserHeader style={{
        backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 80% ,rgba(0,0,0,.8) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})}`,
      }}>
        <BrowseNavbar>
          <Logo />
          <HeaderLink>Films</HeaderLink>
          <HeaderLink>Series</HeaderLink>
        </BrowseNavbar>
        <div>
          <Title>Regarder {movie?.title || movie?.original_title || movie?.name || movie?.original_name} maintenant</Title>
          <SubTitle>
            {movie?.overview}</SubTitle>
          <PlayButton onClick={() => true}>Play</PlayButton>
        </div>
      </BrowserHeader>

      <RowShow title="Trending Now" fetchUrl={Requests.trending} />


      <FooterComponent />
    </>
  )
}

export default BrowsePage


export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  border-width: 0;
  padding: 10px 35px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 25px;
  cursor: pointer;
  text-align: center;
  color: #000;
  transition: 0.4s ease;
  margin-bottom: 200px;
  outline: 0;
  &:hover {
    background: #ff1e1e;
    color: white;
  }
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


export const HeaderLink = styled.div`
  padding: 5px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
  font-weight: normal;
`

export const BrowseNavbar = styled.nav`
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 175px;
  margin-right: auto;
  margin-left: auto;
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