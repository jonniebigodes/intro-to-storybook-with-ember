import { hbs } from "ember-cli-htmlbars";

export default {
  title: "PureInboxScreen",
  component: "PureInboxScreen",
};

export const Default = () => ({
  template: hbs`<PureInboxScreen/>`,
});

export const error = () => ({
  template: hbs`<PureInboxScreen @error={{true}}/>`,
});
