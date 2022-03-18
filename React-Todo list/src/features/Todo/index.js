import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
Todo.propTypes = {};

function Todo(props) {

  const [arr, setArr] = useState([]);
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      item: todo,
      status: "Not completed",
    };
    setArr([...arr].concat(newTodo));
    setTodo("");
  }

  function changeStatus(item) {
    let completeTask = arr.map((task) => {
      if (task === item) {
        task.status = "Completed";
      }
      return task;
    });
    setArr(completeTask);

  }

  function deleteTask(task) {
    const removedTask = [...arr].filter(t => t !== task);
    setArr(removedTask);
  }
  return (
    <div className="Todo">
      <div>Todos</div>
      <div className="todo__add">
        <div className="header">
          Add a task
        </div>

        <div className="body">
          <h4>Item</h4>

          <form onSubmit={handleSubmit} >

            <input type="search" required className="form-control" placeholder="What do you want to do?" value={todo} onChange={(e) => setTodo(e.target.value)}>
            </input>

            <p>Enter what you want</p>

            <button className="btn btn-primary" type="submit"> Submit
            </button>
          </form>
        </div>
      </div>
      <div className="todo__task">
        <div className="header">
          Tasks
        </div>

        <table>
          <thead>
            <tr>
              <th width="40%">Item</th>
              <th width="20%">Status</th>
              <th width="40%">Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map(item => (
              <>
                <tr>
                  <td>{item.item}</td>
                  <td>{item.status}</td>
                  <td>
                    <a className="btn btn-primary" onClick={() => changeStatus(item)}>Complete</a>
                    <a className="btn btn-danger" onClick={() => deleteTask(item)}>Delete</a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;
