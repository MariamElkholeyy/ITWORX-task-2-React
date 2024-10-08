
import styles from "./nominee.module.css"
import Image from 'next/image'

type NomineeParams = {
    nomineeName: string;
    nominatedBy?: string;
    position?:string;
    experience?:string | number;
    voteNumber?:number;
}


const Nominee = ({ nomineeName, nominatedBy ,position  ,experience ,voteNumber}: NomineeParams) => 
{
    return (
        
        <div className={styles.nominee}>
            <div className={styles.nomineepic}>
                <img src={"https://via.placeholder.com/50"} alt={nomineeName}/>
            </div>
            <div className={styles.nomineeInfo}>
                <h3>{nomineeName}</h3>
                {nominatedBy && <p>Nominated by: {nominatedBy}</p>}
                {position && experience &&  <p>Position: {position} . {experience} years of experience. </p>}
                {voteNumber && <p>Votes : {voteNumber}</p>}
            </div>
        </div>
    );
};


export default Nominee;