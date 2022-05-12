import React, { useState, useEffect } from "react";

const List = ({ item, number, handleUpdate, handleDelete }) => {
  const [modifying, setModifying] = useState(false);
  const [newValue, setNewValue] = useState(item);
  

  const ChangeValue=()=>{  
    return (
      <>
      <form onSubmit={updateValue} >
    <input defaultValue={newValue} dataId={number}  />
    <button>Actualizar</button>
      </form>
      </>
    )
  }
  const updateValue=(e)=>{
    e.preventDefault()
    console.dir(e.target[0].value);
    handleUpdate(e.target[0].value,e.target[0].attributes[0].value)
    setModifying(false)
    
  }
  function HandleModify(e) {
    setModifying(true);
  }

  return (
    <>
    {modifying?
    <>
    <ChangeValue />
    </>
      :
      <li value={item}>
        {item} {number}
        <img
          onClick={HandleModify}
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/24/000000/external-edit-interface-kiranshastry-solid-kiranshastry-1.png"
        />
        <img
          onClick={() => handleDelete(number)}
          src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
        />
      </li>
    }
    </>
  );
};

export default List;
