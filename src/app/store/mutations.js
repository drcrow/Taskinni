export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK_COMPLETE = 'SET_TASK_COMPLETE';
export const SET_TASK_GROUP = 'SET_TASK_GROUP';
export const SET_TASK_NAME = 'SET_TASK_NAME';


export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (groupID, taskID, ownerID) => ({
    type: CREATE_TASK,
    groupID,
    taskID,
    ownerID
});

export const setTaskCompletion = (taskID, isComplete) => ({
    type: SET_TASK_COMPLETE,
    taskID,
    isComplete
});

export const setTaskName = (taskID, taskName) => ({
    type: SET_TASK_NAME,
    taskID,
    name: taskName
});

export const setTaskGroup = (taskID, groupID) => ({
    type: SET_TASK_GROUP,
    taskID,
    groupID
});