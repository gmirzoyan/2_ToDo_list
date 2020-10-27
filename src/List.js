import React, {useState} from 'react';


function List(props) {

    const [isConfirm, setIsConfirm] = useState(true)

    const buttonUp = () => {
        if (props.index === props.first) buttonUp.disabled = true
        else props.upDownTodo(props.index, 'up')
    }

    const buttonDown = () => {
        if (props.index === props.last) buttonDown().disabled = true
        props.upDownTodo(props.index, 'down')
    }

    const confirmDeleteYes = () => {
        setIsConfirm(!isConfirm)
    }

    const confirmDeleteNo = () => {
        setIsConfirm(true)
    }

    return (
        <div>
            <br/>
            <li>
                {props.el.done ? <span>✅<span
                        style={{textDecoration: "line-through"}}>{props.el.title}</span></span> :
                    props.el.title}
                {' '}
                {isConfirm ? <>
                    <button type="button" className="btn btn-outline-danger"
                            onClick={confirmDeleteYes}>Delete
                    </button>
                    {' '}
                    <button type="button" className="btn btn-outline-info"
                            onClick={() => props.doneTodo(props.el.id)}>{props.el.done ? 'Undone' : 'Done'}</button>
                    {' '}
                    <button type="button" className="btn btn-secondary" style={{borderRadius: 50}}
                            onClick={buttonUp}
                            disabled={props.first}>⬆
                    </button>
                    {' '}
                    <button type="button" className="btn btn-secondary" style={{borderRadius: 50}}
                            onClick={buttonDown}
                            disabled={props.last}>⬇
                    </button>
                </> : <>
                    <strong style={{
                        color: "#3acad4",
                        fontsize: '20px',
                        padding: '10px',
                        border: '1px solid lightgray',
                        margin: '10px'
                    }}>Are
                        you sure?
                    </strong>
                    {' '}
                    <button type="button" className="btn btn-danger" style={{borderRadius: 10}}
                            onClick={() => props.deleteTodo(props.el.id)}>Yes
                    </button>
                    {' '}
                    <button type="button" className="btn btn-secondary" style={{borderRadius: 10}}
                            onClick={confirmDeleteNo}>No
                    </button>
                </>}
            </li>
        </div>
    );
}

export default List;
