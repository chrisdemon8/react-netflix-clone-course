/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Login from './pages/Login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import { increment } from './redux/reducer';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import BrowsePage from './pages/BrowsePage';
import Profiles from './pages/Profiles';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import MyListPage from './pages/MyListPage';

export default () => {

    /*
    const { value, test } = useAppSelector((state) => state.counter)
    const dispatch = useAppDispatch() */

    return (
        <Router>
            <div>
                {/*
                <ul>
                    <Link to="/">{value}{test}</Link>
                    <Button onClick={() => dispatch(increment())}>TEST</Button>
                </ul> */ }
                <Routes >
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/browse' element={<BrowsePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/series' element={<SeriesPage />} />
                    <Route path='/mylist' element={<MyListPage />} /> 
                    <Route path='/register' element={<Register />} />
                    <Route path='/profiles' element={<Profiles />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes >
            </div>
        </Router>
    );


}  
