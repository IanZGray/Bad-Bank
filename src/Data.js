// import { getData } from "./allData";
import Card from "./Card";
import { useBankContext } from "./Context";
import './data.css';

const Data = () => {
  // let users = getData();
  // useBankContext
  const { bank } = useBankContext();
  let items = bank.users;

  return (
    <Card 
    header="All Data"
    body={(
    <div>
      <nav >

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