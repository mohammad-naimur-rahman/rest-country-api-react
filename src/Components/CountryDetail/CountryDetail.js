import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();

    const [countrySelected, setcountrySelected] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setcountrySelected(data[0]))
            .catch(error => alert(error))
    }, [countryName])

    const { name, capital, region, area, flag, population } = countrySelected;

    return (
        <div style={{ margin: '0 auto' }}>
            <Link to='/'>
                <button style={{ color: 'teal', textDecoration: 'underline', cursor: 'pointer', border: 'none', background: 'none', margin: '5px 40%', }}>&larr; Go to home</button>
            </Link>
            <div className='w-100'>
                <Card className='bg-dark color-white mx-auto' style={{ width: '400px', color: 'white', textShadow: '1px 1px black' }}>
                    <Card.Img src={flag} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <b>Capital: </b>{capital}
                        </Card.Text>
                        <Card.Text>
                            <b>Region: </b> {region}
                        </Card.Text>
                        <Card.Text>
                            <b>Area: </b> {area}
                        </Card.Text>
                        <Card.Text>
                            <b>Population: </b>{population}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default CountryDetail;