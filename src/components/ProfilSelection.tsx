import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../app/hooks';



export interface ProfilInterface {
    key: string;
    username: string;
    urlImage: string;
}


export interface ProfilesInterface {
    profiles: ProfilInterface[];
}



export default function Profil() {
    const { value, test } = useAppSelector((state) => state.counter);
    const [profiles, setProfiles] = useState<ProfilesInterface>({ profiles: [{ key: 'test', username: 'test', urlImage: 'test' }] });

    const [inputValues, setInputValues] = useState({
        title: "", assignTo: "Tout"
    });


    const addProfil = () => {
        setProfiles((prevState: any) => ({
            profiles: [
                ...prevState.profiles,
                {
                    key: uuidv4(),
                    username: "aa",
                    urlImage: "aa",
                }
            ]
        }
        ));

        localStorage.setItem("profiles", JSON.stringify(profiles));

       // console.log("LOCAL" + localStorage.getItem("profiles"));

        console.log(profiles);


    };





    return (
        <div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <InputLabel htmlFor="my-input">Email address {value}</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

                </FormControl>
                <Button onClick={() => addProfil()}>TEST</Button>

            </div>




        </div>
    );
} 