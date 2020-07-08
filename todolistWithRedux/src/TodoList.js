import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import NewTask from './NewTask';
import { changeName } from './actions/username';
import { addTask, changeTask } from './actions/tasks';


function TodoList(props) {

    const [newTask, setNewTask] = useState('');
    const [tempUsername, setTempUsername] = useState(props.username);

    function addTask(event) {
        setNewTask(event.target.value);
    }

    function handleClick() {
        props.onAddTaskClick(newTask);
        setNewTask('');
    }

    const itemsTasks = props.tasks.map((task, i) => {
        return (<li key={i}>
            <input type="checkbox" checked={task.done}
                onChange={() => props.onTaskClick(task.id)}
            />
            {task.name}</li>)
    });

    function handleInputNameChange(event) {
        setTempUsername(event.target.value);
    }

    function handleSubmitName() {
        props.changeName(tempUsername);
    }

    return (
        <Fragment>
            <h3>Salut {props.username}</h3>
            <ul>{itemsTasks}</ul>
            <NewTask addTask={addTask} taskValue={newTask}
                handleClick={handleClick} />
            <input type="text" name="username" value={tempUsername} onChange={handleInputNameChange} />
            <button onClick={handleSubmitName}> Changer de nom </button>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        username: state.username.username,
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (newName) => {
            dispatch(changeName(newName));
        },
        onTaskClick: (taskId) => dispatch(changeTask(taskId)),
        onAddTaskClick: (taskName) => dispatch(addTask(taskName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);