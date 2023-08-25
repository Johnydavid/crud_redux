
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateTaskInList } from './slices/taskSlice';
import { useDispatch } from 'react-redux';

const MyVerticallyCenteredModal=(props)=> {
  const{selectedTask} = useSelector((state)=> state.tasks)
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const[id, setId] = useState(0)
  const dispatch = useDispatch();



    const updateTask = ()=>{
        props.onHide()
        dispatch(updateTaskInList({id, title, description}))
    }

    useEffect(()=>{
      if(Object.keys(selectedTask).length !==0){

      
      setTitle(selectedTask.title)
      setDescription(selectedTask.description)
      setId(selectedTask.id)
    }
    }, [selectedTask])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <section className=" my-5 container w-50">
    <div class="mb-3">
  <label  class="form-label">Task Title</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Task Title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div class="mb-3">
  <label  class="form-label">Task Description</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Task Description" value = {description} onChange={(e)=>setDescription(e.target.value)} />
</div>

    </section>
        
      </Modal.Body>
      <Modal.Footer>
     
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <div className='ms-5'>
    <button type="submit" class="btn btn-primary" onClick={updateTask}>Update Task</button>
  </div>
      </Modal.Footer>
    </Modal>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default MyVerticallyCenteredModal