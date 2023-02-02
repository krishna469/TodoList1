
import './App.css';
import Header from "./MyComponents/Header";
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';


function App() {

  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("Todo Addes Successfully", title, desc);
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {

      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      titles: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Header title="My Todo List" />

  //       <Routes>
  //         <Route path="/" element={<AddTodo />} />
  //         <Route path="/" element={<todos={todos} onDelete={onDelete} />} />
  //         <Route path="about" element={<About />} />
  //       </Routes>
  //       <Footer />

  //     </BrowserRouter>
  //   </>
  // );
  return (
    <>
        <Header title="My Todo List" />
        <AddTodo addTodo={addTodo} /> 
        <Todos todos={todos} onDelete={onDelete} /> 
        {/* <About /> */}
        <Footer />
    </>
  );
}

export default App;
