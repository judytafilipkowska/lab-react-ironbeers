import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import axios from 'axios';
import './AllBeersPage.css'


const apiURL = "https://ih-beers-api2.herokuapp.com/beers"


function AllBeersPage() {


    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${apiURL}/`);
            const beersData = response.data
            console.log(beersData);

            setAllBeers(beersData);
        }
        fetchData();
    }, [])

    return (
        <div>
            <Header />
            <h2>All Beers Page</h2>
            {allBeers &&
                allBeers.map((oneBeer) => {
                    return (
                        <Link key={oneBeer._id} to={"/beers/" + oneBeer._id}>
                            <div>
                                <img className="beerImg" src={oneBeer.image_url} alt="one-beer-img" />
                                <h3>{oneBeer.name}</h3>
                                <p>{oneBeer.tagline}</p>
                                <h6>Contributed by: {oneBeer.contributed_by}</h6>
                                <hr style={{ width: "50%" }} />
                            </div>
                        </Link>
                    )
                })}

        </div>
    );
}

export default AllBeersPage;