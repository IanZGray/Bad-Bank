import { useRef, useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import '../createAccount/createAccount.css';
import { Link } from "react-router-dom";
import { useBankContext } from "../context/Context";

const Login = () => {


    const userRef = useRef();
    const errRef = useRef();

    const [userName, setUserName] = useState('');
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const { bank, setLoggedInUser, setActiveUser } = useBankContext();
    
    // turn back on after grading
    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');
        const user = bank.users.find(user => user.name === userName);
        if (!user) {
            setErrMsg(`Not A Known User`);
            return;
        }
        if (user.password !== pwd) {
            setErrMsg(`Incorrect Password`);
            return;
        }
        setLoggedInUser(userName);
        setActiveUser(userName);
        setSuccess(true);
    }

    const logOut = async (e) => {
        e.preventDefault();
        setLoggedInUser(null);
        setPwd('');
        setUserName('');
        setSuccess(false);
    }

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                {success ? (
                    <div >
                        <Card.Title>You Are Logged In!</Card.Title>
                        {/* have this button set success to false and set username and pwd to '' */}
                        <Button variant="primary" onClick={logOut}>Log Out</Button><br/>
                        <Link to="/deposit"><Button variant="primary">Make a Deposit</Button></Link>
                    </div>
                ) : (
                    <div >
                            <Card.Title>Log In</Card.Title>
                            <div className="card-body">
                                <section>
                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <label htmlFor="username">
                                            Username:
                                        </label>
                                        <input 
                                            typ="text"
                                            id="username"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                            // aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                        />

                                        <label htmlFor="password">
                                            Password:
                                        </label>
                                        <input 
                                            typ="password"
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            // aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />

                                        <Button variant="primary" onClick={handleSubmit} disabled={!userName || !pwd ? true : false}>LOG IN</Button>
                                    <p>
                                        Don't Have an Account?<br />
                                        <span className="line">
                                            <Link to='/createAccount'>Create Account</Link>
                                        </span>
                                    </p>
                                </section>
                            </div>
                        </div>
                    )}
                </Card.Body>
        </Card>
    )

}

export default Login;