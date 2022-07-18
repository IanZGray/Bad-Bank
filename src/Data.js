import { getData } from "./allData";
import './data.css';

const Data = () => {
  let users = getData();

  return (
    <div className="data-column">
      <nav >
        <h2>ALL DATA</h2>

        {users.map((data) => (

          <ul class="list-group list-group-flush dataDisplay">
            <li class="list-group-item data-color">{data.name}</li>
            <li class="list-group-item data-color">{data.email}</li>
            <li class="list-group-item data-color">{data.password}</li>
            <li class="list-group-item data-color">${data.balance}</li>
          </ul>

        ))}
      </nav>
    </div>
  )
}

export default Data;