import React from 'react';
import styled from 'styled-components';
import FooterComponent from '../components/Footer/FooterComponent';

import StartedButton from '../components/Header/Button/StartedButton';
import HeaderComponent from '../components/Header/HeaderComponent';
import StoryCardComponent from '../components/StoryCard/StoryCardComponent';
const HomePage = () => {

  const text = {
    fontSize: "19px",
    color: "#fff",
    textAlign: "center" as "center",
    padding: "0 20px",
  }

  const title = {
    color: "white",
    maxWidth: "640px",
    textAlign: "center" as "center",
    fontSize: "50px",
    fontWeight: "700",
    margin: "auto",
  };

  return (
    <>
      <HeaderComponent>

        <div>
          <div style={title}>Films, séries TV et bien plus en illimité.
          </div>
        </div>
        <div style={text}>
          Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
        </div>
        <Wrapper >
          <EmailInput placeholder='Adresse e-mail' />
          <StartedButton>Commencer</StartedButton>
        </Wrapper >


      </HeaderComponent>
      <Seperator />
      <StoryCardComponent /> 
      <FooterComponent />
    </>
  )
}
 
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
  padding: 0 20px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Seperator = styled.div`
  border-bottom: 8px solid #222; 
`

export const EmailInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px; 
  font-size: 20px;
`

export default HomePage