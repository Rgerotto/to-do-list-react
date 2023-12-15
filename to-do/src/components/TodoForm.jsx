import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    }
  return (
    <div className='todo-form'>
        <form className='form-todoform' onSubmit={handleSubmit}>
            <input type="text" placeholder='digite aqui' value={value} onChange={(event) => setValue(event.target.value)}/>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">selecione</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Educao">Educao</option>
            </select>
            <button className='btn'>Criar tarefa</button>
        </form>

    </div>
  )
}

export default TodoForm