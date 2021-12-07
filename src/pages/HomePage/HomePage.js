import React from 'react'
import { Link } from 'react-router-dom';
import BeersImg from '../../assets/beers.png'
import NewBeerImg from '../../assets/new-beer.png';
import RandomBeerImg from '../../assets/random-beer.png';
import './HomePage.css'

function HomePage() {
    return (<div className="home">
        <h2>Home Beer Page</h2>
        <Link to={"/beers"}>
            <div >
                <img src={BeersImg} alt="beers-img" />
                <h2>All beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus repellat, placeat facere laboriosam, accusantium incidunt, vitae tenetur maxime dolor odit iste culpa fuga ullam voluptatum tempora odio nobis quos.</p>
            </div>
        </Link>
        <hr />
        <Link to={"/random-beer"}>
            <div >
                <img src={RandomBeerImg} alt="random-beer-img" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum odio qui recusandae, mollitia cum ullam dolorem molestias eveniet consequuntur neque aspernatur perspiciatis dolore, eligendi voluptas sint labore! Quasi, recusandae voluptatibus.</p>
            </div>
        </Link>
        <hr />
        <Link to={"/new-beer"}>
            <div >
                <img src={NewBeerImg} alt="new-beer-img" />
                <h2>New beer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nihil aliquid aut, enim possimus neque velit vitae totam assumenda saepe officiis ipsam eos unde reprehenderit, voluptatem voluptate autem sint quos.</p>
            </div>
        </Link>
    </div>

    );
}

export default HomePage;