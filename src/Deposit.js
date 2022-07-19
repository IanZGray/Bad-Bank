import { useState } from 'react';
import Card from './Context';
import './index.css';
import "./deposit.css";
// 
// [balance, useBalance] = Context;

const Deposit = () => {
    // [balance, useBalance] = useState(0);

    return (
        <main className="pages">
            <Card
                className=""
                // bgcolor="primary"
                header="Deposit"
                body={(
                    <div>
                        hello
                    </div>
                )}
            />
        </main>
        // <h1>{balance}</h1>
    )
}

export default Deposit;