import Component from '@glimmer/component';
import { connect } from 'ember-redux';

const stateToComputed = (state) => {
  const { reducer } = state;
  const { isError } = reducer;

  return {
    error: isError,
  };
};

class InboxScreenComponent extends Component {
  // get error() {
  //   console.log(`InboxScreen:${this.args.error}`);
  //   return this.args.error;
  // }
}
export default connect(stateToComputed)(InboxScreenComponent);
