import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./component/List/List";
import ListToDid from "./component/ListToDid/ListToDid";

const App = () => {
  const [listToDo, setListToDo] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    let newArray = [...listToDo, { task: e.target[0].value, did: false }];
    setListToDo(newArray);

    document.querySelector("input").value = "";
  };
  const handleDelete = (num) => {
    console.dir(num);
    let deleteArray = listToDo.filter((item, index) => index != num);
    setListToDo(deleteArray);
  };

  const handleUpdate = (nuevo, number) => {
    let ListUpdate=null;
    console.log(typeof nuevo === "boolean");
    if (typeof nuevo === "boolean") {
      ListUpdate = listToDo.map((item, index) => {
        console.log(number);
        if (index === parseInt(number)) {
          return (listToDo[number] = { ...listToDo[number], did: nuevo });
        }

        return item;
      });
    } else {
      ListUpdate = listToDo.map((item, index) => {
        console.log(number);
        if (index === parseInt(number)) {
          return (listToDo[number] = { ...listToDo[number], task: nuevo });
        }

        return item;
      });
    }
    nuevo=""
    console.log(ListUpdate);
    setListToDo(ListUpdate);
    
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
              <>
                {!item.did ? (
                  <List
                    key={index}
                    item={item}
                    number={index}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                ) : null}
              </>
            ))
          : "no hay Nada que mostrar,carga una nueva tarea :)"}
      </ul>
      <div className="accordion accordion-flush" hidden id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
            Tareas completadas
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
           
              {listToDo
                ? listToDo.map((item, index) => (
                    <>
                      {item.did ? (
                        <>
                        {document.querySelector(".accordion-flush").removeAttribute("hidden")}
                          <ListToDid
                            key={index}
                            item={item}
                            number={index}
                            handleDelete={handleDelete}
                          />
                        </>
                      ) : null
                      }
                    </>
                  ))
                :null}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
