import { createStore } from "redux";

// actions part
export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK"
};

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

// reducers part
const taskStateReducer = taskState => {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      )
    };
  };
};

// bagaimana reducer merubah data berdasarkan actions
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

// initial state
const defaultTasks = [
  { id: "1", title: "Coding", state: "TASK_INBOX" },
  { id: "2", title: "Reading articles about coding", state: "TASK_INBOX" },
  { id: "3", title: "Watching tutorial about coding", state: "TASK_INBOX" },
  { id: "4", title: "Listening podcast about coding", state: "TASK_INBOX" }
];

// export constructor
export default createStore(reducer, { tasks: defaultTasks });
