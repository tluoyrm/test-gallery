/**
 * Created by Angelika on 09.06.2017.
 */

const API_ENDPOINT = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF';

export const fetchImages = () => {
    return fetch(API_ENDPOINT).then(function(response) {
        return response.json().then(function(json) {
            return json.photos.map(
                ({id, image_url, name, user}) => ({id: `${id}`, url: `${image_url}`, name: `${name}`, author: `${user.firstname} ${user.lastname}`})
            );

        })
    })
};
