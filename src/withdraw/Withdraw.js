import React, { useState } from 'react';
import Card from '../context/Card';
import '../index.css';
import "./withdraw.css";

const Withdraw = () => {
    const [balance, setBalance] = useState(1000);
    const [withdrawn, setWithdrawn] = useState(0);
    const [validWithdraw, setValidWithdraw] = useState(false);


    const handleInput = event => {
        setWithdrawn(event.target.value);
        console.log(withdrawn);
        if (withdrawn>=0){
            setValidWithdraw(true);
        } else {setValidWithdraw(false)}
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`this should be ${balance} - ${withdrawn}`);

        let newBalance = parseInt(balance) - parseInt(withdrawn);

        if (newBalance <0) {
            alert(`INSUFFICIENT FUNDS!`);
            return
        }

        setBalance(parseInt(newBalance));
        console.log(balance);
        alert(`Withdrawn $${withdrawn}.00 from account.`);
    }

    return (
        <main className="pages">
            <Card
                // className=""
                // bgcolor="primary"
                header="Withdraw"
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
                            <button disabled={!validWithdraw ? true : false}>Withdraw</button>
                        </form>
                    </div>
                )}
            />
        </main>
    )
}

export default Withdraw;