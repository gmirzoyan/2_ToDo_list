import React, {useState} from 'react';
import List from "./List";
import Controller from "./Controller";

let arr = [];

function App() {
    //
    // const initList = [
    //     {id: 0, title: 'learn JS', done: false},
    //     {id: 1, title: 'learn React', done: false},
    // ]

    const [list, setList] = useState([])


    const addTodo = (inputTask) => {
        const result = [...list]
        result.push({id: Math.random(), title: inputTask, done: false})
        setList(result)
    }

    const deleteTodo = (id) => {
        const result = list.filter((el, i) => el.id !== id)
        setList(result)
    }

    const deleteAllTodos = () => {
        if (window.confirm("Do you really want to delete all?")) {
            arr.push(...list);
            setList([]);
        }
    }

    const restoreAllTodos = () => {
        setList(arr)
        arr = [];
    }


    const doneTodo = (id) => {
        let result = list.map((el, i) => {
            if (el.id === id) return {...el, done: !el.done}
            return el;
        })
        setList(result)
    }

    const upDownTodo = (index, dir) => {
        const result = [...list]
        for (let i = 0; i < result.length; i++) {
            if (index === i) {
                let temp = result[i];
                if (dir === 'up') {
                    result[i] = result[i - 1];
                    result[i - 1] = temp;
                }
                if (dir === 'down') {
                    result[i] = result[i + 1];
                    result[i + 1] = temp;
                }
            }
        }
        setList(result);
    }


    return (
        <div className="container">
            <br/>
            <h3 style={{backgroundColor: "#3acad4", color: "red", padding: 5, width: 850}}>ToDo List</h3>

            <strong><span>{(new Date()).toLocaleDateString()}</span></strong>
            <strong><p><span>{(new Date()).toLocaleTimeString()}</span></p></strong>
            <br/>

            <Controller addTodo={addTodo} deleteAllTodos={deleteAllTodos} restoreAllTodos={restoreAllTodos}/>

            {list.map((el, i) => <List key={Math.random()} el={el} deleteTodo={deleteTodo} doneTodo={doneTodo} upDownTodo={upDownTodo}
                                       first={i === 0} last={i === list.length - 1} index={i} />)}

        </div>
    );
}

export default App;
