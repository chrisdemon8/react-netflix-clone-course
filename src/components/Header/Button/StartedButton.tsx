import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/*---> Component <---*/
const StartedButton = ({ children }: PropsType) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/browse');
    const HeaderElement: HTMLElement | null = document.getElementById('header')
    HeaderElement?.scrollIntoView()
  }

  return (
    <Wrapper onClick={handleClick}>
      {children}
      <img src='../img/chevron-right.png' alt='Try Now' />
    </Wrapper>
  )
} 

export const Wrapper = styled.div`
  width: fit-content;
  height: 60px;
  background: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  a {
    color: white;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 950px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`


interface PropsType {
  children?: string
}

export default StartedButton