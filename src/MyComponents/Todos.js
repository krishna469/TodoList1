import React from 'react'

import TodosItem from './TodosItem'
const Todos = (props) => {
  return (
    <div className="container">
        
      <h3 className="text-center my-3"> this is Todos</h3>
      {props.todos.length===0?<h3>There is No Todos to Display</h3>:
      props.todos.map((todo)=>{

        return <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      
      })
      }
        
    </div>
  )
}

export default Todos
