import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent'; 



export default function Profiles() {

  const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate('/browse');
    const HeaderElement: HTMLElement | null = document.getElementById('header')
    HeaderElement?.scrollIntoView()
  }


  return (
    <div>
      <HeaderComponent> 
      </HeaderComponent>

      <div  >
        <div  >
          <div  >
            <h1 >Qui est-ce&nbsp;?</h1>
            <ul >
              <li  >
                <div>
                  <a  href="" data-uia="action-select-profile+primary">
                    <div>
                      <div style={{backgroundImage:"url(https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABedRSQ_RQb8layV_wFNLCULps33qI0-D_EXTuaVk2IxuLvWZQ8nUHeGyVrP7PS86WpWLUn0r840dIRMAFD47K6XzHaNH.png?r=d7c)"}}>
                    </div>
                    </div>
                    <span >Camille</span>
                  </a>
                  <div>
                  </div>

                </div>
              </li>
              <li >
                <div>
                  <a  href="#">
                    <div>
                      <div  style={{backgroundImage:"url(https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSMMlTr6UzP0M0lPzHSW7YSSGJcUdgTZuD1n9sPTa1pwH-B3k-0W2Afcx8zFCjUHpSuqlcQhrSmdIFfz0p4kr5GI6L2T.png?r=e1f)"}}>
                    </div>
                    </div>
                    <span >Benoît</span>
                  </a>
                  <div>
                  </div>
                </div>
                </li>
                <li>
                <div>
                  <a href="#">
                    <div>
                      <div style= {{backgroundImage:"url(https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97)"}}>
                      </div>
                    </div>
                    <span>Val&amp;Dav</span></a>
                  <div></div>
                  </div>
                  </li>
              <li>
                <div>
                  <a href="#">
                <div><div style={{backgroundImage:"url(https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbU9eqkBgvU1DIIchQhvQn9qyCbirDHVaDIdYNRKmqlLfqAkOLSvufpEGOAYDKtlG0ie0L0oP-pd-UFx4MiOB2I9rWX_.png?r=9fe)"}}>
                </div>
                </div>
                <span>Chris</span>
              </a>
                <div>
                </div>
              </div>
              </li>
              <li>
                <div>
                  <a href="#">
                    <div><div style={{backgroundImage:"url(https://occ-0-5351-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcSRUpyEVLD4LwDs3JlaGL3zmIzP5Asq1ZWY3ERpiTDHSDjpWnJw_6UziHNhCuNgqNPCkKvOapbN5w8TOwBzitPOINfF3rT77A9dLJx6Dpro_miht1Fzzm4VUf3kNMQPXtebN4qYRZM.png?r=f08)"}}>
                    </div>
                    </div>
                    <span>Jeunesse</span>
                  </a>
                  <div >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <span >
            <a href="/ManageProfiles">Gérer les profils</a>
          </span>
        </div>
      </div>
    </div>
  );
} 