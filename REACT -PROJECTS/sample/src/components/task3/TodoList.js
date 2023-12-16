import React, { useState } from "react";

const TodoList = () => {
  const [data, setdata] = useState("");
  const [datas, setdatas] = useState([]);
  const [show, setshow] = useState(false);
  const [editId, setEditId] = useState(0);

  const handleChange = (e) => {
    setdata(e.target.value);
  };

  const handleAdd = () => {
    setshow(true);
    setdatas([...datas, data]);
    setdata("");

    if (editId) {
      const findUpdateData = datas.find((item, index) => {
        return index == editId;
      });

      const indexOfUpdatedValue = datas.indexOf(findUpdateData);
      datas.splice(indexOfUpdatedValue, 1, data);
      // console.log(datas)
      setdatas(datas);

      // const deleteData = datas.filter((item) => {
      //   return item != findParticularData;
      // });
      // // console.log(deleteData)
      // setdatas([...deleteData, data]);
    }
  };

  const handleEdit = (e) => {
    setEditId(e.target.id);

    const id = Number(e.target.id);
    const UpdateItem = datas.find((item, index) => {
      return id === index;
    });
    // console.log(UpdateItem)
    setdata(UpdateItem);
  };

  const handleDelete = (e) => {
    const id = Number(e.target.id);
    // console.log(id, typeof id);
    const DeleteItem = datas.filter((item, index) => {
      // console.log(typeof index);
      return id !== index;
    });

    setdatas(DeleteItem);
  };

  // console.log(datas);

  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" value={data} onChange={handleChange} />
      <button onClick={handleAdd} disabled={data.length ? false : true}>
        {editId ? "Edit" : "Add"}
      </button>

      {show &&
        datas.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
              <div className="modify">
                <button onClick={handleEdit} id={index}>
                  Edit
                </button>
                <button onClick={handleDelete} id={index}>
                  Delete
                </button>
              </div>
            </ul>
          );
        })}
    </div>
  );
};

export default TodoList;
