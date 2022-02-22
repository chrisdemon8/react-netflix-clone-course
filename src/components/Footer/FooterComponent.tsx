import React from "react";
import styled from 'styled-components';

const FooterComponent = () => {
  return (
    <Footer>
      <TitleLink>Questions? Contactez-vous.</TitleLink>
      <Row>
        <Column>
          <Link href='#'>Audio et sous-titres</Link>
          <Link href='#'>Presse</Link>
          <Link href='#'>Confidentialité</Link>
          <Link href='#'>Nous contacter</Link>
        </Column>
        <Column>
          <Link href='#'>Audiodescription</Link>
          <Link href='#'>Relations Investisseurs</Link>
          <Link href='#'>Informations légales</Link> 
        </Column>
        <Column>
          <Link href='#'>Centre d'aide</Link>
          <Link href='#'>Recrutement</Link>
          <Link href='#'>Préférences de cookies</Link>
          <Link href='#'>Netflix Originals</Link>
        </Column>
        <Column>
          <Link href='#'>Cartes cadeaux</Link>
          <Link href='#'>Conditions d'utilisation</Link>
          <Link href='#'>Mentions légales</Link>
        </Column>
      </Row>
    </Footer>
  );
} 

export const TitleLink = styled.a`
  font-size: 16px;
  color: #757575;
  text-decoration: none;
  margin-bottom: 50px;
` 

export const Link = styled.a`
    color: #757575;
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 13px;
  `
export const Row = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const Column = styled.div`
display: flex;
flex-direction: column;
`

export const Footer = styled.footer`
  max-width: 1000px;
  margin: auto;
  padding: 70px 56px;
  @media (max-width: 740px) {
    padding: 70px 30px;
  }
  @media (max-width: 500px) {
    padding: 70px 15px;
  }
`


export default FooterComponent;