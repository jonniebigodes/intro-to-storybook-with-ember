import { hbs } from "ember-cli-htmlbars";
import { taskData, actionsData } from "./Task.stories";

export default {
  title: "TaskList",
  component: "TaskList",
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

export const Default = () => ({
  template: hbs`<div style="padding: 3rem">{{TaskList tasks=tasks pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}</div>`,
  context: {
    tasks: defaultTasksData,
    taskActions: {
      ...actionsData,
    },
  },
});

export const WithPinnedTasks = () => ({
  template: hbs`<div style="padding: 3rem">{{TaskList tasks=tasks pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}</div>`,
  context: {
    tasks: withPinnedTasksData,
    taskActions: {
        ...actionsData,
      },
  },
});
export const Loading = () => ({
  template: hbs`<div style="padding: 3rem">{{TaskList loading=true tasks=tasks}}</div>`,
  context: {
    tasks: [],
  },
});
export const empty = () => ({
  template: hbs`<div style="padding: 3rem">{{TaskList tasks=tasks}}</div>`,
  context: {
    tasks: [],
  },
});
