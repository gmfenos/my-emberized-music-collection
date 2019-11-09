import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add album', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /add-album', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/add-album');
  });
});
