import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | my-collection', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:my-collection');
    assert.ok(controller);
  });

  test('gets albums from store', function(assert) {
    assert.expect(1);

    let controller = this.owner.lookup('controller:my-collection');
    controller.set('store', {
      findAll(what) {
        assert.equal(what, 'album', 'looking for all albums');
      }
    });

    controller.send('getAlbums');
  });
});
