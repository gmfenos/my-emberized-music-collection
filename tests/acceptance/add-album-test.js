import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | add album', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /add-album', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/add-album');
  });

  test('add a new album', async function(assert) {
    await visit('/add-album');

    await fillIn("input#artist-field", "Dream Theater");
    await fillIn("input#album-field", "Six degrees of inner turbulence");
    await fillIn("input#genres-field", "Progressive Metal");
    await fillIn("input#cover-field", "https://en.wikipedia.org/wiki/Six_Degrees_of_Inner_Turbulence#/media/File:Dream_Theater_-_Six_Degrees_of_Inner_Turbulence.jpg");
    await fillIn("input#year-field", "2002");
    await fillIn("input#spotify-field", "https://open.spotify.com/album/4INFVEhhhnLiqNR4MVPaX8");

    await click('button#submit');

    assert.equal(currentURL(), '/my-collection');
  });
});
