import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-album', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-album');
    assert.ok(route);
  });
});
