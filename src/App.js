
import React, { useState } from 'react'
import List from './List'
function App() {
  const [list,setList]=useState([])
  const [filterList,setFilterList]=useState([])
  const [todo,setTodo]=useState({
    title:'',
    desc:'',
    status:'',

  })
  const [editId,setEditId]=useState()
  const [isEdit,setIsEdit]=useState(false)



  const {title,desc,status}=todo;
function change(e){
  if(!isEdit){
  setTodo({...todo,[e.target.name]: e.target.value,id:Date.now() + Math.random()})
  }else{
  setTodo({...todo,[e.target.name]: e.target.value})
  }
}

function handleSubmit(e){
  e.preventDefault()
  if(!isEdit){
  setList([...list,todo])
  }else{
   setIsEdit(false)
   let newData=[];
   list.map((item,index)=>{
      if(item.id==editId){
        newData[index]=todo
      }else{
        newData[index]=list[index]
      }
    })
    setList(newData)
  }
  setIsEdit(false)


}

function handleDelete(id){
  const filterData=list.filter(el=>el.id!=id);
  setList(filterData)
}

function handleEdit(id){
  setIsEdit(true)
  setEditId(id)
  const specificItem = list.find((item) => item.id === id);
  setTodo(specificItem)
}

function handleFilter(status){
  if(status!='all'){
  const filterData=list.filter(el=>el.status==status);
  setFilterList(filterData)
  }else{
    setFilterList([])
  }
}

const todoList=filterList.length>0?filterList:list
  return (
      
       <>
        <form  onSubmit={handleSubmit}>
          <label>title</label>
          <input name='title' value={title} onChange={change}/><br></br><br></br>
          <label>description</label>
          <input name='desc' value={desc} onChange={change}/><br></br><br></br>
          <label>status</label>
          <select
        onChange={change} name="status"
         >
       <option >
       select option
     </option>
      <option value="pending">
    pending
     </option>
    <option value="completed">
    completed
        </option>
      </select>

          <input type="submit" />
         </form>
      <h1>all todos</h1>
      <button onClick={()=>handleFilter('all')}>all</button>
      <button onClick={()=>handleFilter('pending')}>all pending</button>
      <button onClick={()=>handleFilter('completed')}>all complete</button>
 
    <List  todoList={todoList} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>

  )
}

export default App





























































