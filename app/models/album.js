import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    artistName: DS.attr(),
    albumName: DS.attr(),
    genres: DS.attr(),
    albumCoverUrl: DS.attr(),
    yearOfRelease: DS.attr(),
    spotifyLink: DS.attr()
});
