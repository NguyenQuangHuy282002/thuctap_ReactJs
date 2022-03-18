import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
Todo.propTypes = {};

function Todo(props) {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </div>

  );
}

export default Todo;
