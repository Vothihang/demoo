import React from "react";



const TodoItem = (props) => {
  const todo = props.todoProps;
  const makCom = props.mak;
  const deleteTodo =props.deleteTodofun



  const todoItemStyle = {
    backgroud: "#",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "none",
  };
  const deleteStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    boderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  return (
    <p style={todoItemStyle}>
      <input
        type="checkbox"
        onChange={makCom.bind(this, todo.id)} // khi giá trị checbox thay đổi thì onchange được kích hoạt  gọi tới hàm makcompleted mà makcompleleted nhận  
                                  //nhận tham số truyền vào là id 
        checked={todo.completed}
      />
      {todo.title} 
      <button style={deleteStyle} onClick={deleteTodo.bind( this, todo.id)} >Delete</button>
    </p>
  );
};


export default TodoItem;
