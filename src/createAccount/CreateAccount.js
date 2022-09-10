import { useRef, useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './createAccount.css';
import { useBankContext } from "../context/Context";

import '../app.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9-_%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i;

const Register = () => {
    const { bank, addUser } = useBankContext();

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
    
    // turn back on after grading
    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    let newUser = {
        name: user,
        email: email,
        password: pwd,
        balance: 0.00
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        addUser(newUser);
        setSuccess(true);
    }

    const resetForm = () => {
        setPwd('');
        setUser('');
        setEmail('');
        setMatchPwd('');
        setSuccess(false);
        console.log(bank);
    }

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                {success ? (
                    <div >
                        <Card.Title className="main-header">Account Created!</Card.Title>
                        <Link to='/login'><Button>Sign In</Button></Link><br/>
                        <Button onClick={resetForm} variant="primary">Add Another Account</Button>
                    </div>
                ) : (
                    <div >
                        <Card.Title className="main-header">Create Account</Card.Title>
                            <div className="card-body">
                                <section className='card-background'>
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

                                        <label htmlFor="confirm_pwd">
                                            Confirm password:
                                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </span>
                                        </label>
                                        <input 
                                            typ="password"
                                            id="confirm_pwd"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchPwdFocus(true)}
                                            onBlur={() => setMatchPwdFocus(false)}
                                        />
                                        <p id="confirmnote" className={matchPwdFocus && !validMatch ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            Must match the firs password input field.
                                        </p>
                                        <Button disabled={!validName || !validPwd || !validMatch || !validEmail ? true : false} variant="primary" onClick={handleSubmit}>Create Account</Button>
                                    <p>
                                        Already Registered?<br />
                                        <span className="line">
                                            <Link to='/login'>Sign In</Link>
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

export default Register;
