export default function() {

    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced

    this.post('/albums', (schema, request) => {
        return schema.albums.create(request.requestBody);
    });
}
