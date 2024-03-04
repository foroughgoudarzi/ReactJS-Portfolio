import { Card } from "react-bootstrap";

function Project(props) {
  return (
    <div  className="d-flex justify-content-center">
    <Card className="w-50">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted" ><a href={props.repository}>GitHub repository</a></small>
        <hr />
        <small className="text-muted"><a href={props.page}>Web site</a></small>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default Project;
