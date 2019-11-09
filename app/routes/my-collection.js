import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        let controller = this.controllerFor('my-collection');
        controller.send('getAlbums');
    }
});
