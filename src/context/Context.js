import React, { useState, createContext, useContext } from 'react';

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser:null,
        users: [
            {
                name: "John_Snow",
                email: "WorstEnding@hbo.com",
                password: "winterIsC0ming!",
                balance: 102800,
            },
            {
                name: "Spider_Man",
                email: "PParker@DailyBugle.com",
                password: "?!mySpid3rSenseIsTingling",
                balance: 40,
            },
            {
                name: "Hulk",
                email: "DBanner@TheCulverInstitute.com",
                password: "SMA$H!!!111",
                balance: 80060,
            },
            {
                name: "Bruce_Wayne",
                email: "darkKnight@batsignal.com",
                password: "1AmVeng@nce",
                balance: 9999999999,
            },
            {
                name: "Winnie_the_Pooh",
                email: "winnie@thepooh.com",
                password: "#h0neyFund",
                balance: 32,
            }
        ]
    });

    const [loggedUser, setLoggedUser] = useState('')

    const setActiveUser = (e) => {
        const user = bank.users.find(user => user.name === e);
        setLoggedUser(user);
    }

    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username,
        });
    }

    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user]
        });
    }

    return (
        <BankContext.Provider value={{
            bank,
            addUser,
            setLoggedInUser,
            loggedUser,
            setActiveUser,
        }}>
            {children}
        </BankContext.Provider>
    );
}