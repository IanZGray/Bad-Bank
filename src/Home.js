// import { Card } from "react-bootstrap";
import image from "./bank.png";
import './home.css'

// import './app.css'
const Home = () => {
    
    return (
<div className="card">
  <div className="card-header">
    Home
  </div>
  <div className="card-body">
  <img className="card-img-top" src={ image } alt="Card image cap" />
    <h5 className="card-title">Bad Bank</h5>
    <p className="card-text">For all your banking needs.</p>
      {/* <a href="#" className="btn btn-primary" >Go somewhere</a> */}
  </div>
</div>
    )
}

export default Home;