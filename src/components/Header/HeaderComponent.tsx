import React, { ReactNode } from 'react'
import SigninButton from './Button/LoginButton';
import styled from 'styled-components';
import Logo from './Logo'

const HeaderComponent = ({ children }: PropsType) => {

    const navbar = {
        maxWidth: "1850px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "175px",
        marginRight: "auto",
        marginLeft: "auto",
    }; 

    return (
        <HeaderWrapper>
            <div style={navbar}>
                <Logo />
                <SigninButton>S'identifier</SigninButton>
            </div>
            {children}
        </HeaderWrapper>
    )
} 

export const HeaderWrapper = styled.div` 
  background-image : linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%) , url('/img/homescreen.jpg');   
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 50px;
  @media (max-width: 550px) {
    padding: 15px 20px;
  }
`
 

interface PropsType {
    children?: ReactNode
}

export default HeaderComponent