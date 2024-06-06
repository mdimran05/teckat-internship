import logo from './logo.svg';
import './App.css';

function App() {
  // const student = {
  //   name: "imran sheikh",
  //   age: 25,
  //   roll: 2
  // }
  // console.log(student, "student");

  // const student2 = {
  //   name: "muskan kumari",
  //   age: 25,
  //   roll: 5
  // }

  // if(student.age === student2.age){
  //   console.log("Friends");
  // }else{
  //   console.log("NOt friends")
  // }



 const people = [
  { name: "immo", age: 20 },
  { name: "saif", age: 21},
  { name: "saifee", age: 22},
 ];
  // for (let item of people){
  //   console.log(item.name)
  // };

  people.forEach((person) =>
    {
      // console.log(person.name)
    });
    const employee = {
  name: "puja",
  age: 89,
  occupation: "hmmm....",
};
console.log(employee.name);

const employees = [
  { name: "immo", age: 19, salary:50},
  { name: "saif", age: 20, salary: 45},
  { name: "saifee", age:21, salary:40},
];
const mappedEmployees = employess.map((item) =>{
  // console.log("item", item);
  return {
    ...item,
       salary: item.salary +100,
  };
},[]);
 //console.log("emoloyees", employees);
 //console.log("mappedEmployees",mappedEmployees);



  
  
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
