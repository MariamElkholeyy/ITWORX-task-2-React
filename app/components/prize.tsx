import styles from "./prize.module.css"


type prizeProps ={
    rank : string;
    prize: string;
    img:string ;

}

const Prize =({rank , prize , img}:prizeProps)=>{
    return (
        <div className={styles.prizeContainer}>
            <div className={styles.text}>
                <h2 className={styles.rank}>{rank} place </h2>
                <p className={styles.description}>{prize}</p>
            </div>
            
            <div className={styles.prizeImg}>
                <img src={img} alt="prize"/>   
            </div>
            
        </div>
    )
}

export default Prize;