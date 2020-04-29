/* import Component from "@ember/component";
import { connect } from "ember-redux";
import { archiveTask, pinTask } from "../reducers/index";
const TaskList = Component.extend({});

const stateToComputed = (state) => {
  console.log(`state:${JSON.stringify(state, null, 2)}`);
  const {reducer}= state
  const {tasks}= reducer
  return {
    tasks: tasks.filter(
        (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
      ),
  };
};

export default connect(
   stateToComputed,
  (dispatch) => ({
    onArchiveTask: (id) => dispatch(archiveTask(id)),
    onPinTask: (id) => dispatch(pinTask(id)),
  })
)(TaskList);
 */

import Component from "@glimmer/component";
import { action } from "@ember/object";
import { connect } from "ember-redux";
import { archiveTask, pinTask } from "../reducers/index";
const stateToComputed = (state) => {
  const { reducer } = state;
  const { tasks } = reducer;
  return {
    tasks: tasks.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    ),
  };
};

class TaskList extends Component {
  constructor() {
    super(...arguments);
  }

  @action
  taskListOnPinTask(taskID) {
    console.log(`taskListOnPinTask:${taskID}`);
    this.actions.onPinTask(taskID);
  }
  @action
  taskListOnArchiveTask(taskID) {
    console.log(`taskListOnArchiveTask:${taskID}`);
    this.actions.onArchiveTask(taskID);
  }
}

export default connect(stateToComputed, (dispatch) => ({
  onArchiveTask: (id) => dispatch(archiveTask(id)),
  onPinTask: (id) => dispatch(pinTask(id)),
}))(TaskList);
