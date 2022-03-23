import React, { useEffect, useState } from 'react';
import FooterComponent from '../components/Footer/FooterComponent';
import Logo from '../components/Header/Logo';
import styled from 'styled-components';
import axios from "../components/Requests/Axios";
import Requests from '../components/Requests/Requests';
import RowShow from '../components/DisplayShow/RowShow';
import { useNavigate } from 'react-router-dom';

const MoviesPage = () => {
  const navigate = useNavigate();

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
 
  return (
    <>
      <header
        style={{
          backgroundSize: "cover",
          backgroundImage: movie.backdrop_path ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` : "",
          backgroundPosition: "center top"
        }}
      >
        <BrowseNavbar>
          <Logo />
          <HeaderLink onClick={() => navigate('/browse')}>Home</HeaderLink>
          <HeaderLink onClick={() => navigate('/movies')}>Films</HeaderLink>
          <HeaderLink onClick={() => navigate('/series')}>Series</HeaderLink>
          <HeaderLink onClick={() => navigate('/mylist')}>Ma liste</HeaderLink>
          <HeaderLink>
            <div>
              <a href="/profiles" role="button"    >
                <span >
                  <img src="https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZfW1RUr22fiBWaYExj7CxON4XhbCzdXecA3cogZ0L2umPLeF1G2CRjQOqJ4DsYba55_ydC_mMzPhNI-1lGWzjg.png?r=9fe" alt="" />
                </span>
              </a>
            </div>
          </HeaderLink>
        </BrowseNavbar>
        <div>
          <Title>Regarder {movie?.title || movie?.original_title || movie?.name || movie?.original_name} maintenant</Title>
          <SubTitle>
            {movie?.overview}</SubTitle>
          <PlayButton onClick={() => true}>Play</PlayButton>
        </div>
      </header> 
      <RowShow title="Horror Movies" fetchUrl={Requests.horrorMovies} mediaTypeForce="movie"/>
      <RowShow title="Action Movies" fetchUrl={Requests.actionMovies} mediaTypeForce="movie"/>
      <FooterComponent />
    </>
  )
}

export default MoviesPage


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

