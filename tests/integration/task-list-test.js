import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
/* import hbs from "htmlbars-inline-precompile"; */
module("Integration | Component | TaskList", function (hooks) {
  setupRenderingTest(hooks);
  const taskData = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };
  const tasklist = [
    { ...taskData, id: "1", title: "Task 1" },
    { ...taskData, id: "2", title: "Task 2" },
    { ...taskData, id: "3", title: "Task 3" },
    { ...taskData, id: "4", title: "Task 4" },
    { ...taskData, id: "5", title: "Task 5" },
    { ...taskData, id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ];
  /* hooks.beforeEach(function() {
    this.setProperties({
      tasks: tasklist
    });
  }); */
  test("renders pinned tasks at the start of the list", async function (assert) {
    this.set("tasks", tasklist);
    this.set("testpinTask", (actual) => {
      console.log(`pinTask actual:${actual}`);
      let expected = 1;
      assert.deepEquals(actual, expected);
    });

    this.set("testarchiveTask", (actual) => {
      console.log(`archiveTask actual:${actual}`);
      let expected = 1;
      assert.deepEquals(actual, expected);
    });

    await render(
      hbs`{{TaskList tasks=tasks pinTask=(action testpinTask) archiveTask=(action testarchiveTask) }}`
      /* hbs`<task-list @tasks={{this.tasks}}` */
    );
    /* const firstItem= this.element.querySelectorAll('.list-item').length */
    /* const firstItem= this.element.querySelector('.list-item:nth-of-type(1)').classList */
    assert
      .dom(this.element.querySelector(".list-item:nth-of-type(1)"))
      .hasClass("TASK_PINNED");
      
    /* console.log(`firstItem:${JSON.stringify(firstItem,null,2)}`) */
    /* console.log(`firstItem:${firstItem}`) */
    /* assert.ok(1 == 1, "one equals one"); */
  });
});
