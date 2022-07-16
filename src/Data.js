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
          <div className='dataDisplay'>
            <h1 classNam="dataSection">{data.name}</h1>
            <h2 classNam="dataSection">{data.password}</h2>
            <h3 classNam="dataSection">${data.balance}</h3>
          </div>
        ))}
      </nav>
    </div>
    )
}

export default Data;