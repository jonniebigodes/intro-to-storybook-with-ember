 /* import Component from "@glimmer/component";
import { action } from "@ember/object";
export default class TaskComponent extends Component {

  constructor(...args) {
    super(...args);
    console.log(`this constructor:${JSON.stringify(this.args, null, 2)}`);
  }
  get isTaskArchived(){
    return this.args.task.state==='TASK_ARCHIVED'
  }

  @action handlePinTask(e) {
    e.preventDefault()

    console.log(`this args:${JSON.stringify(this.args, null, 2)}`);
    this.sendon('pinTask',this.args.task.id)
  }
 @action handleArchiveTask(e){
    e.preventDefault()
    console.log(`boop`)
  } 
}*/

// before glimmer
/* import Component from '@ember/component';
import {computed } from '@ember/object'
export default Component.extend({

  // computed property for the component (to assign a value to the task state checkbox)
  isTaskArchived:computed('state', function() {
    return this.task.state==='TASK_ARCHIVED';
  }),
  actions:{
    // actions to emulate the click handlers to call the actions passed down to the component
    handlePinTask:function(){
      
      this.pinTask(this.task.id)
    },
    handleArchiveTask:function(){
      this.archiveTask(this.task.id)
    }
  }
})
 */
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class Task extends Component {
  constructor() {
    super(...arguments);
    /* console.log(`Task arguments:${this.args}`) */
  }
  // computed property for the component (to assign a value to the task state checkbox)
  get isTaskArchived() {
    return this.args.task.state === "TASK_ARCHIVED";
  }
  // actions to emulate the click handlers to call the actions passed down to the component
  @action
  handlePinTask(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.args.pinTask) {
      console.log(`type of pin:${typeof this.args.pinTask}`);
      this.args.pinTask(this.args.task.id);
    }
  }
  @action
  handleArchiveTask() {
    if (this.args.archiveTask) {
      console.log(`type of archive:${typeof this.args.archiveTask}`);
      this.args.archiveTask(this.args.task.id);
    }
  }
}
