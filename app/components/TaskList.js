import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  emptyTasks: computed("tasks", function () {
    /* console.log(`emptyTasks:${this.tasks.length}`); */
    return this.tasks.length === 0 && !this.loading;
  }),
  tasksInOrder: computed("tasks", function () {
   /*  console.log(`tasksInOrder:${this.tasks}`); */
    return [
      ...this.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...this.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
  }),
});
