import { Card } from "react-bootstrap";
import { useBankContext } from "../context/Context";
import './data.css';

const Data = () => {
  const { bank } = useBankContext();
  let items = bank.users;
console.log(items)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
      <Card.Title>ALL DATA!</Card.Title>
      <Card.Text>Current User: {bank.loggedInUser}</Card.Text>
      {items.map((data) => (
        <ul className="list-group list-group-flush dataDisplay">
          <li className="list-group-item data-color">{data.name}</li>
          <li className="list-group-item data-color">{data.email}</li>
          <li className="list-group-item data-color">{data.password}</li>
          <li className="list-group-item data-color">${data.balance}</li>
        </ul>
      ))}
      </Card.Body>
    </Card>
  )
}

export default Data;