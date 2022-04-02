import './App.css';
import miauService from "./miauService.js"
import { useState } from 'react';
function App() {
  const [miau, setMiau] = useState()
  const putAndCat1 = () => {
    miauService().then((pic) => {
      setMiau(pic)
    })
  }
  const putAndCat = async () => {
    setMiau(await miauService())
  }
  return (
    <div className="App">
      <button
        onClick={putAndCat}>
        no me apretes
      </button>
      <img src={miau}>

      </img>
    </div>
  );
}

export default App;
