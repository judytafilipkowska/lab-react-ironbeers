import React from 'react'
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BeerDetailsPage.css'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {

    const [cerveja, setCerveja] = useState([]);

    const { beerId } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${apiURL}/${beerId}`);
            const singleCervejaData = response.data;
            console.log(singleCervejaData);
            setCerveja(singleCervejaData);
        }
        fetchData();
    }, [beerId])

    return (
        <div>
            <Header />
            <h2>Beer Details Page</h2>
            <img className="cervejaPic" src={cerveja.image_url} alt="cerveja-img" />
            <h3>{cerveja.name}</h3>
            <p>{cerveja.tagline}</p>
            <p>{cerveja.first_brewed}</p>
            <p>{cerveja.attenuation_level}</p>
            <p>{cerveja.description}</p>
            <p>{cerveja.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;