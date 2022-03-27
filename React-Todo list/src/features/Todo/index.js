import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Modal, Input, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
Todo.propTypes = {};

function Todo(props) {

  const [arr, setArr] = useState([]);
  const [todo, setTodo] = useState("");
  const [valueInput, setValueInput] = useState({
    inputTask: "",
    inputEdit: "",
    indexEdit: 0,
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.length !== 4) {
      const newTodo = {
        item: todo,
        status: "Not completed",
      };
      setArr([...arr].concat(newTodo));
      setTodo("");
    } else {
      alert("wrong input");
      setTodo("");
    }
  }
  const handleOpenEdit = (index) => {
    setValueInput({
      ...valueInput,
      inputEdit: arr[index].item,
      indexEdit: index,
    });
    setIsOpen(!isOpen);
  };

  const handleSaveEdit = () => {
    let item = [...arr];
    let index = valueInput.indexEdit;
    item[index].item = valueInput.inputEdit;
    setArr(item);
    setIsOpen(!isOpen);
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
            {arr.map((item, index) => (
              <>
                <tr className={item.status === "Completed" ? 'todo-row-complete' : 'todo-row'}>
                  <td>{item.item}</td>
                  <td>{item.status}</td>
                  <td>
                    <a className="btn btn-primary" id="complete" onClick={() => changeStatus(item)}>Complete</a>
                    <a className="btn btn-primary" id="complete" onClick={() => handleOpenEdit(index)}>Edit</a>
                    <a className="btn btn-danger" id="delete" onClick={() => deleteTask(item)}>Delete</a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div>
          <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit</ModalHeader>
            <ModalBody>
              <Input
                placeholder="What do you wants to edit?"
                name="inputEdit"
                value={valueInput.inputEdit}
                onChange={handleInput}
              ></Input>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={handleSaveEdit}>
                Save
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Todo;
