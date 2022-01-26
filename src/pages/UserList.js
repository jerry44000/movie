import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const UserList = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split("-") : [];
        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=c96aaf1d854adbaf1aca017a0aafed02&language=fr-FR`)
                .then((res) => setListData((listData) => [...listData, res.data]))
        }

    }, [])
    return (
        <div className='user-list-page'>

            <Header />
            <h2>Coupe de coeur <span>❤️</span></h2>
            <div className='result'>
                {listData.length > 0 ?
                    (listData.map((movie) => <Card movie={movie} key={movie.id} />))
                    : (<h2>Vous n'avez aucun coup de coeur</h2>)}
            </div>
        </div>
    );
};

export default UserList;