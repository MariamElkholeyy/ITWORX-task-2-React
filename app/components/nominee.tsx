
import styles from "./nominee.module.css"

type NomineeParams = {
    nomineeName: string;
    nominatedBy: string;
}


const Nominee = ({ nomineeName, nominatedBy }: NomineeParams) => 
{
    return (
        
        <div className={styles.nominee}>
            <img src="https://via.placeholder.com/50" alt={nomineeName}/>
            <div className={styles.nomineeInfo}>
                <h3>{nomineeName}</h3>
                <p>Nominated by : {nominatedBy}</p>
            </div>
        </div>
    );
};


export default Nominee;