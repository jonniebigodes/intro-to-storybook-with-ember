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

import Component from '@ember/component';
import {computed } from '@ember/object'
export default Component.extend({

  // computed property for the component (to assign a value to the task state checkbox)
  isTaskArchived:computed('state', function() {
    /* console.log(`isArchived:${this.task.state==='TASK_ARCHIVED'}`) */
    return this.task.state==='TASK_ARCHIVED';
  }),
  actions:{
    // actions to emulate the click handlers to call the actions passed down to the component
    handlePinTask:function(){
      /* this.get('pinTask')(this.task.id) */
      this.pinTask(this.task.id)
    },
    handleArchiveTask:function(){
      this.archiveTask(this.task.id)
      /* this.get('archiveTask')(this.task.id) */
    }
  }
})
