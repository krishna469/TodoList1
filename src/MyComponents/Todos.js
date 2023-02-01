import React from 'react'

import TodosItem from './TodosItem'
const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin : "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
        
      <h3 className="my-3"> This is Todos</h3>
      {props.todos.length===0?<h6>There is No Todos to Display</h6>:
      props.todos.map((todo)=>{

        return(
          
         <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          
        )
      })
      }
        
    </div>
  )
}

export default Todos
