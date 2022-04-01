import React from 'react'
function List({todoList,handleDelete,handleEdit}) {

    return (
    <>
     { 
          todoList.map((item)=>{
        return (
          <>
          <div>{item.title}</div>
          <div>{item.desc}</div>
          <div>{item.status}</div>
          <button onClick={()=>handleDelete(item.id)}>delete</button>
          <button onClick={()=>handleEdit(item.id)}>Edit</button>
          </>
        )
      })
    }
</>
  )
}

export default List