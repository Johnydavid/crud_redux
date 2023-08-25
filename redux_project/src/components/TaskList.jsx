import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTask, removeTaskFromList } from "./slices/taskSlice";

const TaskList = () => {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };

  const deleteTask = (task) => {
    console.log("Delete Task");
    dispatch(removeTaskFromList(task));
  };

  return (
    <>
      <div>
        <table className=" my-3 container table table-striped ">
          <thead>
            <tr className="text-center">
              <th scope="col"> #</th>
              <th scope="col"> Title</th>
              <th scope="col"> Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskList &&
              taskList.map((task, index) => {
                return (
                  <tr className="text-center" key={task.id}>
                    <td>{index + 1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary mx-3"
                        onClick={() => updateTask(task)}
                      >
                        {" "}
                        <i className="bi bi-pencil-square"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => deleteTask(task)}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskList;
