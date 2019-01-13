import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Task from "./Task";
import { archiveTask, pinTask } from "../lib/redux";

export const PureTaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>...</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">Tidak ada peer</div>
          <div className="subtitle-message">hmm..</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === "TASK_PINNED"),
    ...tasks.filter(t => t.state !== "TASK_PINNED")
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired
};

PureTaskList.defaultProps = {
  loading: false
};

const mapStateToProps = ({ tasks }) => {
  // console.log(tasks);
  return {
    tasks: tasks.filter(
      t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    )
  };
};

const mapDispatchToProps = dispatch => ({
  onArchiveTask: id => dispatch(archiveTask(id)),
  onPinTask: id => dispatch(pinTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PureTaskList);
