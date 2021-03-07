import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Country from '../Country/Country';


const Home = () => {


    const [country, setcountry] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setcountry(data));
    }, [])
    return (
        <div>
            <Container fluid='md' className='d-flex flex-wrap align-items-center justify-content-around'>
                {
                    country.map(countryIndivisual => <Country key={countryIndivisual.name} country={countryIndivisual}></Country>)
                }
            </Container>
        </div>
    );
};

export default Home;