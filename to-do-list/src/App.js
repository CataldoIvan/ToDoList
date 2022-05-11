import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./component/List/List";

const App = () => {
  const [listToDo, setListToDo] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    let newArray = [...listToDo, e.target[0].value];
    setListToDo(newArray);

    document.querySelector("input").value = "";
  };
  const handleDelete = (num) => {
    console.dir(num);
    let deleteArray = listToDo.filter((item, index) => index != num);
    setListToDo(deleteArray);
  };
  

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input className="input" />
        <button>Guardar</button>
      </form>

      <ul>
        {listToDo
          ? listToDo.map((item, index) => (
              <List
                key={index}
                item={item}
                number={index}
                handleDelete={handleDelete}
              />
            ))
          : "no hay Nada que mostrar,carga una nueva tarea :)"}
      </ul>
    </div>
  );
};

export default App;
