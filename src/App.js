
import { useState } from 'react';
import './App.css';
import Gender from './components/Gender';
import SearchBar from './components/SearchBar';

function App() {
  const [gender, setGender] = useState("");
  const genderHandler = (inputGender) => {
    fetch("https://api.genderize.io/?name=" + inputGender).then(response => response.json()).then(response => {
      const gender = response.gender;
      setGender(gender);
    })
  }



  return (
    <div >
      <div><Gender gender={gender}></Gender></div>
      <SearchBar getGender={genderHandler}></SearchBar>
    </div>
  );
}

export default App;
