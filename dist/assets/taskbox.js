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
;define("taskbox/components/Task", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- initial code --}}
  {{!-- <div class="list-item">
    <input type="text" value={{@task.title}} readonly={{true}}/>
  </div>
   --}}
  {{!-- updated code simple component--}}
  {{!-- <div class="list-item {{@task.state}}">
    <label class="checkbox">
      <input type="checkbox" disabled name="checked" checked={{this.isTaskArchived}}/>
      <span class="checkbox-custom" {{action 'handleArchiveTask'}}/>
    </label>
    <div class="title">
      <input type="text" readonly value={{@task.title}} placeholder="Input title" />
    </div>
    <div class="actions">
      {{#if (not-eq @task.state "TASK_ARCHIVED")}}
        <a href="/"{{action 'handlePinTask'}}><span class="icon-star"  /></a>
      {{/if}}
    </div>
  </div> --}}
  {{!--using addons section--}}
  <div class="list-item {{@task.state}}">
    <label class="checkbox">
      <input type="checkbox" disabled name="checked" checked={{this.isTaskArchived}}/>
      <span class="checkbox-custom" {{action 'handleArchiveTask'}}/>
    </label>
    <div class="title">
      <input type="text" readonly value={{@task.title}} placeholder="Input title" style="text-overflow: ellipsis;" />
    </div>
    <div class="actions">
      {{#if (not-eq @task.state "TASK_ARCHIVED")}}
        <a href="/"{{action 'handlePinTask'}}><span class="icon-star"  /></a>
      {{/if}}
    </div>
  </div>
  */
  {
    id: "h2nhYdeo",
    block: "{\"symbols\":[\"@task\"],\"statements\":[[9,\"div\",true],[13,\"class\",[32,[\"list-item \",[27,[24,1],[\"state\"]]]],null],[10],[1,1,0,0,\"\\n  \"],[9,\"label\",true],[12,\"class\",\"checkbox\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"input\",true],[12,\"disabled\",\"\",null],[12,\"name\",\"checked\",null],[13,\"checked\",[27,[24,0],[\"isTaskArchived\"]],null],[12,\"type\",\"checkbox\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"span\",false],[23,\"class\",\"checkbox-custom\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[[27,[24,0],[]],\"handleArchiveTask\"],null],[10],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"title\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"input\",true],[12,\"readonly\",\"\",null],[13,\"value\",[27,[24,1],[\"title\"]],null],[12,\"placeholder\",\"Input title\",null],[12,\"style\",\"text-overflow: ellipsis;\",null],[12,\"type\",\"text\",null],[10],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"actions\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,2,\"BlockHead\"],[]],[[31,1174,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,1],[\"state\"]],\"TASK_ARCHIVED\"],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"      \"],[9,\"a\",false],[23,\"href\",\"/\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[[27,[24,0],[]],\"handlePinTask\"],null],[10],[9,\"span\",true],[12,\"class\",\"icon-star\",null],[10],[11],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"action\",\"not-eq\",\"if\"]}",
    meta: {
      moduleName: "taskbox/components/Task.hbs"
    }
  });
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


  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember.Component.extend({
    // computed property for the component (to assign a value to the task state checkbox)
    isTaskArchived: Ember.computed('state', function () {
      /* console.log(`isArchived:${this.task.state==='TASK_ARCHIVED'}`) */
      return this.task.state === 'TASK_ARCHIVED';
    }),
    actions: {
      // actions to emulate the click handlers to call the actions passed down to the component
      handlePinTask: function () {
        /* this.get('pinTask')(this.task.id) */
        this.pinTask(this.task.id);
      },
      handleArchiveTask: function () {
        this.archiveTask(this.task.id);
        /* this.get('archiveTask')(this.task.id) */
      }
    }
  }));

  _exports.default = _default;
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
      {{Task task=task pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}
    */
    {
      id: "3Bqo7lF4",
      block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,4,[27,[26,3,\"CallHead\"],[]],null,[[\"task\",\"pinTask\",\"archiveTask\"],[[27,[26,2,\"Expression\"],[]],[31,26,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onPinTask\"]]],null],[31,69,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onArchiveTask\"]]],null]]]]]],\"hasEval\":false,\"upvars\":[\"taskActions\",\"action\",\"task\",\"Task\"]}",
      meta: {}
    }),
    context: {
      task: (0, _addonKnobs.object)('task', { ...taskData
      }),
      taskActions: { ...actionsData
      }
    }
  }); //


  _exports.Default = Default;

  const Pinned = () => ({
    template: Ember.HTMLBars.template(
    /*
      {{Task task=task pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}
    */
    {
      id: "3Bqo7lF4",
      block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,4,[27,[26,3,\"CallHead\"],[]],null,[[\"task\",\"pinTask\",\"archiveTask\"],[[27,[26,2,\"Expression\"],[]],[31,26,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onPinTask\"]]],null],[31,69,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onArchiveTask\"]]],null]]]]]],\"hasEval\":false,\"upvars\":[\"taskActions\",\"action\",\"task\",\"Task\"]}",
      meta: {}
    }),
    context: {
      task: { ...taskData,
        state: "TASK_PINNED"
      },
      taskActions: { ...actionsData
      }
    }
  });

  _exports.Pinned = Pinned;

  const Archived = () => ({
    template: Ember.HTMLBars.template(
    /*
      {{Task task=task pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}
    */
    {
      id: "3Bqo7lF4",
      block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,4,[27,[26,3,\"CallHead\"],[]],null,[[\"task\",\"pinTask\",\"archiveTask\"],[[27,[26,2,\"Expression\"],[]],[31,26,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onPinTask\"]]],null],[31,69,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onArchiveTask\"]]],null]]]]]],\"hasEval\":false,\"upvars\":[\"taskActions\",\"action\",\"task\",\"Task\"]}",
      meta: {}
    }),
    context: {
      task: { ...taskData,
        state: "TASK_ARCHIVED"
      },
      taskActions: { ...actionsData
      }
    }
  });

  _exports.Archived = Archived;

  const LongTitle = () => ({
    template: Ember.HTMLBars.template(
    /*
      {{Task task=task pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}
    */
    {
      id: "3Bqo7lF4",
      block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,4,[27,[26,3,\"CallHead\"],[]],null,[[\"task\",\"pinTask\",\"archiveTask\"],[[27,[26,2,\"Expression\"],[]],[31,26,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onPinTask\"]]],null],[31,69,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onArchiveTask\"]]],null]]]]]],\"hasEval\":false,\"upvars\":[\"taskActions\",\"action\",\"task\",\"Task\"]}",
      meta: {}
    }),
    context: {
      task: { ...taskData,
        title: longTitle
      },
      taskActions: { ...actionsData
      }
    }
  });

  _exports.LongTitle = LongTitle;
});
;define("taskbox/components/TaskList", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- {{#if loading}}
    <div class="list-items">loading</div>
  {{/if}}
  
  {{#if emptyTasks}}
    <div class="list-items">empty</div>
  {{/if}}
  
  {{#each @tasks as |task|}}
   {{Task task=task pinTask=(action pinTask) archiveTask=(action archiveTask)}}
  {{/each}} --}}
  
  
  {{#if loading}}
  <LoadingRow />
  <LoadingRow />
  <LoadingRow />
  <LoadingRow />
  <LoadingRow />
  {{/if}}
  
  {{#if emptyTasks}}
  <div class="list-items">
    <div class="wrapper-message">
      <span class="icon-check" />
      <div class="title-message">You have no tasks</div>
      <div class="subtitle-message">Sit back and relax</div>
    </div>
  </div>
  {{/if}}
  
  {{#each tasksInOrder as |task|}}
  {{Task task=task pinTask=(action pinTask) archiveTask=(action archiveTask)}}
  {{/each}}
  */
  {
    id: "llvTd6Xv",
    block: "{\"symbols\":[\"task\"],\"statements\":[[1,1,0,0,\"\\n\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[27,[26,4,\"Expression\"],[]]],null,[[\"default\"],[{\"statements\":[[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[7,\"loading-row\",[],[[],[]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[27,[26,6,\"Expression\"],[]]],null,[[\"default\"],[{\"statements\":[[9,\"div\",true],[12,\"class\",\"list-items\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"wrapper-message\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"span\",true],[12,\"class\",\"icon-check\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"title-message\",null],[10],[1,1,0,0,\"You have no tasks\"],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"subtitle-message\",null],[10],[1,1,0,0,\"Sit back and relax\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"],[5,[27,[26,9,\"BlockHead\"],[]],[[31,0,0,[27,[26,8,\"CallHead\"],[]],[[31,0,0,[27,[26,8,\"CallHead\"],[]],[[27,[26,7,\"Expression\"],[]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,0,0,0,[31,673,4,[27,[26,3,\"CallHead\"],[]],null,[[\"task\",\"pinTask\",\"archiveTask\"],[[27,[24,1],[]],[31,697,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,2,\"Expression\"],[]]],null],[31,726,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[]]],null]]]]],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"archiveTask\",\"action\",\"pinTask\",\"Task\",\"loading\",\"if\",\"emptyTasks\",\"tasksInOrder\",\"-track-array\",\"each\"]}",
    meta: {
      moduleName: "taskbox/components/TaskList.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember.Component.extend({
    emptyTasks: Ember.computed("tasks", function () {
      /* console.log(`emptyTasks:${this.tasks.length}`); */
      return this.tasks.length === 0 && !this.loading;
    }),
    tasksInOrder: Ember.computed("tasks", function () {
      /*  console.log(`tasksInOrder:${this.tasks}`); */
      return [...this.tasks.filter(t => t.state === "TASK_PINNED"), ...this.tasks.filter(t => t.state !== "TASK_PINNED")];
    })
  }));

  _exports.default = _default;
});
;define("taskbox/components/TaskList.stories", ["exports", "taskbox/components/Task.stories"], function (_exports, _Task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.empty = _exports.Loading = _exports.WithPinnedTasks = _exports.Default = _exports.withPinnedTasksData = _exports.defaultTasksData = _exports.default = void 0;
  var _default = {
    title: "TaskList",
    component: "TaskList",
    excludeStories: /.*Data$/
  };
  _exports.default = _default;
  const defaultTasksData = [{ ..._Task.taskData,
    id: "1",
    title: "Task 1"
  }, { ..._Task.taskData,
    id: "2",
    title: "Task 2"
  }, { ..._Task.taskData,
    id: "3",
    title: "Task 3"
  }, { ..._Task.taskData,
    id: "4",
    title: "Task 4"
  }, { ..._Task.taskData,
    id: "5",
    title: "Task 5"
  }, { ..._Task.taskData,
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
      <div style="padding: 3rem">{{TaskList tasks=tasks pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}</div>
    */
    {
      id: "8ISyhimR",
      block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,0,0,0,[31,29,8,[27,[26,3,\"CallHead\"],[]],null,[[\"tasks\",\"pinTask\",\"archiveTask\"],[[27,[26,2,\"Expression\"],[]],[31,59,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onPinTask\"]]],null],[31,102,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onArchiveTask\"]]],null]]]]],[11]],\"hasEval\":false,\"upvars\":[\"taskActions\",\"action\",\"tasks\",\"TaskList\"]}",
      meta: {}
    }),
    context: {
      tasks: defaultTasksData,
      taskActions: { ..._Task.actionsData
      }
    }
  });

  _exports.Default = Default;

  const WithPinnedTasks = () => ({
    template: Ember.HTMLBars.template(
    /*
      <div style="padding: 3rem">{{TaskList tasks=tasks pinTask=(action taskActions.onPinTask) archiveTask=(action taskActions.onArchiveTask)}}</div>
    */
    {
      id: "8ISyhimR",
      block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,0,0,0,[31,29,8,[27,[26,3,\"CallHead\"],[]],null,[[\"tasks\",\"pinTask\",\"archiveTask\"],[[27,[26,2,\"Expression\"],[]],[31,59,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onPinTask\"]]],null],[31,102,6,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[]],[27,[26,0,\"Expression\"],[\"onArchiveTask\"]]],null]]]]],[11]],\"hasEval\":false,\"upvars\":[\"taskActions\",\"action\",\"tasks\",\"TaskList\"]}",
      meta: {}
    }),
    context: {
      tasks: withPinnedTasksData,
      taskActions: { ..._Task.actionsData
      }
    }
  });

  _exports.WithPinnedTasks = WithPinnedTasks;

  const Loading = () => ({
    template: Ember.HTMLBars.template(
    /*
      <div style="padding: 3rem">{{TaskList loading=true tasks=tasks}}</div>
    */
    {
      id: "kwIyUtB4",
      block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,0,0,0,[31,29,8,[27,[26,1,\"CallHead\"],[]],null,[[\"loading\",\"tasks\"],[true,[27,[26,0,\"Expression\"],[]]]]]],[11]],\"hasEval\":false,\"upvars\":[\"tasks\",\"TaskList\"]}",
      meta: {}
    }),
    context: {
      tasks: []
    }
  });

  _exports.Loading = Loading;

  const empty = () => ({
    template: Ember.HTMLBars.template(
    /*
      <div style="padding: 3rem">{{TaskList tasks=tasks}}</div>
    */
    {
      id: "nsQINidA",
      block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"style\",\"padding: 3rem\",null],[10],[1,0,0,0,[31,29,8,[27,[26,1,\"CallHead\"],[]],null,[[\"tasks\"],[[27,[26,0,\"Expression\"],[]]]]]],[11]],\"hasEval\":false,\"upvars\":[\"tasks\",\"TaskList\"]}",
      meta: {}
    }),
    context: {
      tasks: []
    }
  });

  _exports.empty = empty;
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
    "id": "ug3/BNWm",
    "block": "{\"symbols\":[],\"statements\":[[7,\"welcome-page\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[1,1,0,0,\"\\n\"],[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
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
            require("taskbox/app")["default"].create({"name":"taskbox","version":"0.0.0+fbde42ff"});
          }
        
//# sourceMappingURL=taskbox.map
