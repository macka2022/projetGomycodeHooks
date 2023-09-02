import React from 'react';
import Card from 'react-bootstrap/Card';

function MovieCard({ title, description, posterURL, rating }) {
  return (
<Card style={{width:'300px'}}>
      
        <Card.Body>
        <Card.Img  style={{width:'100%', height:'300px'}} src={posterURL}  />
          <Card.Title>titre {title}</Card.Title>
          <Card.Text>
          Description {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating: {rating}</small>
        </Card.Footer>
    </Card>
  );
}

export default MovieCard;
