import { useState, React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
// import Card from '../context/Card';
import '../index.css';
import "./deposit.css";
import { useBankContext } from '../context/Context';
// import { data } from 'jquery';

const Deposit = () => {
    const { bank } = useBankContext();
    const [deposited, setDeposited] = useState(0);
    const [logged, setLogged] = useState(false);
    const [userSelected, setUserSelected] = useState({})

    let currentUser=''
    const storedUsers = bank.users;
    const filteredNames = storedUsers.map((person) => {
        return person.name
    });

    const handleInput = event => {
        setDeposited(event.target.value);
    }

    // const selectUser = () => {
    //     userSelected = bank.users.filter(checkUser);
    // }
    // const checkUser = () => {
    //     return bank.users.name === bank.loggedInUser;
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser();
        if (userSelected.name === bank.loggedInUser) {
            setLogged(true);
        }
        switch(logged) {
            case false:
                alert(`Please Log In`)
                break;
            case true:
                console.log(userSelected.balance);
                console.log(deposited);
                console.log(bank.loggedInUser);
                console.log(userSelected.balance + deposited);

                setUserSelected.balance = userSelected.balance + deposited
                alert(`You have deposited $${deposited}.00 into your account.`)
        }
    }

    const updateUser = async (e) => {
        for (let i=0; i <= filteredNames.length; i++){
            if (storedUsers[i].name === bank.loggedInUser) {
                setUserSelected(storedUsers[i]);
            }
        };
    }
        // console.log(bank.loggedInUser);
    
    const testBank = async (e) => {
        e.preventDefault();
        currentUser.balance = currentUser.balance + deposited
    }

        // items.map((data) => (

        //     if(bank.loggedInUser === data.name){
        //         data.balance = total
        //     }

        //     return users
  
        //   ))
        
   


    return (
        <main className="pages">
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>Deposit</Card.Title>
                    <Card.Text>Hello, {bank.loggedInUser}!</Card.Text>
                    <Card.Text>Balance ${userSelected.balance}</Card.Text>
                        <input 
                        type="number"
                        min='0'
                        name="dollars"
                        placeholder="0"
                        onChange={handleInput}
                        ></input>
                        <Button variant="primary" onClick={handleSubmit}>Deposit</Button>
                  </Card.Body>
            </Card>
        </main>
    )
}

export default Deposit;