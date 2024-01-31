import axios from 'axios'

const client = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})


client.create = function (url, data) {
    return client
        .post(url, data)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

client.getOne = function (url) {
    return client
        .get(url)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

client.getAll = function (url) {
    return client
        .get(url)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

client.update = function (url, data) {
    return client
        .put(url, data)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}


client.remove = function (url) {
    return client
        .delete(url)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}
export default client