import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        let controller = this.controllerFor('add-album');
        controller.set('newAlbum', this.get('store').createRecord('album'));
    }
});
