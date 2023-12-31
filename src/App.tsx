import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import TodoClass from './store/todo'



function App() {

    const todoStore1 = new TodoClass();
    const todoStore2 = new TodoClass();

    return (
        <div className='app'>
            <Counter/>
            <Todo store={todoStore1}/>
            <Todo store={todoStore2}/>
        </div>
    );
}

export default App;
