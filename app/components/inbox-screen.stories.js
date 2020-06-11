import { hbs } from "ember-cli-htmlbars";

export default {
  title: "InboxScreen",
  component: "InboxScreen",
};

export const Default = () => ({
  template: hbs`<InboxScreen/>`,
});

export const Error = () => {
  return {
    template: hbs`<InboxScreen @error={{true}}/>`
  }
};


export const Loading = () => {
  return {
    template: hbs`<InboxScreen @loading={{true}}/>`
  }
}
