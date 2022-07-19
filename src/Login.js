import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './register.css';
import Card from "./Context";

const Login = () => {

    return (
        <Card
            // bgcolor="primary"
                header="Log In"
                body = {(
                <div >
                    <div class="card-body">
                        <section>

                            <form >
                                <label >
                                    Username:
                                </label>
                                <input 
                                    typ="text"
                                    id="username"
                                    
                                    autoComplete="off"
                                    
                                    required

                                    aria-describedby="uidnote"
                                    
                                />
                                <p id="uidnote" >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    This User Name does not exist.<br />
                                </p>

        {/* email section */}
                                <label >
                                    Email:
                                    <span >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <input 
                                    typ="text"
                                    id="email"
                                    // ref={userRef}
                                    autoComplete="off"

                                    required

                                    aria-describedby="emailnote"

                                />
                                <p id="emailnote" >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    No account with this email address exists<br />
                                </p>
        {/* email section ends */}

                                <label htmlFor="password">
                                    Password:

                                </label>
                                <input 
                                    typ="password"
                                    id="password"

                                    required

                                    aria-describedby="pwdnote"

                                />
                                <p id="pwdnote" >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Invalid Password!
                                </p>


                                <button disabled="true">
                                    Login
                                </button>
                            </form>
                            <p>
                                Not a member yet?<br />
                                <span className="line">
                                    <a href="createAccount">Create Account</a>
                                </span>
                            </p>
                        </section>
                    </div>
                </div>
            )}
        />
    )
}

export default Login;