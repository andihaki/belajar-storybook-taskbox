import React from "react";
import PropTypes from "prop-types";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => (
  <div className={`list-item ${state}`}>
    {/* checkbox sebelah kiri */}
    <label className="checkbox">
      <input
        type="checkbox"
        defaultChecked={state === "TASK_ARCHIVED"}
        disabled={true}
        name="checked"
      />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
    </label>
    {/* judul task */}
    <div className="title">
      <input
        type="text"
        value={title}
        readOnly={true}
        placeholder="Input title"
      />
    </div>

    {/* logo bintang */}
    <div className="actions" onClick={event => event.stopPropagation()}>
      {state !== "TASK_ARCHIVED" && (
        <a onClick={() => onPinTask(id)} href="#damnEsLint">
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
);

// data requirements
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};

export default Task;
