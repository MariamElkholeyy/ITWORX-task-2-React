import Nominee from "./nominee";
import styles from  "./voteNominee.module.css"


type NomineeParams = {
    nomineeName: string;
    nominatedBy?: string;
    position?:string;
    experience?:string | number;
}

const VoteNominee=({ nomineeName, nominatedBy ,position ,experience }: NomineeParams)=>{
    return(
        <div className={styles.container}>
            <div className={styles.nominee}>
                <Nominee nomineeName={nomineeName} position={position} experience={experience}/>
            </div>
            <button className={styles.vote}>Vote</button>
        </div>
    );
}

export default VoteNominee;