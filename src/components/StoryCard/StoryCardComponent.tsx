import React from 'react';  
import StoryCardData from '../../data/storycard.json'; 
import styled from 'styled-components';

const StoryCardComponent = () => {
  return (
    <>
      <div>
        {StoryCardData.map((item) => (
          <div key={item.id}>
            <Item>
              <div>
                <Title>{item.title}</Title>
                <SubTitle>{item.subTitle}</SubTitle>
              </div>
              <div>
                <Image src={item.image} alt={item.alt} />
              </div>
            </Item>
            <Seperator />
          </div>
        ))}
      </div>
    </>
  )
}

export const Seperator = styled.div`
  border-bottom: 8px solid #222; 
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: normal;
  padding-right: 100px;
  @media (max-width: 950px) {
    font-size: 1.25rem;
    text-align: center;
    padding-right: initial;
  }
  @media (max-width: 550px) {
    font-size: 1.2rem;
    text-align: center;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 8px;
  padding-right: 100px;
  @media (max-width: 950px) {
    font-size: 2.5rem;
    text-align: center;
    padding-right: initial;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
    text-align: center;
  }
` 

export const Item = styled.div`
  padding: 70px 5%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`
 
export default StoryCardComponent