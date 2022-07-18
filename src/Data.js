import { getData } from "./allData";
import './data.css';

const Data = () => {
    let users = getData();

    return (
        <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {users.map((data) => (
          <div className='list-group list-group-flush'>
            <h1 classNam="list-group-item">{data.name}</h1>
            <h2 classNam="list-group-item">{data.password}</h2>
            <h3 classNam="list-group-item">${data.balance}</h3>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">{data.name}</li>
              <li class="list-group-item">{data.password}</li>
              <li class="list-group-item">${data.balance}</li>
            </ul>
          </div>

        ))}
      </nav>
    </div>
    )
}

export default Data;