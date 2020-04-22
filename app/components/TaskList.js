import Component from "@ember/component";
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
/* const dispatchToActions = (dispatch) => {
  return {
    
    onArchiveTask: (id) => dispatch(archiveTask(id)),
    onPinTask: (id) => dispatch(pinTask(id)),
  };
}; */
export default connect(
   stateToComputed,
  (dispatch) => ({
    onArchiveTask: (id) => dispatch(archiveTask(id)),
    onPinTask: (id) => dispatch(pinTask(id)),
  })
)(TaskList);
