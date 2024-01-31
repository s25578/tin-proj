import client from '@/axios'
import { defineStore } from 'pinia'

export const planetStore = defineStore('planets', () => {

    const endpoint = 'planets'

    function create(data) {
        return client.create(`/${endpoint}`, data)
    }

    function getOne(id) {
        return client.getOne(`/${endpoint}/${id}`)
    }

    function getAll() {
        return client.getAll(`/${endpoint}`)
    }

    function update(id, data) {
        return client.update(`/${endpoint}/${id}`, data)
    }

    function remove(id) {
        return client.remove(`/${endpoint}/${id}`)
    }

    return { create, getAll, getOne, update, remove }
})