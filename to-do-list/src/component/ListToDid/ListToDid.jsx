import React from "react";
import "./ListToDid.css"

const ListToDid = ({ item, number, handleDelete }) => {
  return (
    <>
      <div className="did">
        {item.task} {number}
        <img
          onClick={() => handleDelete(number)}
          src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
        />
      </div>
    </>
  );
};

export default ListToDid;
