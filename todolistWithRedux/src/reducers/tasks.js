const initialState = [
    { id: 1, done: false, name: 'Learn ReactJS' },
    { id: 2, done: true, name: 'Learn css' },
    { id: 3, done: false, name: 'Web development' }];


function reducerTasks(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TASK':
            const stateCopy = [...state];

            stateCopy.forEach((todo) => {
                if (todo.id === action.taskId) {
                    todo.done = !todo.done;
                }
            });

            return stateCopy;
        case 'ADD_TASK':
            const stateCopy2 = [...state];
            const value = { id: stateCopy2.length + 1, done: false, name: action.taskName };
            stateCopy2.push(value);
            return stateCopy2;

        default:
            return state;
    }

}

export default reducerTasks;