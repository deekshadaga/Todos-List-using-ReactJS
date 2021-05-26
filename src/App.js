import './App.css';
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos"; //bracket used because used rafc ehich returns as constant not default like in header
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import {About} from "./About";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const OnDelete = (todo) => {
    //console.log("I am OnDelete of todo", todo);
    //Deleting like this doesn't work in react
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    //console.log("I am adding ", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    //console.log(myTodo)
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <Router>
      <Header title="My Todos List" />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={OnDelete} />
            </>
          )
        }}>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
