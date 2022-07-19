// import { Card } from "react-bootstrap";
import image from "./bank.png";
import Card from "./Card";
import './home.css';
import './index.css';

// import './app.css'
const Home = () => {
    
    return (
      <main className="pages">
        <Card
        header="Home"
        body={(
            <div className="card-body">
            <img className="card-img-top" src={ image } alt="Card image cap" />
              <h5 className="card-title">Bad Bank</h5>
              <p className="card-text">For all your banking needs.</p>
            </div>
        )}
        />
      </main>
    )
}

export default Home;