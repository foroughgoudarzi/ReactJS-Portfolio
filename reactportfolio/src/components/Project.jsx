import { Card } from "react-bootstrap";

function Project(props) {
  const styles = {
    cardStyle: {
      boxShadow:
        "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px 5px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    },

    footerStyle: {
      backgroundColor: "#222222",
    },
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <Card className="w-50 p-1" style={styles.cardStyle}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer style={styles.footerStyle}>
          <small className="text-muted d-flex justify-content-center">
            <a href={props.repository}>GitHub repository</a>
          </small>
          <hr />
          <small className="text-muted d-flex justify-content-center">
            <a href={props.page}>Web site</a>
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Project;
