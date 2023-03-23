
import Home from "./components/Home";
import {context} from './context/WorkoutContext'
import { useState } from "react";

function App() {

  const [data, setData] = useState([]);


  return (
    <div>
      <context.Provider value={{data, setData}}>
        <Home />
      </context.Provider>
   
 
    </div>
  );
}

export default App;
