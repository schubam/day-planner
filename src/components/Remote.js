function search(query, callback) {
    const url = `http://glacial-wave-26894.herokuapp.com/meals.json?term=${query}`;
    return fetch(url, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(callback);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
}

function parseJSON(response) {
    return response.json();
}

const Remote = { search };
export default Remote;