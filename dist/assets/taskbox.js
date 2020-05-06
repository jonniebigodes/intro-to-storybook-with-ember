'use strict';



;define("taskbox/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("taskbox/app", ["exports", "ember-resolver", "ember-load-initializers", "taskbox/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("taskbox/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("taskbox/components/Task", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="list-item {{@task.state}}" data-test-task>
    <label class="checkbox">
      <input
        type="checkbox"
        disabled
        name="checked"
        checked={{this.isTaskArchived}}
      />
      <span
        class="checkbox-custom"
        data-test-task-archive
        {{on "click" this.archive}}
      ></span>
    </label>
    <div class="title">
      <input
        type="text"
        readonly
        value={{@task.title}}
        placeholder="Input title"
        style="text-overflow: ellipsis;"
      />
    </div>
    <div class="actions">
      {{#if (not-eq @task.state "TASK_ARCHIVED")}}
        <span data-test-task-pin {{on "click" this.pin}}>
          <span class="icon-star"></span>
        </span>
      {{/if}}
    </div>
  </div>
  */
  {
    id: "4eU2fLgz",
    block: "{\"symbols\":[\"@task\"],\"statements\":[[9,\"div\",true],[13,\"class\",[32,[\"list-item \",[27,[24,1],[\"state\"]]]],null],[12,\"data-test-task\",\"\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"label\",true],[12,\"class\",\"checkbox\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"input\",true],[12,\"disabled\",\"\",null],[12,\"name\",\"checked\",null],[13,\"checked\",[27,[24,0],[\"isTaskArchived\"]],null],[12,\"type\",\"checkbox\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"span\",false],[23,\"class\",\"checkbox-custom\",null],[23,\"data-test-task-archive\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"archive\"]]],null],[10],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"title\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"input\",true],[12,\"readonly\",\"\",null],[13,\"value\",[27,[24,1],[\"title\"]],null],[12,\"placeholder\",\"Input title\",null],[12,\"style\",\"text-overflow: ellipsis;\",null],[12,\"type\",\"text\",null],[10],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"actions\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,2,\"BlockHead\"],[]],[[31,539,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,1],[\"state\"]],\"TASK_ARCHIVED\"],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"      \"],[9,\"span\",false],[23,\"data-test-task-pin\",\"\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"pin\"]]],null],[10],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[12,\"class\",\"icon-star\",null],[10],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"on\",\"not-eq\",\"if\"]}",
    meta: {
      moduleName: "taskbox/components/Task.hbs"
    }
  });

  let Task = (_class = class Task extends _component.default {
    // computed property for the component (to assign a value to the task state checkbox)
    get isTaskArchived() {
      return this.args.task.state === "TASK_ARCHIVED";
    }

    pin() {
      this.args.pin?.();
    }

    archive() {
      this.args.archive?.();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "pin", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "pin"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "archive", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "archive"), _class.prototype)), _class);
  _exports.default = Task;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Task);
});
;define("taskbox/components/Task.stories", ["exports", "@storybook/addon-actions", "@storybook/addon-knobs"], function (_exports, _addonActions, _addonKnobs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LongTitle = _exports.Archived = _exports.Pinned = _exports.Default = _exports.actionsData = _exports.taskData = _exports.default = void 0;
  var _default = {
    title: "Task",
    component: "Task",
    // create addon section
    parameters: {
      assets: ['./image_1.jpg', './image_2.jpg', './image_3.jpg']
    },
    decorators: [_addonKnobs.withKnobs],
    excludeStories: /.*Data$/
  };
  _exports.default = _default;
  const taskData = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0)
  };
  _exports.taskData = taskData;
  const actionsData = {
    onPinTask: (0, _addonActions.action)("onPinTask"),
    onArchiveTask: (0, _addonActions.action)("onArchiveTask")
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

  _exports.actionsData = actionsData;
  const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

  const Default = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <Task
          @task={{this.task}}
          @pin={{fn this.onPinTask}}
          @archive={{fn this.onArchiveTask}}
        />
      
    */
    {
      id: "NMFJm988",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"task\",[],[[\"@task\",\"@pin\",\"@archive\"],[[27,[24,0],[\"task\"]],[31,50,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onPinTask\"]]],null],[31,87,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onArchiveTask\"]]],null]]],null],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"fn\"]}",
      meta: {}
    }),
    context: {
      task: (0, _addonKnobs.object)('task', { ...taskData
      }),
      ...actionsData
    }
  }); //


  _exports.Default = Default;

  const Pinned = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <Task
          @task={{this.task}}
          @pin={{fn this.onPinTask}}
          @archive={{fn this.onArchiveTask}}
        />
      
    */
    {
      id: "NMFJm988",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"task\",[],[[\"@task\",\"@pin\",\"@archive\"],[[27,[24,0],[\"task\"]],[31,50,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onPinTask\"]]],null],[31,87,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onArchiveTask\"]]],null]]],null],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"fn\"]}",
      meta: {}
    }),
    context: {
      task: { ...taskData,
        state: "TASK_PINNED"
      },
      ...actionsData
    }
  });

  _exports.Pinned = Pinned;

  const Archived = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <Task
          @task={{this.task}}
          @pin={{fn this.onPinTask}}
          @archive={{fn this.onArchiveTask}}
        />
      
    */
    {
      id: "NMFJm988",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"task\",[],[[\"@task\",\"@pin\",\"@archive\"],[[27,[24,0],[\"task\"]],[31,50,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onPinTask\"]]],null],[31,87,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onArchiveTask\"]]],null]]],null],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"fn\"]}",
      meta: {}
    }),
    context: {
      task: { ...taskData,
        state: "TASK_ARCHIVED"
      },
      ...actionsData
    }
  });

  _exports.Archived = Archived;

  const LongTitle = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <Task
          @task={{this.task}}
          @pin={{fn this.onPinTask}}
          @archive={{fn this.onArchiveTask}}
        />
      
    */
    {
      id: "NMFJm988",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[7,\"task\",[],[[\"@task\",\"@pin\",\"@archive\"],[[27,[24,0],[\"task\"]],[31,50,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onPinTask\"]]],null],[31,87,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onArchiveTask\"]]],null]]],null],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"fn\"]}",
      meta: {}
    }),
    context: {
      task: { ...taskData,
        title: longTitle
      },
      ...actionsData
    }
  });

  _exports.LongTitle = LongTitle;
});
;define("taskbox/components/inbox-screen", ["exports", "@glimmer/component", "ember-redux"], function (_exports, _component, _emberRedux) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div>
    <PureInboxScreen @error={{this.error}} />
  </div>
  */
  {
    id: "zM7seOww",
    block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[10],[1,1,0,0,\"\\n  \"],[7,\"pure-inbox-screen\",[],[[\"@error\"],[[27,[24,0],[\"error\"]]]],null],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "taskbox/components/inbox-screen.hbs"
    }
  });

  const stateToComputed = state => {
    const {
      reducer
    } = state;
    const {
      isError
    } = reducer;
    return {
      error: isError
    };
  };

  class InboxScreenComponent extends _component.default {// get error() {
    //   console.log(`InboxScreen:${this.args.error}`);
    //   return this.args.error;
    // }
  }

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, (0, _emberRedux.connect)(stateToComputed)(InboxScreenComponent));

  _exports.default = _default;
});
;define("taskbox/components/loading-row", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="loading-item">
    <span class="glow-checkbox" />
    <span class="glow-text">
      <span>Loading</span>
      <span>cool</span>
      <span>state</span>
    </span>
  </div>
  */
  {
    id: "SpzLfKHr",
    block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"loading-item\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"span\",true],[12,\"class\",\"glow-checkbox\",null],[10],[11],[1,1,0,0,\"\\n  \"],[9,\"span\",true],[12,\"class\",\"glow-text\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"span\",true],[10],[1,1,0,0,\"Loading\"],[11],[1,1,0,0,\"\\n    \"],[9,\"span\",true],[10],[1,1,0,0,\"cool\"],[11],[1,1,0,0,\"\\n    \"],[9,\"span\",true],[10],[1,1,0,0,\"state\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "taskbox/components/loading-row.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("taskbox/components/pure-inbox-screen", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="page lists-show">
    <nav>
      <h1 class="title-page">
        <span class="title-wrapper">
          Taskbox
        </span>
      </h1>
    </nav>
    {{#if @error}}
      <div class="page lists-show">
        <div class="wrapper-message">
          <span class="icon-face-sad"></span>
          <div class="title-message">
            Oh no!
          </div>
          <div class="subtitle-message">
            Something went wrong
          </div>
        </div>
      </div>
    {{else}}
      <TaskList />
    {{/if}}
  </div>
  */
  {
    id: "9Weem+2+",
    block: "{\"symbols\":[\"@error\"],\"statements\":[[9,\"div\",true],[12,\"class\",\"page lists-show\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"nav\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"h1\",true],[12,\"class\",\"title-page\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"span\",true],[12,\"class\",\"title-wrapper\",null],[10],[1,1,0,0,\"\\n        Taskbox\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,0,\"BlockHead\"],[]],[[27,[24,1],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",true],[12,\"class\",\"page lists-show\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"wrapper-message\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[12,\"class\",\"icon-face-sad\",null],[10],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"title-message\",null],[10],[1,1,0,0,\"\\n          Oh no!\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"subtitle-message\",null],[10],[1,1,0,0,\"\\n          Something went wrong\\n        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[7,\"task-list\",[],[[],[]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[11]],\"hasEval\":false,\"upvars\":[\"if\"]}",
    meta: {
      moduleName: "taskbox/components/pure-inbox-screen.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("taskbox/components/pure-inbox-screen.stories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.error = _exports.Default = _exports.default = void 0;
  var _default = {
    title: "PureInboxScreen",
    component: "PureInboxScreen"
  };
  _exports.default = _default;

  const Default = () => ({
    template: Ember.HTMLBars.template(
    /*
      <PureInboxScreen/>
    */
    {
      id: "41h0M+Ox",
      block: "{\"symbols\":[],\"statements\":[[7,\"pure-inbox-screen\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
      meta: {}
    })
  });

  _exports.Default = Default;

  const error = () => ({
    template: Ember.HTMLBars.template(
    /*
      <PureInboxScreen @error={{true}}/>
    */
    {
      id: "Zw5hKqW5",
      block: "{\"symbols\":[],\"statements\":[[7,\"pure-inbox-screen\",[],[[\"@error\"],[true]],null]],\"hasEval\":false,\"upvars\":[]}",
      meta: {}
    })
  });

  _exports.error = error;
});
;define("taskbox/components/pure-task-list", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#if @loading}}
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
  {{else if this.tasksInOrder}}
    {{#each this.tasksInOrder as |task|}}
      <Task
        @task={{task}}
        @pin={{fn @pinTask task.id}}
        @archive={{fn @archiveTask task.id}}
      />
    {{/each}}
  {{else}}
    <div class="list-items">
      <div class="wrapper-message">
        <span class="icon-check"></span>
        <div class="title-message">
          You have no tasks
        </div>
        <div class="subtitle-message">
          Sit back and relax
        </div>
      </div>
    </div>
  {{/if}}
  */
  {
    id: "U8OOFje3",
    block: "{\"symbols\":[\"task\",\"@pinTask\",\"@archiveTask\",\"@loading\"],\"statements\":[[5,[27,[26,3,\"BlockHead\"],[]],[[27,[24,4],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n  \"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n  \"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n  \"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n  \"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,3,\"BlockHead\"],[]],[[27,[24,0],[\"tasksInOrder\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[5,[27,[26,2,\"BlockHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"tasksInOrder\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[7,\"task\",[],[[\"@task\",\"@pin\",\"@archive\"],[[27,[24,1],[]],[31,216,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,2],[]],[27,[24,1],[\"id\"]]],null],[31,255,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,3],[]],[27,[24,1],[\"id\"]]],null]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",true],[12,\"class\",\"list-items\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"wrapper-message\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"span\",true],[12,\"class\",\"icon-check\",null],[10],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"title-message\",null],[10],[1,1,0,0,\"\\n        You have no tasks\\n      \"],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"subtitle-message\",null],[10],[1,1,0,0,\"\\n        Sit back and relax\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"-track-array\",\"each\",\"if\"]}",
    meta: {
      moduleName: "taskbox/components/pure-task-list.hbs"
    }
  });

  class TaskList extends _component.default {
    get tasksInOrder() {
      return [...this.args.tasks.filter(t => t.state === 'TASK_PINNED'), ...this.args.tasks.filter(t => t.state !== 'TASK_PINNED')];
    }

  }

  _exports.default = TaskList;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TaskList);
});
;define("taskbox/components/pure-task-list.stories", ["exports", "taskbox/components/task.stories"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Empty = _exports.Loading = _exports.WithPinnedTasks = _exports.Default = _exports.withPinnedTasksData = _exports.defaultTasksData = _exports.default = void 0;
  var _default = {
    title: "PureTaskList",
    component: "PureTaskList",
    excludeStories: /.*Data$/
  };
  _exports.default = _default;
  const defaultTasksData = [{ ..._task.taskData,
    id: "1",
    title: "Task 1"
  }, { ..._task.taskData,
    id: "2",
    title: "Task 2"
  }, { ..._task.taskData,
    id: "3",
    title: "Task 3"
  }, { ..._task.taskData,
    id: "4",
    title: "Task 4"
  }, { ..._task.taskData,
    id: "5",
    title: "Task 5"
  }, { ..._task.taskData,
    id: "6",
    title: "Task 6"
  }];
  _exports.defaultTasksData = defaultTasksData;
  const withPinnedTasksData = [...defaultTasksData.slice(0, 5), {
    id: "6",
    title: "Task 6 (pinned)",
    state: "TASK_PINNED"
  }];
  _exports.withPinnedTasksData = withPinnedTasksData;

  const Default = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <div style="padding: 3rem">
          <PureTaskList
            @tasks={{this.tasks}}
            @pinTask={{fn this.onPinTask}}
            @archiveTask={{fn this.onArchiveTask}}
          />
        </div>
      
    */
    {
      id: "sLfOj3fp",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"pure-task-list\",[],[[\"@tasks\",\"@pinTask\",\"@archiveTask\"],[[27,[24,0],[\"tasks\"]],[31,102,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onPinTask\"]]],null],[31,145,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onArchiveTask\"]]],null]]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"fn\"]}",
      meta: {}
    }),
    context: {
      tasks: defaultTasksData,
      ..._task.actionsData
    }
  });

  _exports.Default = Default;

  const WithPinnedTasks = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <div style="padding: 3rem">
          <PureTaskList
            @tasks={{this.tasks}}
            @pinTask={{fn this.onPinTask}}
            @archiveTask={{fn this.onArchiveTask}}
          />
        </div>
      
    */
    {
      id: "sLfOj3fp",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"pure-task-list\",[],[[\"@tasks\",\"@pinTask\",\"@archiveTask\"],[[27,[24,0],[\"tasks\"]],[31,102,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onPinTask\"]]],null],[31,145,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"onArchiveTask\"]]],null]]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"fn\"]}",
      meta: {}
    }),
    context: {
      tasks: withPinnedTasksData,
      ..._task.actionsData
    }
  });

  _exports.WithPinnedTasks = WithPinnedTasks;

  const Loading = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <div style="padding: 3rem">
          <PureTaskList @loading={{true}} @tasks={{this.tasks}}/>
        </div>
      
    */
    {
      id: "uvsZ3zR1",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"pure-task-list\",[],[[\"@loading\",\"@tasks\"],[true,[27,[24,0],[\"tasks\"]]]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}",
      meta: {}
    }),
    context: {
      tasks: []
    }
  });

  _exports.Loading = Loading;

  const Empty = () => ({
    template: Ember.HTMLBars.template(
    /*
      
        <div style="padding: 3rem">
          <PureTaskList @tasks={{this.tasks}}/>
        </div>
      
    */
    {
      id: "fH103aV5",
      block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"pure-task-list\",[],[[\"@tasks\"],[[27,[24,0],[\"tasks\"]]]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}",
      meta: {}
    }),
    context: {
      tasks: []
    }
  });

  _exports.Empty = Empty;
});
;define("taskbox/components/task-list", ["exports", "@glimmer/component", "ember-redux", "taskbox/reducers/index"], function (_exports, _component, _emberRedux, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div>
    <PureTaskList
      @tasks={{this.tasks}}
      @pinTask={{this.pinTask}}
      @archiveTask={{this.archiveTask}}
    />
  </div>
  */
  {
    id: "Gs7vAmHn",
    block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[10],[1,1,0,0,\"\\n  \"],[7,\"pure-task-list\",[],[[\"@tasks\",\"@pinTask\",\"@archiveTask\"],[[27,[24,0],[\"tasks\"]],[27,[24,0],[\"pinTask\"]],[27,[24,0],[\"archiveTask\"]]]],null],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "taskbox/components/task-list.hbs"
    }
  });

  const stateToComputed = state => {
    const {
      reducer
    } = state;
    const {
      tasks
    } = reducer;
    return {
      tasks: tasks.filter(t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED")
    };
  };

  let TaskList = (_class = class TaskList extends _component.default {
    pinTask(taskID) {
      console.log(`taskListOnPinTask:${taskID}`);
      this.actions.onPinTask(taskID);
    }

    archiveTask(taskID) {
      console.log(`taskListOnArchiveTask:${taskID}`);
      this.actions.onArchiveTask(taskID);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "pinTask", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "pinTask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "archiveTask", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "archiveTask"), _class.prototype)), _class);

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, (0, _emberRedux.connect)(stateToComputed, dispatch => ({
    onArchiveTask: id => dispatch((0, _index.archiveTask)(id)),
    onPinTask: id => dispatch((0, _index.pinTask)(id))
  }))(TaskList));

  _exports.default = _default;
});
;define("taskbox/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("taskbox/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("taskbox/enhancers/index", ["exports", "ember-redux/enhancers/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
});
;define("taskbox/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("taskbox/helpers/app-version", ["exports", "taskbox/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("taskbox/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("taskbox/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("taskbox/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("taskbox/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("taskbox/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("taskbox/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("taskbox/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("taskbox/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("taskbox/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("taskbox/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("taskbox/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("taskbox/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("taskbox/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("taskbox/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("taskbox/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "taskbox/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("taskbox/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("taskbox/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("taskbox/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("taskbox/initializers/export-application-global", ["exports", "taskbox/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("taskbox/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("taskbox/middleware/index", ["exports", "ember-redux/middleware/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
});
;define("taskbox/reducers/index", ["exports", "redux"], function (_exports, _redux) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.reducer = _exports.setError = _exports.pinTask = _exports.archiveTask = _exports.actions = void 0;
  // The initial state of our store when the app loads.
  // Usually you would fetch this from a server
  const defaultTasks = [{
    id: "1",
    title: "Something",
    state: "TASK_INBOX"
  }, {
    id: "2",
    title: "Something more",
    state: "TASK_INBOX"
  }, {
    id: "3",
    title: "Something else",
    state: "TASK_INBOX"
  }, {
    id: "4",
    title: "Something again",
    state: "TASK_INBOX"
  }];
  const initialState = {
    isError: false,
    // update for screen section
    tasks: defaultTasks
  }; // The actions are the "names" of the changes that can happen to the store

  const actions = {
    ARCHIVE_TASK: "ARCHIVE_TASK",
    PIN_TASK: "PIN_TASK",
    SET_ERROR: 'SET_ERROR' // update for screen section

  }; // The action creators bundle actions with the data required to execute them

  _exports.actions = actions;

  const archiveTask = id => ({
    type: actions.ARCHIVE_TASK,
    id
  });

  _exports.archiveTask = archiveTask;

  const pinTask = id => ({
    type: actions.PIN_TASK,
    id
  });

  _exports.pinTask = pinTask;

  const setError = () => ({
    type: actions.SET_ERROR
  }); // All our reducers simply change the state of a single task.


  _exports.setError = setError;

  function taskStateReducer(taskState) {
    return (state, action) => {
      return { ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task,
          state: taskState
        } : task)
      };
    };
  } // The reducer describes how the contents of the store change for each action


  const reducer = (state, action) => {
    switch (action.type) {
      case actions.ARCHIVE_TASK:
        return taskStateReducer("TASK_ARCHIVED")(state, action);

      case actions.PIN_TASK:
        return taskStateReducer("TASK_PINNED")(state, action);

      case actions.SET_ERROR:
        // update for screen section
        return { ...state,
          isError: true
        };

      default:
        return state || initialState;
    }
  };

  _exports.reducer = reducer;

  var _default = (0, _redux.combineReducers)({
    reducer
  });

  _exports.default = _default;
});
;define("taskbox/router", ["exports", "taskbox/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("taskbox/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("taskbox/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("taskbox/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("taskbox/services/redux", ["exports", "ember-redux/services/redux", "taskbox/reducers/index", "taskbox/enhancers/index", "taskbox/middleware/index"], function (_exports, _redux, _index, _index2, _index3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _redux.default.extend({
    reducers: _index.default,
    enhancers: _index2.default,
    middlewares: _index3.default
  });

  _exports.default = _default;
});
;define("taskbox/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("taskbox/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HSe1F7ct",
    "block": "{\"symbols\":[],\"statements\":[[7,\"inbox-screen\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "taskbox/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("taskbox/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("taskbox/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("taskbox/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("taskbox/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('taskbox/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("taskbox/app")["default"].create({"name":"taskbox","version":"0.0.0+e59bc4fc"});
          }
        
//# sourceMappingURL=taskbox.map
