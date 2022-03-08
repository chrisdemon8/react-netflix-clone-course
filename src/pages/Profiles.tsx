import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';
import styled from 'styled-components';
import Logo from '../components/Header/Logo';


import { v4 as uuidv4 } from 'uuid';



interface Iprofiles {
  [key: string]: any
}


function getStorageValue(key: string, defaultValue: string | null) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved || '{}');
  return initial || defaultValue;
}


export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};


export default function Profiles() {

  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);


  const [profiles, setProfiles] = useState<Iprofiles>({
    "user1": { "name": "chris", "image": "https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbU9eqkBgvU1DIIchQhvQn9qyCbirDHVaDIdYNRKmqlLfqAkOLSvufpEGOAYDKtlG0ie0L0oP-pd-UFx4MiOB2I9rWX_.png?r=9fe", "list": ["1", "2"] },
    "user2": { "name": "kmi", "image": "https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABedRSQ_RQb8layV_wFNLCULps33qI0-D_EXTuaVk2IxuLvWZQ8nUHeGyVrP7PS86WpWLUn0r840dIRMAFD47K6XzHaNH.png?r=d7c", "list": ["15", "46"] },
    "user3": { "name": "Benoît", "image": "https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSMMlTr6UzP0M0lPzHSW7YSSGJcUdgTZuD1n9sPTa1pwH-B3k-0W2Afcx8zFCjUHpSuqlcQhrSmdIFfz0p4kr5GI6L2T.png?r=e1f", "list": ["15", "46"] },
    "user4": { "name": "Val&Dav", "image": "https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97", "list": ["15", "46"] }
  });

  const handleLoginClick = () => {
    navigate('/browse');
    const HeaderElement: HTMLElement | null = document.getElementById('header')
    HeaderElement?.scrollIntoView()
  }

  const handleOnChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setProfiles({ ...profiles, [name]: { ...profiles[name], "name": value } });
  };


  return (
    <div>
      <Header>
        <Logo></Logo>
      </Header>

      <WrapperElement>
        <ListProfiles>
          <ProfilesLabel >Qui est-ce&nbsp;?</ProfilesLabel>
          <ChooseProfile>
            {
              Object.keys(profiles).map(function (key: string) {
                let profile = profiles[key];

                return (
                  <Profile key={uuidv4()}>
                    <div>
                      <AvatarWrapper>
                        {
                          edit ?
                            <div>
                              <ProfileIcon style={{ backgroundImage: `url(${profile.image})` }}>
                              </ProfileIcon>

                              <InputName name={key} value={profile.name} onChange={handleOnChange}></InputName>
                            </div>

                            :
                            <ProfileLink href="#">
                              <ProfileIcon style={{ backgroundImage: `url(${profile.image})` }}>
                              </ProfileIcon>

                              <ProfileName >{profile.name}</ProfileName>
                            </ProfileLink>
                        }

                        {
                          /*
                          edit ?
                            <ProfileEditButton>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z" fill="currentColor">
                              </path>
                              </svg>
                            </ProfileEditButton> :
                            ""*/
                        }
                      </AvatarWrapper>
                      <div>
                      </div>

                    </div>
                  </Profile>
                )
              })


            }
            <Profile>
              <div>
                <AvatarWrapper>
                  <ProfileLink href="#">
                    <ProfileIcon style={{ backgroundImage: "url(https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcSRUpyEVLD4LwDs3JlaGL3zmIzP5Asq1ZWY3ERpiTDHSDjpWnJw_6UziHNhCuNgqNPCkKvOapbN5w8TOwBzitPOINfF3rT77A9dLJx6Dpro_miht1Fzzm4VUf3kNMQPXtebN4qYRZM.png?r=f08)" }}>
                    </ProfileIcon>
                    <ProfileName>Jeunesse</ProfileName>
                  </ProfileLink>
                </AvatarWrapper>
                <div >
                </div>
              </div>
            </Profile>
          </ChooseProfile>
        </ListProfiles>
        <span>
          {
            edit ?
              <ProfileButton onClick={() => { setEdit(!edit) }}>Terminé</ProfileButton>
              :
              <ProfileButton onClick={() => { setEdit(!edit) }}>Gérer les profils</ProfileButton>
          }
        </span>
      </WrapperElement>
    </div>
  );
}


export const Header = styled.div` 
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 50px;
  @media (max-width: 550px) {
    padding: 15px 20px;
  }
`


export const WrapperElement = styled.div` 
  display : flex; 
  justify-content: center;  
  align-items: center;
  text-align: center; 
  top:0; 
  bottom: 0; 
  left: 0; 
  right : 0; 
  flex-direction: column; 
`

export const ListProfiles = styled.div` 
  max-width: 80%;
  background: #141414;
`


export const ProfilesLabel = styled.h1` 
  font-size: 30px;
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  font-weight: unset;
`


export const ChooseProfile = styled.ul` 
  margin: 2em 0;
  padding: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`



export const Profile = styled.li` 
  margin: 0 2vw 0 0;
  width: 10vw;
  max-width: 200px;
  min-width: 84px;
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: -webkit-match-parent;

`




export const ProfileIcon = styled.div`
  height: 10vw;
  width: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px; 
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
  background-repeat: no-repeat; 
  background-size: cover;
  background-color: #333; 
  border-radius: 4px;
  border: none;
 
`


export const ProfileName = styled.div` 
 
`

export const ProfileLink = styled.a` 
  text-decoration: none; 
  cursor: pointer;
  
  color: grey;
  background-color: transparent;

  &:hover ${ProfileIcon} {
    border-radius: 4px;
    border: 0.3em solid white; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover ${ProfileName} {
    color: white;
  }
  
`


export const ProfileButton = styled.a` 
  display: block;
  margin: 2em 0 1em 0;
  font-size: 1.2vw;
  border: 1px solid grey;
  color: grey;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none; 

  &:hover {
    border: 1px solid white;
    color: white;
  }
`


export const ProfileEditButton = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    display: flex; 
    align-items: center;  
    justify-content: center;
`


export const AvatarWrapper = styled.div` 
  position: relative; 

  &:hover ${ProfileIcon} {
    border-radius: 4px;
    border: 0.3em solid white; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover ${ProfileName} {
    color: white;
  }
`

export const InputName = styled.input`  
 
  width: 10vw; 
  max-width: 200px; 
  min-width: 84px; 

  background: #666; 
  color: #fff;  
  box-sizing: border-box;
  text-indent: 0.1vw;
  line-height: normal;
`





