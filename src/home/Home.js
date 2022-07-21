import { Card } from "react-bootstrap";
import image from "../bank.png";
import './home.css';
import '../index.css';

const Home = () => {
    return (
      <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Home</Card.Title>
            <Card.Img
            variant="top"
            src={ image } alt="Card image cap"
            />
              <Card.Title>Bad Bank</Card.Title>
              <Card.Text>For all your banking needs.</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default Home;