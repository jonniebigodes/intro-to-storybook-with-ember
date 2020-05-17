import Component from '@glimmer/component';

export default class TaskList extends Component {
  get tasksInOrder() {
    return [
      ...this.args.tasks.filter(t => t.state === 'TASK_PINNED'),
      ...this.args.tasks.filter(t => t.state !== 'TASK_PINNED')
    ]
  }
}
