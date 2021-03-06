import React from "react";
import ReactDOM from "react-dom";
import PureTaskList from "./TaskList";
import { withPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the line", () => {
  const div = document.createElement("div");
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  ReactDOM.render(<PureTaskList tasks={withPinnedTasks} {...events} />, div);

  // expect task dengan "task 6 pinned" di render paling atas
  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
