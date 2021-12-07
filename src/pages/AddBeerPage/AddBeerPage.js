import React, { useState } from 'react'
import Header from '../../components/Header';
import axios from 'axios';
import './AddBeerPage.css'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

function AddBeerPage() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(1);
    const [contributedBy, setContributedBy] = useState("");

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTips = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newBeer = {
                name: name,
                tagline: tagline,
                description: description,
                first_brewed: firstBrewed,
                brewers_tips: brewersTips,
                attenuation_level: attenuationLevel,
                contributed_by: contributedBy
            };
            await axios.post(`${apiURL}/new`, newBeer)

            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel(1);
            setContributedBy("");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Header />
            <h2>Add Beer Page</h2>

            <form onSubmit={handleSubmit} className="forma">
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

                <label>Description</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />

                <label>First brewed</label>
                <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewed} />

                <label>Brewers tips</label>
                <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTips} />

                <label>Attenuation level</label>
                <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevel} />

                <label>Contributed by</label>
                <input type="text" name="contributed_by" value={contributedBy} onChange={handleContributedBy} />

                <button type="submit">Add a Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;