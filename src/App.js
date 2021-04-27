import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Input from './components/Input'
import './App.css';
import DisplayForm from './components/DisplayForm'

function App() {
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);

  return (
    <div className="App">
      <Header/>
     <Input skill={skill} setSkill={setSkill} skillList={skillList} setSkillList={setSkillList} />
     <DisplayForm skillList={skillList} />
      <Footer/>

    </div>
  );
}

export default App;
