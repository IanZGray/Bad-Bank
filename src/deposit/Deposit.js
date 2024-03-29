import { useState, React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';
import { useBankContext } from '../context/Context';

const Deposit = () => {
    const { bank, loggedUser } = useBankContext();
    const [deposited, setDeposited] = useState();
    const [loggedBalance, setLoggedBalance] = useState(loggedUser.balance);

    const user = bank.users.find(user => user.name === loggedUser.name);

    const handleInput = event => {
        setDeposited(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentBalance = parseFloat(user.balance)
        let addedFunds = parseFloat(deposited)
        let newBalance = currentBalance + addedFunds
        if (Number(addedFunds) && addedFunds > 0){
            user.balance = newBalance
            setLoggedBalance(user.balance)
            alert(`Your deposit of $${addedFunds} has been recieved.`)
        } else if (Number(addedFunds) && addedFunds < 0) {
            alert (`YOU CANNOT DEPOSIT A NEGATIVE, VALUE`)
        } else if (!Number(addedFunds) && addedFunds != 0) {
            alert (`YOU MUST INPUT A NUMBER!`)
        }

    }

    return (
        <main className="pages">
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    {bank.loggedInUser ? (
                        <>
                            {/* <Card.Title className="main-header">Deposit</Card.Title> */}
                            <Card.Text>Hello, {user.name}!</Card.Text>
                            <Card.Text>Balance ${loggedBalance}</Card.Text>
                            <input
                                name="dollars"
                                placeholder="0"
                                onChange={handleInput}
                            ></input>
                            <Button disabled={!deposited ? true : false} variant="primary" onClick={handleSubmit}>Deposit</Button>
                        </>
                ) : (
                    <div >
                        <Card.Title className="secondary-header">You Must Log In To Make A Deposit!</Card.Title>
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

export default Deposit;