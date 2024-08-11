
import styles from './title.module.css'

type titleProps ={
    label : string ;
    placeholder ?: string ;
}

const Title = ({label , placeholder} : titleProps) =>{
    return(
        <div className={styles.title}>
            <label className={styles.label}>{label}<span className={styles.spanM}>*</span> </label>
            <input type="text" id="nom-name" name="nom-name" placeholder={placeholder} className={styles.placeholder}/>
        </div>
    );
}


const ReasonTitle =({label , placeholder} : titleProps) =>{
    return(
        <div className={styles.title}>
           <label className={styles.label} >{label}<span className={styles.spanM}>*</span></label>
           <textarea  className={styles.placeholder}></textarea>
        </div>
    );
}


const Submit =()=>{
    return(
        <div className={styles.submit}>
            <button className={styles.button}>
                Submit <br />Nomination
            </button>
        </div>
    );
}
export { Title , ReasonTitle , Submit};