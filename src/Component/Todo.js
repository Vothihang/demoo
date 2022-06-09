import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTool";
import axios from "axios";

const Todo = () => {
  const [todoState, setTodoState] = useState([]);
  //todoState hiển thị trạng thái ban đầu của Todo có các object
  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get( //Giả sử chúng ta muốn lấy một số tệp JSON từ máy chủ của mình. Chúng ta sẽ viết một hàm sử dụng thư viện axios
                                // . Chúng ta phải chờ đợi phản hồi từ máy chủ, rồi mới setTodoState
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        setTodoState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTodo();
  },[]); //useEffect gọi tới hàm setTodoState nếu không có 1 list phụ thuộc dẫn tới vòng lặp vô hạn. 
          //để sửa lỗi này đưa thêm 1 array trống làm tham số thứ 2 cho useEffect
          

  const markComplete = (id) => {
    //sử dụng để thay đổi trạng thái các công viêc dựa vào id
    const newTodos = todoState.map((todo) => {
      // cho toàn bộ todoState
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodoState(newTodos);
  };

  const deleteTodo = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/ ${id}`);
      const newTodos = todoState.filter((todo) => todo.id !== id);
      setTodoState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };
  const addTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
        
          title,
          completed: false
        }
      );
    
      const newTodos = [...todoState, res.data];
      setTodoState(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AddTodo addTodoFun={addTodo} />
      {todoState.map((todo) => {
        // map duyệt qua từng biến của todoState trả về tham số todo
        return (
          <TodoItem // trả về TodoItem
            key={todo.id}
            todoProps={todo}
            mak={markComplete} //hàm này được truyền vào todoItem dưới dạng props
            deleteTodofun={deleteTodo}
          />
        );
      })}
    </div>
  );
};
export default Todo;
