import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        getAlbums() {
            this.set('albums', this.get('store').findAll('album'));
        }
    }
});
