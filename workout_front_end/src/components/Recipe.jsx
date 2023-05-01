import React, { useState, useEffect } from 'react';
import { getRecipe } from '../utilities';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const Recipe = () => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRecipe();
            setRecipe(response);
            console.log(response);
        };
        fetchData();
    }, []);

    if (!recipe) {
        return <div>Loading...</div>
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Card style={{ width: '50rem', color: 'black' }}>
            <Card.Img variant="top" src={recipe && recipe.image} />
            <Card.Body>
                <Card.Title>{recipe && <Card.Title>{recipe.title}</Card.Title>}</Card.Title>
                {recipe.ingredients && recipe.ingredients.map((result, index) => (
                    <Card.Text>-{result}</Card.Text>
                ))}
            </Card.Body>
            <ListGroup className="list-group-flush">
                {recipe.instructions && recipe.instructions.map((result, index) => (
                    <ListGroup.Item>Step {index+1}: {result.text}</ListGroup.Item>
                ))}
            </ListGroup>
            </Card>
        </div>
    );
};