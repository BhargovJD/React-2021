import React,{useState} from 'react'

export default function EditForm(props) {

    const[value, setValue] = useState(props.task);

    const handleChnage = (e)=>{
        setValue(e.target.value);
    }

    const edit = (e) =>{
        e.preventDefault();
        props.editTodo(props.id, value);
        props.toggle();
    }

    return (
        <div>
            <form onSubmit={edit}>
                <div class="mb-3">
                    <input  onChange={handleChnage} value={value} type="text" class="form-control" id="text"/>
                </div>
                <button type="submit" class="btn btn-warning">Update</button>
            </form>
        </div>
    )
}
