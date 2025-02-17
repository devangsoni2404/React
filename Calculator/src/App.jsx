import Display from './Components/Display'
import BtnContainer from './Components/BtnContainer'
import styles from './App.module.css'
import { useState } from 'react'

function App() {

  let [calval,setCalVal] = useState([]);

  let onButtonClicked = (buttontext) => {
        if(buttontext === '=') {
           const result =  eval(calval);
           setCalVal(result);
        }

        else if(buttontext === "C"){
          setCalVal("");
        }

        else{
          let newcalval = calval+buttontext;
          setCalVal(newcalval);
        }
  }

  return <div className={styles.calculator}>
      <Display calval={calval}></Display>
      <BtnContainer onButtonClicked={onButtonClicked}></BtnContainer>
  </div>

}

export default App
