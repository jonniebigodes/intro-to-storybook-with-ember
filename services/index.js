import redux from "redux";
import ReduxService from "ember-redux/services/redux";
import reducers from "../reducers/index";
import enhancers from "../enhancers/index";

const { createStore, compose } = redux;
const makeStoreInstance = ({ reducers, enhancers }) => {
  const createStoreWithMiddleware = compose(enhancers)(createStore);
  const store = createStoreWithMiddleware(reducers);
  return store;
};
export default ReduxService.extend({
  reducers,
  enhancers,
  makeStoreInstance,
});
