import React, {useState} from "react"
import PropTypes from "prop-types"

const AddTodo = props => {
   const addTodo= props.addTodoFun
    const [title, setTitle] =useState('')


    const addTodoFormStyle= {
        display: 'flex'
    }
    const addTodoInputStyle ={
        flex:'10',
        padding: '5px'
    }
    

    const changeTitle= event =>{// thực thi khi value khác với value trước đó
        setTitle(event.target.value)//event nhận những value mà user thao tác
        
   
    }

    const addSingleTodo= event =>{// event nhận những giá trị người dùng thao tác nút thêm
        event.preventDefault()// ngăn chặn xử lý mặc định của trình duyệt khi xảy ra sự kiện.
        if(  title!==''){
            addTodo(title)// khi người dùng gõ vào input thì trạng thái sẽ đc ghi nhận trong title, gọi hàm addTodo để thêm công việc mới 
            setTitle('')// quay trở lại rỗng đưa title vào giá trị của input là value={title}
        }
    }
    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input type='text' name='title' placeholder='Thêm việc' style={addTodoInputStyle}
             value={title} //  nhận lại từ component tự động xóa dòng chữ trong input để title là chuỗi rỗng
            onChange={changeTitle} // gõ gì vào input thì onchange có nhiệm vụ cập nhật lại title trong component bằng những gì người dùng gõ 
                                          //vào sau khi thêm công việc vào
                                        //setTitle lại là rỗng  sau đó value={title}...
            />
            <input type='submit' value='Thêm' className ='btn' />
        </form>
    )
}
AddTodo.propTypes={
    addTodoFun :PropTypes.func.isRequired
}
export default AddTodo