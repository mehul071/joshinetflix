import React, { useEffect, useState } from 'react'
import "./Banner.css"; 
import axios from './axios';
import requests from './Requests';

function Banner() {
    
    const [movie, setMovie] = useState([]);
    const [request, setRequest] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://api.themoviedb.org/3/network/213?api_key=96b6e31278bc0322c62952fe7bed0924');
            setRequest(request);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
                
            return request;
        }
        fetchData();
        
    },[])
        console.log(request)
        console.log(movie)
    function truncate ( string , n ) {
        return (string?.length > n ? string.substr( 0 , n-1 ) + '...' : string);
    }
    
    return (
    <header className = "banner" style={{
        // backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
    
    <div className = 'banner_contents'>
        <h1 className = 'banner_title'>
            { movie?.title || movie?.name || movie?.original_name }
        </h1>
        <div>
            <h1 className = 'banner_description'>
                { truncate(movie?.overview, 150)}
            </h1>
        </div>
        <div className = 'banner_buttons'>
            <button className = 'banner_button'> Play </button>
            <button className = 'banner_button'> Add to list </button>
        </div>
    </div>
    <div className = "banner_fadeBottom"/>
    </header>
  );
}

export default Banner;