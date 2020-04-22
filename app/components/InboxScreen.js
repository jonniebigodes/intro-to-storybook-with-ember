import Component from '@ember/component'
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
 )(InboxScreen);