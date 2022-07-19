import React, { useState } from 'react';
import Card from './Context';
import './index.css';
import "./deposit.css";
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
// 
// [balance, useBalance] = Context;

const Deposit = () => {
    const [balance, setBalance] = useState(0);
    const [deposited, setDeposited] = useState(10);

    const handleInput = event => {
        setDeposited(event.target.value);
        console.log(deposited);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`this should be ${balance} + ${deposited}`);

        let newBalance = parseInt(balance) + parseInt(deposited);
        setBalance(parseInt(newBalance));
        console.log(balance);
        alert(`Deposit of ${deposited} Recieved!`);
    }

    return (
        <main className="pages">
            <Card
                className=""
                // bgcolor="primary"
                header="Deposit"
                body={(
                    <div>
                        Balance: ${balance}

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