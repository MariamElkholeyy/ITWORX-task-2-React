import styles from "./current.votes.module.css"


const CurrentVotes = () => {
    return (
        <div>
            <h3 className={styles.h3}><b>Currently Voting</b></h3>
            <div className={styles.label}>70% of votes received</div>
            <div className={styles.progressContainer}>
                <div className={styles.progressBar}></div>
            </div>
        </div>
    )
}

export default CurrentVotes;