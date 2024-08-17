import Navbar from "../components/navbar";
import { Title, ReasonTitle , Submit } from "../components/title";
import styles from "./page.module.css";


export default function Home() {
    return (
        <>
        <Navbar/>
        <div className={styles.container}>
            <h1 className={styles.h1}>Nominate a Colleague</h1>
            <Title label="Nominee's Name" placeholder="Enter First and Last Name"></Title>
            <Title label="Nominee's Email" placeholder="Email Address"></Title>
            <ReasonTitle label="Reason for Nomination "></ReasonTitle>
            <Title label="Your Name" placeholder="First and Last Name"></Title>
            <Title label="Your Email" placeholder="Email Address"></Title>
            <Submit></Submit>
        </div>
        </>
    );};