import { Container, Card, Button } from "react-bootstrap";

const Arin = () => {
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              ipsum doloribus id atque. Harum repellendus possimus quod veniam
              totam nemo ratione accusamus eveniet at ullam odio tempora,
              impedit, ipsa repudiandae.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Arin;
