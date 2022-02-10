import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import '../style/login.css';
import { Link } from 'react-router-dom';


export interface UserInterface {
    key: string;
    username: string;
    password: string;
}



export default function Login() {

    const [user, setUser] = useState<UserInterface>({ key: "feg", username: "test", password: "ee" });

    const [inputValues, setInputValues] = useState({
        title: "", assignTo: "Tout"
    });

    const handleOnChange = (event: { target: { name: string; value: string; }; }) => {

        const { name, value } = event.target;

        setInputValues({ ...inputValues, [name]: value });

    };

    const addUser = () => {
        const keyList = uuidv4();
    };

    return (
        <div className="login">
            <img src="/img/netflix.svg" alt="netflix" />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <TextField
                        id="outlined-email-input"
                        label="email"
                        type="email"
                        aria-describedby="email-helper-text"
                        autoComplete="current-email"
                        required
                    />
                    <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        aria-describedby="password-helper-text"
                        autoComplete="current-password"
                        required
                    />
                    <FormHelperText id="password-helper-text">We'll never share your password.</FormHelperText>

                    <Link to="/profil">
                        <Button variant="contained">Sign in</Button>
                    </Link>

                </FormControl>
            </div>
        </div>



    );
} 