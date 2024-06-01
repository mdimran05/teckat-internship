import logo from './logo.svg';
import './App.css';

function App() {
  const student = {
    name: "imran sheikh",
    age: 25,
    roll: 2
  }
  console.log(student, "student");

  const student2 = {
    name: "muskan kumari",
    age: 25,
    roll: 5
  }

  if(student.age === student2.age){
    console.log("Friends");
  }else{
    console.log("NOt friends")
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
