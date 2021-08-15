import { useState, useEffect } from "react";
import axios from "axios";



function App() {
  const [data , setData] = useState(null);
 


  const [input , setinput] = useState('');

  useEffect(()=>{
    axios.get('http://ergast.com/api/f1/2004/1/results.json')
    .then((data) =>{
      setData(data.data);
      console.log(data.data.MRData.RaceTable.Races[0].ircuit)
     


    })

    .catch((error) => console.log(error))


  })

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
