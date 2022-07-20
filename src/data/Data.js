// import { getData } from "./allData";
import Card from "../context/Card";
import { useBankContext } from "../context/Context";
import './data.css';

const Data = () => {
  // let users = getData();
  // useBankContext
  const { bank } = useBankContext();
  let items = bank.users;
console.log(items)
  return (
    <Card 
    header="All Data"
    body={(
    <div>
      <nav >
        <h3>Current User: {bank.loggedInUser}</h3>

        {items.map((data) => (

          <ul className="list-group list-group-flush dataDisplay">
            <li className="list-group-item data-color">{data.name}</li>
            <li className="list-group-item data-color">{data.email}</li>
            <li className="list-group-item data-color">{data.password}</li>
            <li className="list-group-item data-color">${data.balance}</li>
          </ul>

        ))}
      </nav>
    </div>
    )}
    />
  )
}

export default Data;