import React from 'react';

export default Task = ({ task: { id, title, state}, onArchiveTask, onPinTask }) => (
    <div className="list-item">
        <input type="text" value={title} readOnly={true} />
    </div>
)