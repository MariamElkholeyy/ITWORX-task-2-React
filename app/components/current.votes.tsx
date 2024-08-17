import styles from "./current.votes.css"


const CurrentVotes = () => {
    return (
        <div>
            <h1><b>Employee of the Month</b></h1>
            <h3><b>Currently Voting</b></h3>
            <div className={styles.label}>70% of votes received</div>
            <div className={styles.progressContainer}>
                <div className={styles.progressBar}></div>
            </div>
        </div>
    )
}

export default CurrentVotes;