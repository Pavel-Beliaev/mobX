import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import TodoClass from "../store/todo";

interface TodoProps {
    store: TodoClass;
}

const Todo: FC<TodoProps> = observer(({store}) => {

    return (
        <div className='todos'>
            {store.todos.map(t =>
                <div className='todo' key={t.title}>
                    <input type="checkbox" checked={t.completed} onChange={() => store.completedTodo(t.id)}/>
                    {t.title}
                    <button onClick={() => store.removeTodo(t.id)}>X</button>
                </div>
            )}
            <button onClick={() => store.fetchTodos()}>Fetch Todos</button>
        </div>
    );
});

export default Todo;