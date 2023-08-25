import React, { useState } from 'react'
import { addTaskToList } from './slices/taskSlice';
import { useDispatch } from 'react-redux';





const AddTask = () => {

  const dispatch = useDispatch()

 
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  const addTask = (e)=>{
    e.preventDefault();
    console.log({title, description});
    dispatch(addTaskToList({title, description}))
    setTitle('')
    setDescription('')

  }
  return (
    <>
    
    <section className="  container w-50 bg-dark text-white rounded">
    <div className="mb-3">
  <label  className="form-label">Task Title</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Task Title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div className="mb-3">
  <label  className="form-label">Task Description</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Task Description" value = {description} onChange={(e)=>setDescription(e.target.value)} />
</div>
<div className='ms-5'>
    <button type="submit" className="btn btn-primary" onClick={addTask}>Add Task</button>
  </div>
    </section>
    </>
  )
}

export default AddTask