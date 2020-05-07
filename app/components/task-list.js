import Component from '@glimmer/component';
import { action } from '@ember/object';
import { connect } from 'ember-redux';
import { archiveTask, pinTask } from '../reducers/index';

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

  @action
  pinTask(taskID) {
    console.log(`taskListOnPinTask:${taskID}`);
    this.actions.onPinTask(taskID);
  }

  @action
  archiveTask(taskID) {
    console.log(`taskListOnArchiveTask:${taskID}`);
    this.actions.onArchiveTask(taskID);
  }
}

export default connect(stateToComputed, (dispatch) => ({
  onArchiveTask: (id) => dispatch(archiveTask(id)),
  onPinTask: (id) => dispatch(pinTask(id)),
}))(TaskList);
