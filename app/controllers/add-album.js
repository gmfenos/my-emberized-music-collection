import Controller from '@ember/controller';

export default Controller.extend({

    newAlbum: null,

    init() {
        this._super(...arguments);

        this.set('newAlbum', this.get('store').createRecord('album'));
    },

    actions: {
        submit() {
            this.get('newAlbum').save().then(() => {
                this.transitionToRoute('my-collection');
            });
        }
    }
});
