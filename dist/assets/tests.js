'use strict';

define("taskbox/tests/acceptance/app-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Acceptance| taskbox", function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)("visiting /", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.equal((0, _testHelpers.currentURL)(), "/"); // assert.dom("h2").hasText("Congratulations, you made it!");
    });
  });
});
define("taskbox/tests/integration/pure-task-list-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  (0, _qunit.module)("Integration | Component | <PureTaskList>", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const taskData = {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2018, 0, 1, 9, 0)
    };
    const tasklist = [{ ...taskData,
      id: "1",
      title: "Task 1"
    }, { ...taskData,
      id: "2",
      title: "Task 2"
    }, { ...taskData,
      id: "3",
      title: "Task 3"
    }, { ...taskData,
      id: "4",
      title: "Task 4"
    }, { ...taskData,
      id: "5",
      title: "Task 5"
    }, { ...taskData,
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }];
    /* hooks.beforeEach(function() {
      this.setProperties({
        tasks: tasklist
      });
    }); */

    (0, _qunit.test)("renders pinned tasks at the start of the list", async function (assert) {
      this.tasks = tasklist; // this.pinTask = sinon.stub();
      // this.archiveTask = sinon.stub();
      // // this.set("testpinTask", (actual) => {
      // //   console.log(`pinTask actual:${actual}`);
      // //   let expected = 1;
      // //   assert.deepEquals(actual, expected);
      // // });
      // this.set("testarchiveTask", (actual) => {
      //   console.log(`archiveTask actual:${actual}`);
      //   let expected = 1;
      //   assert.deepEquals(actual, expected);
      // });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <PureTaskList @tasks={{this.tasks}}/>
      */
      {
        id: "T4z4XlO8",
        block: "{\"symbols\":[],\"statements\":[[7,\"pure-task-list\",[],[[\"@tasks\"],[[27,[24,0],[\"tasks\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      })); // /* const firstItem= this.element.querySelectorAll('.list-item').length */
      // /* const firstItem= this.element.querySelector('.list-item:nth-of-type(1)').classList */

      assert.dom('[data-test-task]:nth-of-type(1)').hasClass("TASK_PINNED");
      /* console.log(`firstItem:${JSON.stringify(firstItem,null,2)}`) */

      /* console.log(`firstItem:${firstItem}`) */

      /* assert.ok(1 == 1, "one equals one"); */
    });
    (0, _qunit.test)("can pin tasks", async function (assert) {
      this.tasks = tasklist;
      this.pinTask = _sinon.default.spy();
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <PureTaskList
              @tasks={{this.tasks}}
              @pinTask={{this.pinTask}}
            />
      */
      {
        id: "xVH91u4w",
        block: "{\"symbols\":[],\"statements\":[[7,\"pure-task-list\",[],[[\"@tasks\",\"@pinTask\"],[[27,[24,0],[\"tasks\"]],[27,[24,0],[\"pinTask\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      await (0, _testHelpers.click)('[data-test-task]:nth-of-type(3) [data-test-task-pin]');
      assert.ok(this.pinTask.calledOnce);
    });
  });
});
define("taskbox/tests/integration/task-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  (0, _qunit.module)("Integration | Component | <Task>", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const taskData = {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2018, 0, 1, 9, 0)
    };
    (0, _qunit.test)("renders tasks", async function (assert) {
      this.task = taskData;
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Task @task={{this.task}}/>
      */
      {
        id: "jkwMU0SL",
        block: "{\"symbols\":[],\"statements\":[[7,\"task\",[],[[\"@task\"],[[27,[24,0],[\"task\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('[data-test-task]').exists();
    });
    (0, _qunit.test)("renders pinned task", async function (assert) {
      this.task = { ...taskData,
        state: 'TASK_PINNED'
      };
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Task @task={{this.task}}/>
      */
      {
        id: "jkwMU0SL",
        block: "{\"symbols\":[],\"statements\":[[7,\"task\",[],[[\"@task\"],[[27,[24,0],[\"task\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('[data-test-task]').hasClass('TASK_PINNED');
    });
    (0, _qunit.test)("renders archived task", async function (assert) {
      this.task = { ...taskData,
        state: 'TASK_ARCHIVE'
      };
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Task @task={{this.task}}/>
      */
      {
        id: "jkwMU0SL",
        block: "{\"symbols\":[],\"statements\":[[7,\"task\",[],[[\"@task\"],[[27,[24,0],[\"task\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('[data-test-task]').hasClass('TASK_ARCHIVE');
    });
    (0, _qunit.test)('can pin task', async function (assert) {
      this.task = taskData;
      this.pinTask = _sinon.default.spy();
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Task @task={{this.task}} @pin={{this.pinTask}}/>
      */
      {
        id: "eVvMgRjB",
        block: "{\"symbols\":[],\"statements\":[[7,\"task\",[],[[\"@task\",\"@pin\"],[[27,[24,0],[\"task\"]],[27,[24,0],[\"pinTask\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      await (0, _testHelpers.click)('[data-test-task-pin]');
      assert.ok(this.pinTask.calledOnce);
    });
  });
});
define("taskbox/tests/test-helper", ["taskbox/app", "taskbox/config/environment", "@ember/test-helpers", "ember-qunit", "ember-sinon-qunit"], function (_app, _environment, _testHelpers, _emberQunit, _emberSinonQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberSinonQunit.default)();
  (0, _emberQunit.start)();
});
define('taskbox/config/environment', [], function() {
  var prefix = 'taskbox';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('taskbox/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
