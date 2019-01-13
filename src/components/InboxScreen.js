import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TaskList from "./TaskList";

export const PureInboxScreen = ({ error }) => {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Wah wah</div>
          <div className="subtitle-message">ada yang salah boss</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
          <TaskList />
        </h1>
      </nav>
    </div>
  );
};

PureInboxScreen.propTypes = {
  error: PropTypes.string
};

PureInboxScreen.defaultProps = {
  error: null
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);
