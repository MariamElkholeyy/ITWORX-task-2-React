import styles from "./winners.module.css"

type winnerProps ={
    name:string;
    role : string;
    img :string;
}


const Winner= ({name , role , img}:winnerProps) =>{
    return (
        <div className={styles.winner}>
            <div className={styles.winnerImg}>
                <img src={img} alt={name} className={styles.img}/>
            </div>
            <div className={styles.winnerInfo}>
                <h2 className={styles.h2}>{name}</h2>
                <p className={styles.p}>{role}</p>
            </div>
        </div>
    )
}

export default Winner;