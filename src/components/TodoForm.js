import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput]= useState(props.edit ? props.edit.value : '');

    const inputRef = useRef (null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange = e=>{
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000 ),
            text: input
        });

        setInput('');
    };

    return (
        <div className='todo-box'>
            <form className='todo-from' onSubmit={handleSubmit}>
                {props.edit ? (
                <>
                <input 
                    type='text' 
                    placeholder='Update Your Item' 
                    value={input} 
                    name='text' 
                    className='todo-ipnut'
                    onChange={handleChange}
                    ref={inputRef}
                    className='todo-input edit'
                />
                <button className='todo-button edit'>Update</button>
                </>
                ):
                (   
                <>
                    <input 
                        type='text' 
                        placeholder='Add a Todo' 
                        value={input} 
                        name='text' 
                        className='todo-ipnut'
                        onChange={handleChange}
                        ref={inputRef}
                        className='todo-input'
                    />
                    <button className='todo-button'>Add Todo</button>
                </>
                )}


            </form>
        </div>
    )
}

export default TodoForm
