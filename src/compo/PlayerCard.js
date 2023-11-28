import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const PlayerCard=({el,key})=>{
    return(
        
            <div>
                   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.age}
          {el.jursyNumber}
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
        
    )
}
export default PlayerCard