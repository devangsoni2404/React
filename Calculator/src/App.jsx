import Display from './Components/Display'
import BtnContainer from './Components/BtnContainer'
import styles from './App.module.css'

function App() {

  return <div className={styles.calculator}>
      <Display></Display>
      <BtnContainer></BtnContainer>
  </div>

}

export default App
