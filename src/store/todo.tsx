import {makeAutoObservable, action} from "mobx";

interface TodoType {
    id: number,
    title: string,
    completed: boolean,
}
class TodoClass {
    todos: TodoType[] = [
        {id: 1, title: 'text 1', completed: false},
        {id: 2, title: 'text-2', completed: false},
        {id: 3, title: 'text_3', completed: false},
    ]

    constructor() {
        makeAutoObservable(this)
    }
    addTodo(todo: TodoType) {
        this.todos.push(todo)
    }
    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completedTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ?
            {...todo, completed: !todo.completed} : todo)
    }
    async fetchTodos() {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            this.todos = [...this.todos, ...json]
        } catch (error) {
            console.error('Error fetching:', error)
        }
    }
}

export default TodoClass;