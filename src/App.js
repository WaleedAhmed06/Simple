import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import Select from './Components/Select';
import Table from './Components/Table';
function App() {
const [input, setInput] = useState("");
const [input2, setInput2] = useState("");
const [selectValue, setSelectValue] = useState("");
const [selectValue2, setSelectValue2] = useState("");
const [tableData, setTableData] = useState([
  {
  id: 1, 
  userName: "WALEED AHMED", 
  age: 22, 
  institute:"SAIM", 
  isActive: "true"},
  {
    id: 2, 
    userName: "ahmed", 
    age: 20, 
    institute:"SAIM", 
    isActive: "true"},
    {
      id: 3, 
      userName: "abdul ahmed", 
      age: 28, 
      institute:"SAIM", 
      isActive: "true"},
      {
        id: 4, 
        userName: "abdul rehmen", 
        age: 28, 
        institute:"SAIM", 
        isActive: "true"},
        {
          id: 5, 
          userName: "waleed ahmed", 
          age: 28, 
          institute:"SAIM", 
          isActive: "true"},
          {
            id: 6, 
            userName: "abdul", 
            age: 28, 
            institute:"SAIM", 
            isActive: "true"},
            {
              id: 7, 
              userName: "ahmed", 
              age: 28, 
              institute:"SAIM", 
              isActive: "true"},
              {
                id: 8, 
                userName: "abu ahmed", 
                age: 28, 
                institute:"SAIM", 
                isActive: "true"},]);;
const [cardsData, setCardsData] = useState(false);


// Input Function that take username Value

const handleInput=(e)=>{

  setInput(e.target.value)
  console.log(e.target.value)
}
// Input Function that take Institute Value
const handleInput2=(e)=>{

  setInput2(e.target.value)
  console.log(e.target.value)
}

// Select Function that shows age menu
const handleSelect =(e)=>{
setSelectValue(e.target.value)
}
// Select Function that shows active menu
const handleSelect2 =(e)=>{
setSelectValue2(e.target.value)
}

// Button Function That Shows Data in Table
const handleClickData = ()=>{
setTableData([...tableData, { id: tableData.length + 1, userName: input, age: selectValue, institute:input2, isActive: selectValue2}],)
setInput("");
setInput2("");
setSelectValue("");
setSelectValue2("");

}

const handleToggle = ()=>{
setCardsData(!cardsData)
}



  return (
    <div className="App">
      <div className='container'>
        <p>BOILERPLATE</p>
  <Input label="Username"
  type="text" value={input} onChange={handleInput}/>
<br/><br/><br/>
  <Input label="Institute" type="text" value={input2} onChange={handleInput2}/>
  <br/><br/><br/>
  <Select
  label="Age"
  value={selectValue}
  onChange={handleSelect}
  optionList={[
    { value: '', label: 'Select Age' },
    { value: '18', label: '18' },
    { value: '20', label: '20' },
    { value: '22', label: '22' },
    { value: '24', label: '24' },
    { value: '26', label: '26' },
    { value: '28', label: '28' },
  ]}
/>
<br/><br/><br/>
  <Select
  label="Active"
  value={selectValue2}
  onChange={handleSelect2}
  optionList={[
    { value: "", label: "Select Active" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ]}
/>
<br/><br/><br/>
  <Button label="Click" onClick={handleClickData}/>

  <br/>
  <br/>
  <br/>
  <Table
  data={tableData}
 
  />
  <br/>
  <br/>
  <br/>
   <Button label="Toggle" onClick={handleToggle}/>
  {cardsData &&(
  <Card
  id={1}
  userName="WALEED AHMED"
  age={22}
  institute="SAIM"
  isActive={true}
  />)
  }
  </div>
    </div>
  );
}

export default App;
