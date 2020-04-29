// before glimmer
/* import Component from '@ember/component'
import { connect } from 'ember-redux'

const InboxScreen=Component.extend({})
const stateToComputed = (state) => {
    console.log(`state:${JSON.stringify(state, null, 2)}`);
    const {reducer}= state
    const {isError}= reducer

    console.log(`isError:${isError}`)
    return {
      error:isError
    };
  };
export default connect(
    stateToComputed
 )(InboxScreen); */

import Component from "@glimmer/component";
import { connect } from "ember-redux";
import { computed } from "@ember/object";

const stateToComputed = (state) => {
  const { reducer } = state;
  const { isError } = reducer;

  return {
    error: isError,
  };
};
class InboxScreen extends Component {
  constructor() {
    super(...arguments);
  }
  @computed("error")
  get error() {
    console.log(`InboxScreen:${this.error}`);
    //return this.error
    return this.error;
  }
}
export default connect(stateToComputed)(InboxScreen);
