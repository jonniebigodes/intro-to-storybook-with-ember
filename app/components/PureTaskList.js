// before glimmer

/* import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  emptyTasks: computed("tasks", function () {
    return this.tasks.length === 0 && !this.loading;
  }),
  tasksInOrder: computed("tasks", function () {
    return [
      ...this.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...this.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
  }),
});
 */

import Component from "@glimmer/component";
import { action } from "@ember/object";
export default class TaskList extends Component {
  constructor() {
    super(...arguments);
  }
  get emptyTasks() {
    return this.args.tasks.length === 0 && !this.args.loading;
  }

  get tasksInOrder(){
    return [
      ...this.args.tasks.filter(t => t.state === 'TASK_PINNED'),
      ...this.args.tasks.filter(t => t.state !== 'TASK_PINNED')
    ]
  }
  @action
  taskListOnPinTask(taskID){
    console.log(`taskListOnPinTask:${taskID}`)
    if (this.args.pinTask){
        this.args.pinTask(taskID)
    }
  }
  @action
  taskListOnArchiveTask(taskID){
    console.log(`taskListOnArchiveTask:${taskID}`)
    if (this.args.archiveTask){
        this.args.archiveTask(taskID)
    }
  }
}
