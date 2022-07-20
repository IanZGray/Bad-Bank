import { useState } from 'react';
import Card from '../context/Card';
import '../index.css';
import "./deposit.css";
import { useBankContext } from '../context/Context';

// import { data } from 'jquery';

const Deposit = () => {
    const [newBalance, setNewBalance] = useState(0);
    const [deposited, setDeposited] = useState(0);

    // const { bank } = useBankContext();
    // let items = bank.users;

    const handleInput = event => {
        setDeposited(event.target.value);
        console.log(deposited);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`this should be ${newBalance} + ${deposited}`);

        let total = parseInt(newBalance) + parseInt(deposited);
        setNewBalance(parseInt(total));
        console.log(newBalance);

        // items.map((data) => (

        //     if(bank.loggedInUser === data.name){
        //         data.balance = total
        //     }

        //     return users
  
        //   ))
        
        alert(`Deposit of $${deposited}.00 Recieved!`);
    }

    return (
        <main className="pages">
            <Card
                className=""
                // bgcolor="primary"
                header="Deposit"
                body={(
                    <div>
                        Balance: ${newBalance}

                        <form onSubmit= {handleSubmit}>
                            <input 
                            type="number"
                            min='0'
                            name="dollars"
                            placeholder="0"
                            onChange={handleInput}
                            ></input>
                            <button>Deposit</button>
                        </form>
                    </div>
                )}
            />
        </main>
    )
}

export default Deposit;