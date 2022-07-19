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
                balance: 102800.50,
            },
            {
                name: "Spider_Man",
                email: "PParker@DailyBugle.com",
                password: "?!mySpid3rSenseIsTingling",
                balance: 40.52,
            },
            {
                name: "Hulk",
                email: "DBanner@TheCulverInstitute.com",
                password: "SMA$H!!!111",
                balance: 80060.03,
            },
            {
                name: "Bruce_Wayne",
                email: "darkKnight@batsignal.com",
                password: "1AmVeng@nce",
                balance: 9999999999.99,
            },
            {
                name: "Winnie_the_Pooh",
                email: "winnie@thepooh.com",
                password: "#h0neyFund",
                balance: 32.76,
            }
        ]
    });

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
        }}>
            {children}
        </BankContext.Provider>
    );
}