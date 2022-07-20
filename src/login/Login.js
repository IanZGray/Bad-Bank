import { useRef, useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../createAccount/register.css';
// import Card from "../context/Card";
import { useBankContext } from "../context/Context";

const Login = () => {


    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const { bank, setLoggedInUser } = useBankContext();
    const storedUsers = bank.users;

    const filteredNames = storedUsers.map((person) => {
        return person.name
    });

    const filteredPwd = storedUsers.map((person) => {
        return person.password
    });

    const filteredEmail = storedUsers.map((person) => {
        return person.email
    });

    // filtering through usernames to see if theres a match
    let currentUser = null

    const checkUser = async (e) => {
        e.preventDefault();
        for (let i=0; i <= storedUsers.length; i++){
        if (storedUsers[i].name === user) {
            currentUser = storedUsers[i]
            setLoggedInUser(currentUser.name);
            console.log(bank.loggedInUser)
            return currentUser;
        }
        };
    }
    // console.log(bank.loggedInUser);

    const testBank = async (e) =>
    {
        e.preventDefault();
        currentUser.balance = currentUser.balance - 100
    }
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {

        // vvv will be the filter test function instead of regex test vvv
    //     const result = checkUser(the filtered list);
    //     console.log(result);
    //     console.log(user);
    // console.log(the filtered list)

    // vvv will be the same function vvv
    //     setValidName(result);
    // }, [user])

    // useEffect(() => {
    //     const result = EMAIL_REGEX.test(email);
    //     console.log(result);
    //     console.log(email);
    //     setValidEmail(result);
    // }, [email])

    // useEffect(() => {
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    //     const match = pwd === matchPwd;
    //     setValidMatch(match);
    // }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        // e.preventDefault();

        // const v1 = USER_REGEX.test(user);
        // const v2 = EMAIL_REGEX.test(email);
        // const v3 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2 || !v3) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }

        // console.log(`new user is ${newUser}`);
        // console.log(newUser);
        // console.log(`bank is ${bank}`);
        // addUser(newUser);
        // let views = JSON.stringify(bank);
        // console.log(views);
        // // addUser(newUser);
        // console.log(user.at, pwd);
        // setSuccess(true);
    }

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                {success ? (
                    <div >
                        <Card.Title>You Are Logged In!</Card.Title>
                        <Button href="login" variant="primary">Log Out</Button><br/>
                        <Button href="deposit" variant="primary">Make a Deposit</Button>
                    </div>
                ) : (
                    <div >
                        
                        <Button variant="primary" onClick={checkUser}>test console</Button>
                        <Card.Title>{bank.loggedInUser} is logged in</Card.Title>
                        <Button variant="primary" onClick={testBank}>test minus</Button>
                        <Card.Title>Log In</Card.Title>
                            <div className="card-body">
                                <section>
                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <label htmlFor="username">
                                            Username:
                                            <span className={validName ? "valid" : "hide"} disabled="true">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className={validName || !user ? "hide" : "invalid"}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </span>
                                        </label>
                                        <input 
                                            typ="text"
                                            id="username"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            required
                                            aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                        />
                                        <p id="uidnote" className={userFocus && user && !validName || pwdFocus && pwd.length>0 && !validName || emailFocus && email.length>0 && !validName ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            4 to 24 characters.<br />
                                            Must begin with a letter.<br />
                                            Letters, numbers, underscores, hyphens allowed.
                                        </p>

                    {/* email section */}
                                        <label htmlFor="email">
                                            Email:
                                            <span className={validEmail ? "valid" : "hide"}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className={validEmail || !email ? "hide" : "invalid"}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </span>
                                        </label>
                                        <input 
                                            typ="text"
                                            id="email"
                                            autoComplete="off"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            aria-invalid={validEmail ? "false" : "true"}
                                            aria-describedby="emailnote"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                        <p id="emailnote" className={emailFocus && !validEmail && email || userFocus && user.length>0 && !validEmail || pwdFocus && pwd.length>0 && !validEmail ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            Must be valid email address<br />
                                        </p>
                    {/* email section ends */}

                                        <label htmlFor="password">
                                            Password:
                                            <span className={validPwd ? "valid" : "hide"}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </span>
                                        </label>
                                        <input 
                                            typ="password"
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                        <p id="pwdnote" className={pwdFocus && !validPwd || userFocus && user.length>0 && !validPwd || emailFocus && email.length>0 && !validPwd ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            8 to 24 characters.<br />
                                            Must include uppercase and lowercase letters, a number and a special character.<br />
                                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="percent">%</span>
                                        </p>

                                        <Button disabled={!validName || !validPwd || !validEmail ? true : false} variant="primary" onClick={handleSubmit}>Create Account</Button>
                                    <p>
                                        Already Registered?<br />
                                        <span className="line">
                                            <a href="login">Sign In</a>
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