import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | add-album', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:add-album');
    assert.ok(controller);
  });

  test('creates new album on init', function(assert) {
    assert.expect(1);

    let controller = this.owner.lookup('controller:add-album');
    assert.ok(controller.get('newAlbum'));
  });

  test('persists a new album', function(assert) {
    assert.expect(1);

    let controller = this.owner.lookup('controller:add-album');

    controller.set('newAlbum', {
      save() {
        assert.ok(true, 'it executes save on newAlbum')
      }
    });

    controller.send('submit');
  });
});
