'use strict';

define("taskbox/tests/acceptance/app-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Acceptance| taskbox", function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)("visiting /", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.equal((0, _testHelpers.currentURL)(), "/");
      assert.dom("h2").hasText("Congratulations, you made it!");
    });
  });
});
define("taskbox/tests/integration/task-list-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  /* import hbs from "htmlbars-inline-precompile"; */
  (0, _qunit.module)("Integration | Component | TaskList", function (hooks) {
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
      this.set("tasks", tasklist);
      this.set("testpinTask", actual => {
        console.log(`pinTask actual:${actual}`);
        let expected = 1;
        assert.deepEquals(actual, expected);
      });
      this.set("testarchiveTask", actual => {
        console.log(`archiveTask actual:${actual}`);
        let expected = 1;
        assert.deepEquals(actual, expected);
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{TaskList tasks=tasks pinTask=(action testpinTask) archiveTask=(action testarchiveTask) }}
      */
      {
        id: "iECMgZNB",
        block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,8,[27,[26,4,\"CallHead\"],[]],null,[[\"tasks\",\"pinTask\",\"archiveTask\"],[[27,[26,3,\"Expression\"],[]],[31,32,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,2,\"Expression\"],[]]],null],[31,65,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[]]],null]]]]]],\"hasEval\":false,\"upvars\":[\"testarchiveTask\",\"action\",\"testpinTask\",\"tasks\",\"TaskList\"]}",
        meta: {}
      })
      /* hbs`<task-list @tasks={{this.tasks}}` */
      );
      /* const firstItem= this.element.querySelectorAll('.list-item').length */

      /* const firstItem= this.element.querySelector('.list-item:nth-of-type(1)').classList */

      assert.dom(this.element.querySelector(".list-item:nth-of-type(1)")).hasClass("TASK_PINNED");
      /* console.log(`firstItem:${JSON.stringify(firstItem,null,2)}`) */

      /* console.log(`firstItem:${firstItem}`) */

      /* assert.ok(1 == 1, "one equals one"); */
    });
  });
});
define("taskbox/tests/test-helper", ["taskbox/app", "taskbox/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
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
