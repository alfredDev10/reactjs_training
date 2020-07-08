export const changeTask = (taskId)=>{
    return {type: "CHANGE_TASK", taskId}
}

export const addTask = (taskName)=>{
    return {type: "ADD_TASK", taskName}
}
