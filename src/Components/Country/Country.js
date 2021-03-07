import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    const { name, capital, flag, region } = country;
    return (
        <Card style={{ width: '18rem' }} className='m-2'>
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p><b>Capital: </b>{capital}</p>
                <p><b>Region: </b>{region}</p>
                <Link to={`/country/${name}`}>
                    <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Country;