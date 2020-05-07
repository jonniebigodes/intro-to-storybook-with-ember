import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Task extends Component {

  // computed property for the component (to assign a value to the task state checkbox)
  get isTaskArchived() {
    return this.args.task.state === "TASK_ARCHIVED";
  }

  @action
  pin() {
    this.args.pin?.();
  }

  @action
  archive() {
    this.args.archive?.();
  }
}
