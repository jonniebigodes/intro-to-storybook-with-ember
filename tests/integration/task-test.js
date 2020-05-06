import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import sinon from 'sinon';

module("Integration | Component | <Task>", function (hooks) {
  setupRenderingTest(hooks);

  const taskData = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };

  test("renders tasks", async function (assert) {
    this.task = taskData;
    await render(hbs`<Task @task={{this.task}}/>`);
    assert.dom('[data-test-task]').exists();
  });

  test("renders pinned task", async function (assert) {
    this.task = { ...taskData, state: 'TASK_PINNED' };
    await render(hbs`<Task @task={{this.task}}/>`);

    assert.dom('[data-test-task]').hasClass('TASK_PINNED');
  });

  test("renders archived task", async function (assert) {
    this.task = { ...taskData, state: 'TASK_ARCHIVE' };
    await render(hbs`<Task @task={{this.task}}/>`);

    assert.dom('[data-test-task]').hasClass('TASK_ARCHIVE');
  });

  test('can pin task', async function (assert) {
    this.task = taskData;
    this.pinTask = sinon.spy();
    await render(hbs`<Task @task={{this.task}} @pin={{this.pinTask}}/>`);

    await click('[data-test-task-pin]');

    assert.ok(this.pinTask.calledOnce);
  });
});
