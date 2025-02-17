import styles from '../App.module.css'
const BtnContainer = ({ onButtonClicked }) => {

    const buttons = [
        "C", "1", "2", "+",
        "3", "4", "-",
        "5", "6", "*",
        "7", "8", "/",
        "=", "9", "0", "."
    ];
    

    return <div className={styles.buttonContainer}>
        {buttons.map(item => <button key={item} onClick={() => onButtonClicked(item)} className={styles.button}>{item}</button>)}
    </div>
}

export default BtnContainer;