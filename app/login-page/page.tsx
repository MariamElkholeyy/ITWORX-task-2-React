'use client'
import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

export default function Home() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message === 'Login successful') {
        // Login successful, redirect to dashboard or whatever
        window.location.href = '/';
      } else {
        // Login failed, show error message
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <title>Login with us</title>
      <body className={styles.body}>
        <div className={styles.flexR}>
          <div className={styles.loginWrapper}>
            <div className={styles.loginText}>
              <div className={styles.logo}>
                <span><img src="images/logo.png" /></span>
                <span>Acme</span>
              </div>
              <h1>Log in</h1>
              <p> Its not long before you embark on this journey!</p>

              <form className={styles.flexC} onSubmit={handleSubmit}>
                <div className={styles.inputBox}>
                  <span className={styles.label}>E-mail</span>
                  <div className={styles.flexRInput}>
                    <input type="text" placeholder="name@abc.com" />
                    <i className="fas fa-at"></i>
                  </div>
                </div>

                <div className={styles.inputBox}>
                  <span className={styles.label}>Password</span>
                  <div className={styles.flexRInput}>
                    <input type="password" placeholder="8+ (a, A, 1, #)" />
                    <i className="fas fa-lock"></i>
                  </div>
                </div>

                {/* <div className={styles.check}>
                  <input type="checkbox" name="" id="">
                    <span>I've read and agree with T&C</span>
                </div> */}

                <input className={styles.btn} type="submit" value="Log In" />
                <span className={styles.extraLine}>
                  <span>Don`t have an account?</span>
                  <Link className={styles.link} href="signup.html">Sign Up</Link>
                </span>
              </form>

            </div>
          </div>
        </div>
      </body>
    </>
  );
}