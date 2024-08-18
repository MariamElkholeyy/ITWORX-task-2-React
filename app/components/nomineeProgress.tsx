import Nominee from "./nominee";
import styles from "./nomineeProgress.module.css"


type NomineeParams = {
    nomineeName: string;
    nominatedBy?: string;
    position?:string;
    experience?:string | number;
    voteNumber?:number;
}


const NomineeProgress=({ nomineeName , voteNumber }: NomineeParams)=>{
    return(
        <div className={styles.container}>
            <div className={styles.nominee}>
                <Nominee nomineeName={nomineeName} voteNumber={voteNumber}/>
            </div>
            <p className={styles.precentage}>50 % </p>
        </div>
    );
}

export default NomineeProgress;