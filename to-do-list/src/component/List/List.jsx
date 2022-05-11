import React, { useState, useEffect } from "react";

const List = ({ item, number, HandleModify, handleDelete }) => {
  const [modifying, setModifying] = useState(false);
  const [newValue, setNewValue] = useState(item);
  function modifynding(){

    return <button>guradar</button>
        
    
  }

  function HandleModify(e) {
    setModifying(true);
  }

  return (
    <>
    {modifying?<modifying/>:

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
