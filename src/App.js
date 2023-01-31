import logo from './logo.svg';
import './App.css';
import Header  from "./MyComponents/Header";
import  TodosItem  from "./MyComponents/TodosItem";
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer';
import React,{useState} from 'react';
function App() {

const onDelete=(todo)=>{
  //console.log("I am OnDelete"+ todo+"\n");
  //console.log("I am OnDelete function called");
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  
}

const [todos,setTodos]=useState([
    {
      sno : 1,
      titles : "Goto the Market",
      desc : "You need to go to the market to done this job1"
    },
    {
      sno :2,
      titles : "Study Time",
      desc : "this time is our study Time job2"
    },
    {
      sno :3,
      titles : "sport time",
      desc : "this is your play time job3"
    }

  ]);
  return (
  <>
  <Header title="My Todos List"/>
  {/* <TodosItem/> */}
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
  </>    
  );
}

export default App;
