import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance| taskbox", function(hooks) {
  setupApplicationTest(hooks);
  test("visiting /", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
    // assert.dom("h2").hasText("Congratulations, you made it!");


  });
});
