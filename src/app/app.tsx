import Button from "components/Buttons";
import styles from "./app.module.css";
import { useState } from "react";


const App = (): JSX.Element => {
  const [count,setcount] = useState(0)
  return (
    <main className={styles.main}>
        <h1 className={styles.heading}>{count}</h1>
        <Button onClick={()=>{setcount(count+1)}}>Hola</Button>
    </main>
  );
};

export default App;
