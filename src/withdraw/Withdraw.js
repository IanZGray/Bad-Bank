import { useState, React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';
import { useBankContext } from '../context/Context';

const Withdraw = () => {
    const { bank, loggedUser } = useBankContext();
    const [withdrawal, setWithdrawal] = useState(0);
    const [loggedBalance, setLoggedBalance] = useState(loggedUser.balance);
    
    const user = bank.users.find(user => user.name === loggedUser.name);

    const handleInput = event => {
        setWithdrawal(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentBalance = parseFloat(user.balance)
        let removedFunds = parseFloat(withdrawal)
        let newBalance = currentBalance - removedFunds
        if (Number(removedFunds) && removedFunds > 0 && newBalance >= 0){
            user.balance = newBalance
            setLoggedBalance(user.balance)
            alert(`Your withdrawal of $${removedFunds} has been processed.`)
        } else if (Number(removedFunds) && newBalance < 0) {
            alert (`INSUFFICIENT FUNDS!`)
        } else if (Number(removedFunds) && removedFunds < 0) {
            alert (`YOU CANNOT WITHDRAW A NEGATIVE, VALUE`)
        } else if (!Number(removedFunds) && removedFunds != 0) {
            alert (`YOU MUST INPUT A NUMBER!`)
        }
    }

    return (
        <main className="pages">
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    {bank.loggedInUser ? (
                        <>
                            <Card.Title className="main-header">Withdraw</Card.Title>
                            <Card.Text>Hello, {user.name}!</Card.Text>
                            <Card.Text>Balance ${loggedBalance}</Card.Text>
                            <input
                                name="dollars"
                                placeholder="0"
                                onChange={handleInput}
                            ></input>
                            <Button disabled={!withdrawal ? true : false} variant="primary" onClick={handleSubmit}>Withdraw</Button>
                        </>
                ) : (
                    <div >
                        <Card.Title className="secondary-header">You Must Log In To Make A Withdrawal!</Card.Title>
                        <Link to="/login"><Button variant="primary">Log In</Button></Link><br />
                        <br /><p> Don't have an account yet? </p>
                        <Link to="/createAccount"><Button variant="primary">Create Account</Button></Link>
                    </div>
                )}
                  </Card.Body>
            </Card>
        </main>
    )
}

export default Withdraw;