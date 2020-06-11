import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs,object } from '@storybook/addon-knobs'
export default {
  title: 'Task',
  component: 'Task',
  // create addon section
  parameters: {
    assets: [
      './image_1.jpg',
      './image_2.jpg',
      './image_3.jpg',
    ],
  },
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

/* export const Default = () => ({
  template: hbs`{{Task task=task pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}`,
  context: {
    task: {
      ...taskData,
    },
    taskActions: {
      ...actionsData,
    },
  },
}); */

// using addons section

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const Default = () => ({
  template: hbs`
    <Task
      @task={{this.task}}
      @pin={{fn this.onPinTask}}
      @archive={{fn this.onArchiveTask}}
    />
  `,
  context: {
    task: object('task', { ...taskData }),
    ...actionsData
  },
});
//

export const Pinned = () => ({
  template: hbs`
    <Task
      @task={{this.task}}
      @pin={{fn this.onPinTask}}
      @archive={{fn this.onArchiveTask}}
    />
  `,
  context: {
    task: {
      ...taskData,
      state: 'TASK_PINNED',
    },
    ...actionsData
  },
});

export const Archived = () => ({
  template: hbs`
    <Task
      @task={{this.task}}
      @pin={{fn this.onPinTask}}
      @archive={{fn this.onArchiveTask}}
    />
  `,
  context: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED',
    },
    ...actionsData
  },
});

export const LongTitle = () => ({
  template: hbs`
    <Task
      @task={{this.task}}
      @pin={{fn this.onPinTask}}
      @archive={{fn this.onArchiveTask}}
    />
  `,
  context: {
    task: {
      ...taskData,
      title: longTitle,
    },
    ...actionsData
  },
});
