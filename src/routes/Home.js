import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ todos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  // console.log(state, ownProps);
  return { todos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(dispatch);
  return {
    addToDo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
