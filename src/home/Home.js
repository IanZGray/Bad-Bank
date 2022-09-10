import { Card } from "react-bootstrap";
import image from "../bank.png";
import image2 from '../goldDoor.png';
import image3 from '../goldSign.png';
import './home.css';
import '../index.css';

const Home = () => {
    return (
      <Card style={{ width: "18rem" }}>
      <Card.Body>
        {/* <Card.Title className='home-header'>Home</Card.Title> */}
            <Card.Img
            className="home-logo"
            variant="top"
            src={ image3 } alt="Card image cap"
            />
              <Card.Title className="home-header">Bad Bank</Card.Title>
              <Card.Text>For all your banking needs.</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default Home;