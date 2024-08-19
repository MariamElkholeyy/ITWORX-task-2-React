import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";


export default function Home() {
    return (
        <>
            <title>Login with us</title>
            <body>
                <div className={styles.flex_r}>
                    <div className="flex-r login-wrapper">
                        <div className="login-text">
                            <div className="logo">
                                <span><img src="images/logo.png" /></span>
                                <span>Acme</span>
                            </div>
                            <h1>Log in</h1>
                            <p>It&apos;s not long before you embark on this journey!</p>

                            <form className="flex-c">
                                <div className="input-box">
                                    <span className="label">E-mail</span>
                                    <div className=" flex-r input">
                                        <input type="text" placeholder="name@abc.com"/>
                                            <i className="fas fa-at"></i>
                                    </div>
                                </div>

                                <div className="input-box">
                                    <span className="label">Password</span>
                                    <div className="flex-r input">
                                        <input type="password" placeholder="8+ (a, A, 1, #)"/>
                                            <i className="fas fa-lock"></i>
                                    </div>
                                </div>

                                 {/* <div className="check">
                                    <input type="checkbox" name="" id="">
                                        <span>I've read and agree with T&C</span>
                                </div>  */}

                                <input className="btn" type="submit" value="Create an Account"/>
                                    <span className="extra-line">
                                        <span>Don&apos;t have an account?</span>
                                        <Link className={styles.link}href="signup.html">Sign Up</Link>
                                    </span>
                            </form>

                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}   