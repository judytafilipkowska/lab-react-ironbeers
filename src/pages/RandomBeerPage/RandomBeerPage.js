import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import axios from 'axios';
import './RandomBeerPage.css'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeerPage() {

    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(apiURL)
            const randomBeerData = response.data
            console.log(randomBeerData)

            setRandomBeer(randomBeerData);
        };
        fetchData();
    }, [])


    return (
        <>
            <Header />
            <div className="random">
                <h2>Random Beer Page</h2>
                <img className="randomBeerPic" src={randomBeer.image_url} alt="randomBeer-img" />
                <h3>{randomBeer.name}</h3>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </>
    );
}

export default RandomBeerPage;